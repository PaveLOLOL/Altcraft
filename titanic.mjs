"use strict"

console.log('доступ есть')

const url = 'http://localhost:5000/'

  const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const main = async () => {
    const data = await getData(url)
    console.log(data)
}

if (typeof main() === 'object') {
    const passengerArrayObj = main()
    document.querySelector('.content').innerHTML = `<table class='passenger'></table>`
}

// if (typeof  titanicJSONObj === 'object') {
//     const passengerArrayObj = main()
//     document.querySelector('.content').innerHTML = `<tr class='passenger'></tr>`
// }

// для работы с загрузкой таблицы lazy loading

let intersectionObserver = new IntersectionObserver(function(entries) {
    if (entries[0].intersectionRatio <= 0) return;
  
    loadItems(15);
    console.log('Loaded new items');
  });
 
  intersectionObserver.observe(document.querySelector('.scrollerFooter'));

  // todo 2) посмотреть как отрабатывает querySelector('.content'),
  // todo 3) в entries должен поступать колличество записей в таблице.
