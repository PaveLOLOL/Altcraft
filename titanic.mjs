"use strict"

console.log('Success!!! Data imported')

const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'http://localhost:5000/'

const main = async () => {
    const data = await getData(url)
    console.log('Async/await is work', data)
    const passenger  = data.map( el => {
      delete el["body"]    // удалим ненужные поля
      delete el["boat"]
      delete el["class"]
      delete el["embarked"]
      delete el["fare"]
      delete el["home.dest"]
      delete el["parch"]
      delete el["sibsp"]
      return el
    });

      if (typeof data === 'object') {
        console.log('Async/await is work', passenger)
      // document.querySelector('.content').innerHTML = `<table class='passenger'></table>`
      getTableData(passenger)
    }
  }

main()

const getTableData = passenger => {
  console.log('table create', passenger)
  const table = document.querySelector('.content')
  const tbody = document.createElement('tbody')
  passenger.forEach(elementHorizon => {
    const tr = document.createElement('tr')
    const fragment = document.createDocumentFragment()
    const keys = Object.keys(passenger[0])
    keys.forEach(elementvVertical => {
      let td = undefined
      if ( elementvVertical === 'id') {
        td = document.createElement('th')
      } else {
          td = document.createElement('td')
          td.innerText = elementHorizon[elementvVertical]
        }
      }
    )
    tr.appendChild(fragment)
    tbody.appendChild(tr)
    table.append(tbody)
  });
} 

// todo доработать для работы с загрузкой таблицы lazy loading () 

let intersectionObserver = new IntersectionObserver(function(entries) {
    if (entries[0].intersectionRatio <= 0) return;
  
    loadItems(15);
    console.log('Loaded new items');
  });
 
  intersectionObserver.observe(document.querySelector('.scrollerFooter'));

  // todo доработать функцию поиск по имени (при соответствии строки в инпуте(пока что полном соответствии) с пробежкой по объету passenger)
  // todo привязать кнопку поиск к input 
  // todo сделать активный поиск(при вводе сразу подсвечивались похожие имена)
  // todo убрать AJAX оставить Async/await
  // todo статику вынести в отдельную директорию
  // todo переделать используя express (чтобы решить проблему CORS и не использовать flask)
