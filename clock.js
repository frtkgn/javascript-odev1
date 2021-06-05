let ad=prompt("Adınız Lütfen.. :)");
let isim=document.querySelector("#myName")
isim.innerHTML=`${ad}`


function ekrani_karsila(){
    let tarih=new Date();
    let saat = tarih.getHours();
    
    let dakika = tarih.getMinutes();
    if(dakika<10){
        dakika=`0${dakika}`
    }
    let saniye = tarih.getSeconds();
    if(saniye<10){
        saniye=`0${saniye}`

    }
    let gun=tarih.getDay();
    let hangigun;
    if(gun===1){
    hangigun="pazartesi";
    }
    else if(gun===2){
        hangigun="salı";
    }
    else if(gun===3){
        hangigun="çarşamba";
    }
    else if(gun===4){
        hangigun="persembe";
    }
    else if(gun===5){
        hangigun="cuma";

    }
    else if(gun===6){
        hangigun="cumartesi";
    }
    else {
        hangigun="pazar";
    }

    let ekransaati=`${saat}:${dakika}:${saniye} ${hangigun}`
    document.querySelector("#myClock").innerHTML=ekransaati
    setTimeout(ekrani_karsila,1000)
}

ekrani_karsila();





