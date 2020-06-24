const baseUrl = "http://localhost:8000"

export default{
    getDrinkStyles() {
        return fetch(`${baseUrl}/drink_styles`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            }
        })
        .then(response => response.json())
    }
}
