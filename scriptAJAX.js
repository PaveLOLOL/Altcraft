let xhttps = new XMLHttpRequest();

xhttps.onreadystatechange = function(){
   if (this.readyState == 4 && this.status == 200) {
       getAnswerFromServer(this.responseText) 
   }
}

xhttps.open('GET', ' https://github.com/altkraft/for-applicants/raw/master/frontend/titanic/passengers.json', true)
xhttps.send();

function getAnswerFromServer(data) {
    console.log(data)
}


