document.getElementById('amlich');
let can=["Canh", "Tân", "Nhâm", "Quí", "Giáp", "Ất", "Binh", "Đinh", "Mậu", "Kỷ"];
let chi=["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

function tracuu()
{
    let num=document.getElementById('duonglich').value;
    let str=can[num%10]+" "+chi[num%12];

    document.getElementById('amlich').value=str;
}

