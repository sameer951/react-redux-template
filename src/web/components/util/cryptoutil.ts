import * as CryptoJS from 'crypto-js';

export class CryptoUtil {
    static key = 'secret';
    public static encryptData(data: any, key: string = this.key) {
        return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString()
    }
    public static decryptData(data: string, key: string = this.key) {
        let bytes = CryptoJS.AES.decrypt(data, key)
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));;
    }

}