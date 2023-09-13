import Request from "./API";

const Auth = {
    token_id: localStorage.getItem('token_id'),
    user_token: localStorage.getItem('logged_user'),
    validateUser: async (loginCb, logoutCb) => {
        const tokenID = Auth.token_id;
        const userToken = Auth.user_token;
        const params = {
            user: userToken
        };

        if(tokenID && userToken) {
            try {
                const loggedIn = await Request().post(`/user/login/${tokenID}`, params);

                if( loggedIn ) {
                    if(loginCb) {
                        loginCb(loggedIn.data);
                    }

                    return true;
                }

                return false;
            } catch( err ) {
                if( logoutCb ) {
                    logoutCb();
                }
            }

            return false;
        }

        return false;
    },
    logout: cb => {
        localStorage.removeItem('token_id');
        localStorage.removeItem('logged_user');

        if(cb) {
            cb();
        }
    }
}

export default Auth;