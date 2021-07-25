import * as CryptoJS from 'crypto-js';

export class CryptoUtil {
    static key = 'secret';
    public static encryptData(data: any, key: string = this.key) {
        return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString()
    }
    public static decryptData(data: string, key: string = this.key) {
        if (data) {
            let _v = CryptoJS.AES.decrypt(data, key)?.toString(CryptoJS.enc.Utf8);
            return _v && typeof _v === 'string' ? JSON.parse(_v) : null;
        }
        return null;
    }

    

}