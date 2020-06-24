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
                "Content-Type": 'application/json',
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            },
            body: JSON.stringify(wine)
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
    updateWine(Wine) {
        return fetch(`${baseUrl}/wines/${Wine.id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('notch-list-token')}`
            },
            body: JSON.stringify(Wine)
        })
    }
}