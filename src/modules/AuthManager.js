const baseURL = "http://localhost:8000"

export default {
    registerUser(user) {
        return fetch(`${baseURL}/register`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
    },
    loginUser(userCreds) {
        return fetch(`${baseURL}/login`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userCreds)
        })
        .then(response => response.json())
    }
}