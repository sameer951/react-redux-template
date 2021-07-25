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

    public static encryptStringData(data: string): string {
        let encrypted: string = data;
        if (data && data != 'null') {
            let key = CryptoJS.enc.Utf8.parse('4792074259234687');
            let iv = CryptoJS.enc.Utf8.parse('4792074259234687');
            encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key,
                {
                    keySize: 128 / 8,
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                });
        }
        return encrypted;
    }

    public static decryptStringData(encryptedData: string): any {
        let decrypted: string = encryptedData;
        if (encryptedData && encryptedData != 'null') {
            let key = CryptoJS.enc.Utf8.parse('4792074259234687');
            let iv = CryptoJS.enc.Utf8.parse('4792074259234687');
            decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8);
        }
        return decrypted;
    }

    public encryptDataUsingKeyPadding(data: string, keyValue: string, ivValue: string): string {
        let key = CryptoJS.enc.Utf8.parse(keyValue);
        let iv = CryptoJS.enc.Utf8.parse(ivValue);
        let encrypted: string = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return encrypted;
    }

    public decryptDataUsingKeyPadding(encryptedData: string, keyValue: string, ivValue: string): string {
        let key = CryptoJS.enc.Utf8.parse(keyValue);
        let iv = CryptoJS.enc.Utf8.parse(ivValue);
        let decrypted: string = CryptoJS.AES.decrypt(encryptedData, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
        return decrypted;
    }

}