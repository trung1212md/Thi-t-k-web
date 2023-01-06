let text = "";
        let result = document.getElementById("display");

        function Click(val) {
            text += val;
            console.log(text);
            // result.innerHTML = text;
        }

        function equa() {
            // document.getElementById("result").innerHTML = eval(result.innerHTML);
            let val = eval(text);
            alert("Giá trị tính được là: " + val);
            text = "";
        }

        function clean() {
            text = "";
            result.innerHTML = text;
            document.getElementById("result").innerHTML = text;
        }



       