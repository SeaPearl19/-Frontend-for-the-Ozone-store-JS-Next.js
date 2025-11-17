const getData = () => {
    return fetch('https://frontend-for-ozone-default-rtdb.firebaseio.com//goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData