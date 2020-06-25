const baseUrl = "http://localhost:8000"

export default{
    getBeer() {
        return fetch(`${baseUrl}/beers`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            }
        })
        .then(response => response.json())
    },
    addBeer(beer) {
        return fetch(`${baseUrl}/beers`, {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            },
            body: beer
        }).then(resp => resp.json())
    },
    deleteBeer(beer) {
        return fetch (`${baseUrl}/beers/${beer}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            }
        })
    },
    getBeerById(beerId) {
        return fetch(`${baseUrl}/beers/${beerId}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            }
        })
            .then(resp => resp.json())
    },
    updateBeer(Beer, id) {
        return fetch(`${baseUrl}/beers/${id}`, {
            "method": "PUT",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('notch-list-token')}`
            },
            body: Beer
        })
    }
}