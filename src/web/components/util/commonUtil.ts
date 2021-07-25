export default class CommonUtil {
    public static toString(obj: any) {
        if (!obj) return "";
        return JSON.stringify(obj)
    }

    
}