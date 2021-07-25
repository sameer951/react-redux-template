
const initialState: any = {
    userDetails: {},
    token: ''
};
export const Auth = (state = initialState, action: any) => {

    switch (action.type) {

        case 'setauthInitialState'://use this for modifying localstorage save behaviour
            return {
                ...action.payload,
            }
        default:
            return state;
    }
}