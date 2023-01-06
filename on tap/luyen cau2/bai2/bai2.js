
function myFunciton()
{
    let pwd= document.getElementById("Password").value;
    let err=document.getElementById("error");
    let regexpwd=/^(?=.*)(?=.*[A-Z]).{8,}$/
    let ch =pwd.charAt(0);
    if(pwd==null||pwd=="")
    {
        console.log(pwd);
        err.innerHTML="ban nhap sai";

    }
    else if(!regexpwd.test(pwd))
    {
        console.log(pwd);
        err.innerHTML="ban nhap sai";
    }
    else if(ch>="0"&&ch<="9")
    {
        console.log(ch);
        console.log(pwd);
        err.innerHTML="ban nhap sai thong tin";
    }
    else
    {
        console.log(pwd);
        err.innerHTML="ban nhap dung"
    }

   
}