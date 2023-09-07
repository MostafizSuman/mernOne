function convertedTime(str)
{
    let h,m,sec;
    let regE=/:|AM|PM/i;
    let regE2=/\D/;
    let s=str.split(regE2);
    //for(i of s)
        //document.writeln(i+'<br>');
    let sInt=s.map((a)=>{return parseInt(a);});
    //for(j of sInt)
        //document.writeln(j+'<br>');
    let indicator=str.substr(-2,2);
    if(indicator.toLowerCase()=='am')
    {
        sInt[0]%=12;
    }
    else{
        sInt[0]=sInt[0]%12 + 12;
    }
    let convTimeStr="";
    for(i=0;i<3;i++)
    {
        //document.write("sint:"+sInt[i]+'<br>')
        if(sInt[i]<10)
            convTimeStr+="0"+sInt[i].toString();
        else
            convTimeStr+=sInt[i].toString();
        if(i<2)
            convTimeStr+=":";
    }
    document.write("Converted Time: "+convTimeStr+'<br>');

    
}
/*
let str1="02:01:25PM";
document.write(str1+'<br>');
document.write(convertTime(str1)+'<br>');
convertTime(str1);
let str2="02:01:25AM";
document.write(str2+'<br>');
convertTime(str2);
let indicator1=str1.substring(str1.length-2,str1.length);
let indicator2=str2.substr(-2,2);
document.write(indicator1+'<br>');
document.write(indicator2);
*/
document.writeln(convertTime("07:05:45PM"));
document.writeln(convertTime("12:40:22AM"));
document.writeln(convertTime("12:45:54PM"));
document.writeln(convertTime("05:32:33PM"));
document.writeln(convertTime("11:59:59PM"));
document.writeln(convertTime("11:59:59AM"));

function convertTime(str) {
	let regEx=/\D/;
	let separetedStr=str.split(regEx,3);
    //document.writeln(separetedStr);
	let hour=parseInt(separetedStr[0]);
    //document.writeln(hour);
	let meridian=(str.substr(-2,2)).toLowerCase();
    //document.writeln(meridian);
	if(meridian=="am")
		{
			hour%=12;
		}
	else
		{
			hour=hour%12 +12;
		}
	let convStr="";
	if(hour<10)
		convStr+="0"+hour.toString();
	else
		convStr+=hour.toString();
	convStr+=":";
	for(i=1;i<3;i++)
		{
			convStr+=separetedStr[i].toString();
			if(i==1)
				convStr+=":";
		}
	return convStr;
}