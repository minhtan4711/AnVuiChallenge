// const firstReq = new XMLHttpRequest() //khởi tạo 

// firstReq.addEventListener('load', function () {
//     console.log("FIRST REQUEST WORKED!!!")
//     const data = JSON.parse(this.responseText)
//     // for (let planet of data.results) {
//     //     console.log(planet.name)

//     // }
//     const filmURL = data.results[0].films[0];
//     const filmReq = new XMLHttpRequest();
//     filmReq.addEventListener('load', function() {
//         console.log("SECOND REQUEST WORKED!!!")
//         const filmData = JSON.parse(this.responseText)
//         console.log(filmData)
//     })
//     filmReq.addEventListener('error', function(e) {
//         console.log("ERROR!!! ", e)
//     })
//     filmReq.open('GET', filmURL)
//     filmReq.send()
// })
// firstReq.addEventListener('error', function (e) {
//     console.log("ERROR!!!", e)
// })

// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();
// console.log('Request Sent')

//Một cách khác để lấy data dùng fetch (cứ lấy một data mới là phải dùng fetch)
//fetch chỉ bị lỗi khi bị mất kết nối mạng
//mặc dù link để lấy data về sai thì nó sẽ trả về 404 
// const checkStatusAndParse = (response) => {
//     if (!response.ok) { //check lỗi 
//         throw new Error('Status Code Error: ${response.status}');
//     } else {
//         return response.json();
//     }
// };
// const printPlanet = (data) => {
//     console.log('LOADED 10 PLANETS')
//     for (let planet of data.results) {
//         console.log(planet.name)
//     }
//     return Promise.resolve(data.next); //fix lỗi ở dòng 51
// }
// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => { //để lấy link gốc 
//     return fetch(url);
// }
// fetchNextPlanets()
//     .then(checkStatusAndParse)
//     .then(printPlanet)
//     // .then((data) => { //đến đây sẽ xảy ra lỗi vì không có dữ liệu nào được trả về 
//     //     const nextURL = data.next;
//     //     return fetch(nextURL);
//     // })
//     .then(fetchNextPlanets)
//     .then(checkStatusAndParse)
//     .then(printPlanet)
//     .catch((err) => {
//         console.log('SOMETHING WENT WRONG WITH FETCH!');
//         console.log(err);
//     })


const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return axios.get(url)
}
const printPlanets = ({ data }) => {
    console.log(data)
    for (let planet of data.results) {
        console.log(planet.name)
    }
    return Promise.resolve(data.next)
}

fetchNextPlanets()
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .catch((err) => {
        console.log(err)
    })