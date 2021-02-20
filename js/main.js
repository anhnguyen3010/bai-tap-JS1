//
function getName (name){
    return document.getElementsByName(name);
}
function getID (id){
    return document.getElementById(id);
}

var car = getName("selector")[0];
var suv = getName("selector")[1];
var black = getName("selector")[2];

var carCheck = getID("carCheck");
var suvCheck = getID("suvCheck");
var blackCheck = getID("blackCheck");

var car = getID("car");
var suv = getID("suv");
var black = getID("black");

car.addEventListener("click",function(){
    if(carCheck.checked){
        carCheck.checked="";
    }else{
        carCheck.checked="checked";
    }
});
suv.addEventListener("click",function(){
    if(suvCheck.checked){
        suvCheck.checked="";
    }else{
        suvCheck.checked="checked";
    }
});
black.addEventListener("click",function(){
    if(blackCheck.checked){
        blackCheck.checked="";
    }else{
        blackCheck.checked="checked";
    }
});

getID('tinhTien').onclick = tinhTienGrab;

function tinhTienGrab(){
    var soKM = getID("soKM");
    var tgCho = getID("tgCho"); 
    if(isNaN(soKM.value)||isNaN(tgCho.value)){
       return alert("Vui lòng nhập giá trị số");
    } else{
        soKM = parseFloat(soKM.value);
        tgCho = parseFloat(tgCho.value);
        
        if(carCheck.checked){
            return alert(tinhTienCar(soKM,tgCho));
        }else if(suvCheck.checked){
            return alert(tinhTienSuv(soKM,tgCho));
        }else if(blackCheck.checked){
            return alert(tinhTienBlack(soKM,tgCho));
        }else{
            return alert("Vui lòng chọn loại phương tiện");
        }
    }

}
//Tính tiền cho Car
function tinhTienCar(km,tg){
    //tiền vận chuyển bằng Car
    var tienVC=0;
    if(km <= 1 && km > 0){
        tienVC = 8000;
    }else if(km <= 19 && km >= 1){
        tienVC = km*7500 + 8000;
    }else{
        tienVC = km*7000 + 19*7500 + 8000;
    }
    // phí chờ
    const PHICHO=2000;
    var tienCho;
    if(tg <= 3){
        tienCho = 0;
    }else{
        var i=0;
        while(tg >= 3){
            tg /=3;
            i++;
        }
        tienCho = i*PHICHO;
    }
    return tongTien = tienVC + tienCho;
}

// tính tiền SUV
function tinhTienSuv(km,tg){
    //tiền vận chuyển bằng Car
    var tienVC=0;
    if(km <= 1 && km > 0){
        tienVC = 9000;
    }else if(km <= 19 && km >= 1){
        tienVC = km*8500 + 9000;
    }else{
        tienVC = km*8000 + 19*8500 + 9000;
    }
    // phí chờ
    const PHICHO=3000;
    var tienCho;
    if(tg <= 3){
        tienCho = 0;
    }else{
        var i=0;
        while(tg >= 3){
            tg /=3;
            i++;
        }
        tienCho = i*PHICHO;
    }
    return tongTien = tienVC + tienCho;
}

//tính tiền Black
function tinhTienBlack(km,tg){
    //tiền vận chuyển bằng Car
    var tienVC=0;
    if(km <= 1 && km > 0){
        tienVC = 10000;
    }else if(km <= 19 && km >= 1){
        tienVC = km*9500 + 10000;
    }else{
        tienVC = km*9000 + 19*9500 + 10000;
    }
    // phí chờ
    const PHICHO=3500;
    var tienCho;
    if(tg <= 3){
        tienCho = 0;
    }else{
        var i=0;
        while(tg >= 3){
            tg /=3;
            i++;
        }
        tienCho = i*PHICHO;
    }
    return tongTien = tienVC + tienCho;
}


