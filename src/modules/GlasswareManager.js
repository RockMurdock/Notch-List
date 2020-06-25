const baseUrl = "http://localhost:8000"

export default{
    getGlassware() {
        return fetch(`${baseUrl}/glasswares`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            }
        })
        .then(response => response.json())
    }
}