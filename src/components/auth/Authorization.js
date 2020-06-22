import { useState } from "react"
import AuthManager from "../../modules/AuthManager";


const Authorization = () => {

    const [loggedIn, setIsLoggedIn] = useState(false)

    const isAuthenticated = () =>
        loggedIn || sessionStorage.getItem("notch-list-token") !== null

    const register = registrationInfo => {
        return AuthManager.registerUser(registrationInfo)
            .then(parsedResponse => {
                if ("token" in parsedResponse) {
                    sessionStorage.setItem("notch-list-token", parsedResponse.token)
                }
            })
    }

    const login = credentials => {
        return AuthManager.loginUser(credentials)
            .then(parsedResponse => {
                if ("valid" in parsedResponse && parsedResponse.valid && "token" in parsedResponse) {
                    sessionStorage.setItem("notch-list-token", parsedResponse.token)
                    setIsLoggedIn(true)
                }
            })
    }

    const logout = () => {
        setIsLoggedIn(false)
        sessionStorage.removeItem("notch-list-token")
    }

    return { isAuthenticated, logout, login, register }
}

export default Authorization