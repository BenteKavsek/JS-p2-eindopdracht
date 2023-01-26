const apiCall = await fetch("https://www.digi-api.com/api/v1/digimon")
    .then((response) => response.json()
    .then((data) => {

        return data.content;
    })
)

for (let val of apiCall) {
    const name = val.name;
    const url = val.href;
    console.log(name)
    console.log(url)
}


