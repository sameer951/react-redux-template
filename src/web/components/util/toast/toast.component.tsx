import React, { Component, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ToastComponent extends Component {

    isSSR = typeof window === "undefined";
    componentDidMount() {
        if (!this.isSSR) {
            if (!navigator.onLine) setTimeout(this.emitOnlineStatus, 1000);
            window.addEventListener('online', this.emitOnlineStatus);
            window.addEventListener('offline', this.emitOnlineStatus);
        }
    }
    componentWillUnmount() {
        window.removeEventListener('online', this.emitOnlineStatus);
        window.removeEventListener('offline', this.emitOnlineStatus);
    }
    emitOnlineStatus(e) {
        const online = { 'dismiss-id': "offline-toast", 'toast-msg': 'You are back online.', 'toastId': "online-toast", 'toast-type': 'success' }
        const offline = { 'dismiss-id': "online-toast", 'toast-msg': 'You are offline !!', 'toastId': "offline-toast", 'toast-type': 'warning' }
        const config = navigator.onLine ? online : offline;
        toast.dismiss(config['dismiss-id']);
        ToastComponent[config['toast-type']]?.(config['toast-msg'], { toastId: config.toastId });
    }

    public static warning(WaringMessage = '', options = {}) {
        if (WaringMessage)
            toast.warn(WaringMessage, {
                autoClose: 2500,
                closeOnClick: false,
                className: "font-weight-bold text-white text-center",
                position: "top-right",
                ...options
            });
    }
    public static success(SuccessMessage = '', options = {}) {
        if (SuccessMessage)
            toast.success(SuccessMessage, {
                autoClose: 2500,
                closeOnClick: false,
                className: "font-weight-bold text-white text-center",
                position: "top-right",
                ...options
            });
    }
    public static dismiss(id = '') {
        if (id === '') toast.dismiss();
        else toast.dismiss(id);
    }


    static toast(msg = "", options: any = {
        autoClose: 2500,
        className: "font-weight-bold text-white text-center",
        position: "top-right"
    }) {
        toast(msg, { ...options })
    }

    render() {
        return (
            <Fragment>
                <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={true}
                    pauseOnHover></ToastContainer>
            </Fragment>
        )
    }
}

