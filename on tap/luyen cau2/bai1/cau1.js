function myfunction()
{
    let n= document.getElementById("valueN").value;
    let result;
    if(n<=0)
    {
        alert("khong ton tai");
        result=0;
    }
    else
    {
        let sum=0;
        let x=2;
        let count=0;
        while(count<n)
        {
            if(check(x))
            {
                sum+=x;
                count++;
            }
            x++;
        }
        result=sum;
    }
    document.getElementById("result").innerHTML=result;



}
function clearfuntion()
{
    console.log("clear");
    document.getElementById("valueN").value=0;
    document.getElementById("result").innerHTML="0";
}

function check(n)
{
    if(n<2)
    {
        return false;
    }
    else
    {
        for(let i=2;i<=Math.sqrt(n);i++)
        {
            if(n%i==0)
            {

                return false
            }
        }
    }
    return true;
}