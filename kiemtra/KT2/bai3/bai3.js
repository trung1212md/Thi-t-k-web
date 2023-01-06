function myFuncion()
{
    const num=document.getElementById('number').value;
    let sum=0;
    console.log(num);

    if(num=='')
    {
        alert('ko duoc de chong');
        return 0;
    }

    if(num<1){
        sum=0;
    }
    else{
        for(let i=1;i<=num;i++)
        {
            if(Math.sqrt(i)*Math.sqrt(i)===parseInt(i))
            {
                sum+=i;
            }
        }
    }
    console.log(sum);

    document.getElementById('result').value=sum;
}