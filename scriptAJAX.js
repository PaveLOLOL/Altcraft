let xhttps = new XMLHttpRequest();

xhttps.onreadystatechange = function(){
   if (this.readyState == 4 && this.status == 200) {
       getAnswerFromServer(this.responseText) 
   }
}

xhttps.open('GET', ' http://localhost:5000/', true)
xhttps.send();

function getAnswerFromServer(data) {
    console.log('AJAX is work', data)
}


