import CookieUtil from "./cookieUtil";

export class StorageService {
    static isStorageSupported: boolean = true;
    static isSSR: boolean = typeof window === 'undefined';
    static requestHeaders: any = undefined;
    static environment: any;
    constructor() { }


    static setInSessionStorage(k: string, v: string) {
        if (!this.isSSR) { window.sessionStorage.setItem(k, v); }
    }
    static getFromSessionStorage(k: string) {
        if (!this.isSSR) return window.sessionStorage.getItem(k);
    }
    static removeFromSessionStorage(k: string) {
        if (!this.isSSR) { window.sessionStorage.removeItem(k); }
    }
    static checkStorageSupported() {
        if (this.isSSR) return false;
        var testKey = '_storage_test', storage = window.sessionStorage;
        try {
            storage.setItem(testKey, '1');
            storage.removeItem(testKey);
            return true;
        } catch (error) { return false; }
    }

    static getFromStorage(k: any) {
        if (!this.isSSR) {
            if (this.isStorageSupported == true) {
                if (window.localStorage.getItem(k) === undefined) { return null; }
                else { return window.localStorage.getItem(k); }
            } else if (typeof window['local'][k] !== undefined && window['local'][k]) {
                return window['local'][k];
            } else { return null; }
        }
    }

    static setInStorage(k: any, v: any) {
        if (!this.isSSR){
            if (this.isStorageSupported == true) {
                window.localStorage.setItem(k, v);
            } else {
                setTimeout(() => { window['local'][k] = v; }, 1);
            }
        }
       
    }
    static unsetFromStorage(k: any) {
        if (!this.isSSR)
        {
            if (this.isStorageSupported == true) { window.localStorage.removeItem(k); }
            else { setTimeout(() => { delete window['local'][k]; }, 1); }
        }
    }

    static generateRandomToken(length: number = 18) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
