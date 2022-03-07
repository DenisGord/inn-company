export function daData(query, setDataList){
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
    var token = "b6bfd1e87066733c21245734285376423ed1dbaf";
    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }
    fetch(url, options)
.then(response => response.json())
.then(result => setDataList(result.suggestions))
.catch(error => console.log("error", error));
}