

let button = document.getElementById("btn");
button.addEventListener("click", () => {
    const h = parseInt(document.getElementById('height').value);
    const w = parseInt(document.getElementById('weight').value);
    const bmi=document.getElementById("bmi");
    const status=document.getElementById("status");
    bmi.innerText = w/((h*h)/10000).toFixed(2);
    if(bmi < 18.5){
        status.innerText = "Underweight";
    }
    else if(bmi >= 18.5 && bmi < 25){
        status.innerText = "Normal";
    }
    else if(bmi >= 25 && bmi < 30){
        status.innerText = "Overweight";
    }
    else if(bmi >= 30){
        status.innerText = "Obese";
    }
    else{
        status.innerText = "Not define";
    }
}
)