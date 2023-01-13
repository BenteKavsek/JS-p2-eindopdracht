const apiCall = await fetch("https://www.digi-api.com/api/v1/digimon")
    .then((response) => response.json()
    .then((responseJSON) => {

        return responseJSON.content;
    })
)

for (let val of apiCall) {
    const name = val.name;
    const url = val.href;
    console.log(name)
    console.log(url)
}


