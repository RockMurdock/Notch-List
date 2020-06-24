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
                "Content-Type": 'application/json',
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("notch-list-token")}`
            },
            body: JSON.stringify(beer)
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
    updateBeer(Beer) {
        return fetch(`${baseUrl}/beers/${Beer.id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('notch-list-token')}`
            },
            body: JSON.stringify(Beer)
        })
    }
}