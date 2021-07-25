import * as CryptoJS from 'crypto-js';

function getStorageHash() {
    const key = 'i_love_myportal';
    return CryptoJS.AES.encrypt(JSON.stringify(this['version']), key).toString();
}
const initialState: any = {
    version: '0.0.1',
    storageHash: "U2FsdGVkX1/0HYIUj1W5WCKEc0vo88PwGVlU8VnJGq0=",
};
// , storageHash: getStorageHash.call(initialState)
export const Env = (state = { ...initialState }, { type, payload }) => {

    switch (type) {

        case 'setenvInitialState'://use this for modifying localstorage save behaviour
            return {
                ...payload,
            }
        default:
            return state;
    }
}
// function getStorageHash() {
//     const { version } = initialState;
//     const key = 'i_love_myportal';
//     return CryptoJS.AES.encrypt(JSON.stringify(version), key).toString();
// }