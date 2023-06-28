function load () {
  var msg = window.document.getElementById('msg')
  var image = window.document.getElementById('image')
  var date = new Date()
  var hour = date.getHours()
  msg.innerHTML = `Agora são ${hour} horas`
  
  if (hour >= 5 && hour < 12){
    //BOM DIA 
    image.src = 'fotomanha.png'
    document.body.style.background = '#F9BF92'
  } else if (hour >= 12 && hour < 18) {
    //BOA TARDE
    image.src = 'fototarde.png'
    document.body.style.background = '#3981A3'
  } else {
    //BOA NOITE
    image.src = 'fotonoite.png'
    document.body.style.background = '#283C43'
  }
}
