import Cookies from "js-cookie";
import { CryptoUtil } from './cryptoutil';
export default class CookieUtil {
    public static getCookie(key: string, req: any = {}) {
        if (req && req.headers && req.headers.cookie) {
            return (CryptoUtil.decryptData(
                ((req.headers.cookie) + '')?.split('; ')?.filter(
                    (cookie) => cookie.includes(key + "=")
                )?.[0]?.replace(new RegExp(key + "=", "g"), '')));
        }
        else {
            return CryptoUtil.decryptData(Cookies.get(key))
        }
    }
    public static setCookie(key: string, value: any, req: any = {}) {
        if (req && req.headers && req.headers.cookie) {
            req.headers.cookie.set(key, value);
        }
        else {
            Cookies.set(key, CryptoUtil.encryptData(value));
        }
    }
}