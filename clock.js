/**
 * Created by Admin on 2017/7/4.
 */
function showRealTime() {
    var date= new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    $("#hours").css("transform","rotate("+hoursDeg(hh,mm)+"deg)");
    $("#mins").css("transform","rotate("+minsDeg(mm,ss)+"deg)");
    $("#secs").css("transform","rotate("+secsDeg(ss)+"deg)");
    $("#timetext").html(format(hh)+" : "+format(mm)+" : "+format(ss));
    setTimeout(function () {
        showRealTime();
    },1000);
}
function hoursDeg(i,j) {//i->hh,j->mm
    var h=(i>=12?(i-12):i);
    var deg=h*30+j*0.5;
    return deg;
}
function minsDeg(i,j) {//i->mm,j->ss
    var deg = i*6+(j/10);
    return deg;
}
function  secsDeg(i) {//i->ss
    return i*6;
}
function format(i) {
    if(i<10){
        i="0"+i;
    }
    return i;
}