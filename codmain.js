function contador(){
    var ini = window.document.getElementById('nin').value
    var fim = window.document.getElementById('nfim').value
    var pas = Number(window.document.getElementById('npas').value)
    var msg = window.document.getElementById('msg')
    var arm = Number(ini)
    msg.innerHTML = ``
    if(pas==0){
        alert('Passo igual a "0" inválido, alterando para passo igual a 1!')
        pas = 1
    }
    if (ini<fim) {
        while(fim>=arm){
            msg.innerHTML += ` ${arm}\u{1F449}`
            arm += pas
        }
    }
    else if (ini>=fim) {
        arm= ini
        while(arm>=fim){
            msg.innerHTML += ` ${arm}\u{1F449}`
            arm -= pas
        }
    }
    msg.innerHTML += ` ${arm}\u{1F44D}`
   
}