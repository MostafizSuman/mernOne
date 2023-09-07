function format(n)
{
    return (n<10? "0"+n.toString(): n.toString());
}
const timeElem=document.getElementById("digitalClock");
function clock(){
    let date=new Date();
    let months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec" ];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Fiday","Saturday"];
    //document.write(month.toString());
    let fullDate= format(date.getDate()) + ' '+ months[date.getMonth()]+ " "+date.getFullYear().toString()
    let time=format(date.getHours())+":"+format(date.getMinutes())+":"+format(date.getSeconds());
    //document.write('<h1>'+fullDate+'<br>'+ days[date.getDay()] +'</h1>');
    //document.write('<h1>'+time+'<br></h1>');
    timeElem.innerHTML='<h2>'+fullDate+'<br>'+ days[date.getDay()] +'</h2>'+'<h1>'+time+'<br></h1>';
}
clock();
setInterval(clock,1000);


