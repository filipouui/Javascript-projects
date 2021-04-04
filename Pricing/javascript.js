
        
let output = document.getElementById('money');
let slider = document.getElementById('myRange');
let view = document.getElementById('page-views');
let button = document.getElementById('button');
let main = document.querySelector('.main-background');
let discount = document.getElementById('discount');
let whiteBackground = document.querySelector('.white-background');
let header = document.querySelector('.header');
let firstCheck = document.getElementById('first-check');
let secondCheck = document.getElementById('second-check');
let thirdCheck = document.getElementById('third-check');
let checkBox = document.getElementById('checkbox');
let thirdCheckLi = document.getElementById('third-check-li');
let yearlyDiscount = document.getElementById('yearly-discount');

output.innerHTML = slider.value;
view.innerHTML = slider.value * 11248;



slider.oninput = function() {
    output.innerHTML = this.value * 2;
    view.innerHTML = this.value * 11248;
    if(slider.value <= 30) {
        yearlyDiscount.innerText = '0% ';
    } else if(slider.value <= 50) {
        yearlyDiscount.innerText = '10% ';
    } else if(slider.value <= 65) {
        yearlyDiscount.innerText = '15% ';
    } else if (slider.value <= 75) {
        yearlyDiscount.innerText = '20% ';
    } else if (slider.value <= 100) {
        yearlyDiscount.innerText = '25% ';
    }
}






slider.addEventListener('mousemove', function() {
    let x = slider.value;
    let color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color;
    
}); 

button.addEventListener('click', function() {
    if(main.style.background != 'black') {
        main.style.background = 'black';
        whiteBackground.style.boxShadow = 'none';
        header.style.color = 'white'
        whiteBackground.style.border = '5px solid rgb(117, 252, 117)';
    } else {
        main.style.background = 'white';
        header.style.color = 'black'
        whiteBackground.style.border = '2px solid black';
    }

});

checkBox.addEventListener('click', function() {
    if(checkBox.checked != true) {
        firstCheck.style.display = 'none';
        secondCheck.style.display = 'none';
        thirdCheck.style.display = 'none';00
    } else if(firstCheck.style.display = 'none') {
        firstCheck.style.display = 'inline';
        secondCheck.style.display = 'inline';
        thirdCheck.style.display = 'inline';
    }
});
