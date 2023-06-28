function load () {
  var msg = window.document.getElementById('msg')
  var image = window.document.getElementById('image')
  var date = new Date()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var seconds = date.getSeconds()
  msg.innerHTML = `Agora são ${hour}:${minute}:${seconds} `
  
  if (hour >= 5 && hour < 12){
    //BOM DIA 
    image.src = './public/fotomanha.png'
    document.body.style.background = '#F9BF92'
  } else if (hour >= 12 && hour < 18) {
    //BOA TARDE
    image.src = './public/fototarde.png'
    document.body.style.background = '#3981A3'
  } else {
    //BOA NOITE
    image.src = './public/fotonoite.png'
    document.body.style.background = '#283C43'
  }
}
setInterval(load, 1000);

