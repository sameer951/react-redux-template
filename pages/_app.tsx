import { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import { CryptoUtil } from '../src/web/components/util/cryptoutil';
import { useStore } from '../src/web/redux/store'
import { StorageService } from '../src/web/components/util/storage.service';
import Router from 'next/router';
import Cookies from "js-cookie";
import ToastComponent from '../src/web/components/util/toast/toast.component';
import ErrorBoundary from '../src/web/components/util/errorboundary/errorboundary.component';
import { Meta } from '../src/web/layout/meta.component';
import { LocalLayout } from '../src/web/layout/layout.component';

const isSSR = typeof window === "undefined";
export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const isForceCSRLoad = false;
  const [isMounted, setMount] = useState(false);
  useEffect(() => {
    if (!isSSR) initialize({ store });
    setMount(true);
  }, [])
  return (<>
    <Meta></Meta>
    {<ErrorBoundary><ToastComponent /></ErrorBoundary>/**sample use*/}
    <Provider store={store}>
      {!isForceCSRLoad || (!isSSR && isMounted) ? <LocalLayout><Component {...pageProps} /></LocalLayout> : 'Loading ...'}
    </Provider>
  </>
  )
}

function initialize({ store }) {
  try {
    //on storage updates
    window.onstorage = (e) => {
      if (e.key == 'logout') {/**Logout other tabs if e.newValue==true */ }
      if (e.key == 'a_data') {
        // a_data updates onlogin auth_data
        //CryptoUtil.decryptData(e.newValue) set auth data 
        if (window.location.pathname.includes('/login')) { Router.back(); }
      };
    }
    //update store
    let _store = CryptoUtil.decryptData(StorageService.getFromStorage('raptor'));
    if (_store) {
      if (_store?.env?.config?.storageHash == store.getState()?.env?.config?.storageHash) {
        let a_data = CryptoUtil.decryptData(StorageService.getFromStorage('a_data'));
        _store.auth.token = a_data?.sessionToken;
        _store.auth.userDetails = { ...a_data, ..._store?.auth?.userDetails };
        Object.keys(_store).forEach((key) => {
          store.dispatch({ type: 'set' + key + 'InitialState', payload: _store[key] });
        });
      } else {
        window.localStorage.clear();
        Object.keys(Cookies.get())
          .forEach((cookieName) => { Cookies.remove(cookieName); });
        //if logedin logout
      }
    }

    window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      let state = store.getState();
      delete state.layout;
      StorageService.setInStorage('raptor', CryptoUtil.encryptData(state));
      StorageService.setInStorage('tabCloseTime', new Date().getTime().toString());
    });
  } catch (err) { console.error(err); }
}