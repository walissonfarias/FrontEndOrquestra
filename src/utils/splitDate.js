function splitTime(events){

    const time = String (events.duration)
    const minutos = time.split(" ")

    let converte = Number(minutos[0])
    let cont=0;

    while(converte >= 60){
        converte-=60
        cont++;   
    }

    const time2 = String(events.startTime)
    
    var aux = time2.split(':')
    var hora = +aux[0];
    var minutoss = +aux[1];

    ( hora + cont > 24 ) ? hora = hora+cont -24 : hora+= cont;
    ( minutoss+converte > 60 ) ? minutoss = minutoss + converte - 60 : minutoss+=converte ;
    
    if(minutoss === 60) {
        hora++
        if(hora === 24)
            hora = 0
        return hora + ":00"
    }
    
    return  hora + ":" + minutoss
}
export default splitTime