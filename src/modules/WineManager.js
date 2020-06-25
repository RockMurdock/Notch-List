const baseUrl = "http://localhost:8000"

export default{
    getWine() {
        return fetch(`${baseUrl}/wines`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            }
        })
        .then(response => response.json())
    },
    addWine(wine) {
        return fetch(`${baseUrl}/wines`, {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            },
            body: wine
        }).then(resp => resp.json())
    },
    deleteWine(wine) {
        return fetch (`${baseUrl}/wines/${wine}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            }
        })
    },
    getWineById(wineId) {
        return fetch(`${baseUrl}/wines/${wineId}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            }
        })
            .then(resp => resp.json())
    },
    updateWine(Wine, id) {
        return fetch(`${baseUrl}/wines/${id}`, {
            "method": "PUT",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('notch-list-token')}`
            },
            body: Wine
        })
    }
}