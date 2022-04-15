const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://github.com/altkraft/for-applicants/raw/master/frontend/titanic/passengers.json'

const main = async () => {
    const data = await getData(url)
    console.log(data)
}

main();