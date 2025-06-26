// Function to generate random numbers and update the question
function addition_questions(starting , ending) {
    const num1 = Math.floor(Math.random() * ending) + starting; // Random number between 1-100
    const num2 = Math.floor(Math.random() * ending) + starting; // Random number between 1-100
    
    // document.getElementById('num1').textContent = num1;
    // document.getElementById('num2').textContent = num2;
    let html = `<div class="question">
    <div class="math-symbol">+</div>
                <div class="math-question" id="num1">${num1}</div>
                <div class="math-question" id="num2">${num2}</div>
                
                <div class="underline"></div>
                <div class="underline2"></div>
            </div>`
    let content = document.querySelector(".content")
    content.insertAdjacentHTML("beforeend", html)
}

function substraction_questions(starting , ending) {
    const num1 = Math.floor(Math.random() * ending) + starting; // Random number between 1-100
    const num2 = Math.floor(Math.random() * ending) + starting; // Random number between 1-100
    
    // document.getElementById('num1').textContent = num1;
    // document.getElementById('num2').textContent = num2;
    let html = `<div class="question">
    <div class="math-symbol">-</div>
                <div class="math-question" id="num1">${Math.max(num1 , num2)}</div>
                <div class="math-question" id="num2">${Math.min(num1 , num2)}</div>
                
                <div class="underline"></div>
                <div class="underline2"></div>
            </div>`
    let content = document.querySelector(".content")
    content.insertAdjacentHTML("beforeend", html)
}

function multiply_questions() {
    const num1 = Math.floor(Math.random() * 900) + 100; // Random number between 1-100
    const num2 = Math.floor(Math.random() * 90) + 10; // Random number between 1-100
    
    // document.getElementById('num1').textContent = num1;
    // document.getElementById('num2').textContent = num2;
    let html = `<div class="question">
    <div class="math-symbol">x</div>
                <div class="math-question" id="num1">${Math.max(num1 , num2)}</div>
                <div class="math-question" id="num2">${Math.min(num1 , num2)}</div>
                
                <div class="underline"></div>
                <div class="underline2"></div>
            </div>`
    let content = document.querySelector(".content")
    content.insertAdjacentHTML("beforeend", html)
}

// Generate initial question when page loads
// addition_questions(1 ,100);

// Refresh button event listener
document.getElementById('refreshBtn').addEventListener('click', ()=>{
    // let input = document.querySelector("#input").value
    let input = document.querySelector('input[name="numberOfDigits"]:checked').value;
    let calculationType = document.querySelector("input[name='calculationType']:checked").value
// console.log(selectedValue);
    if(input == 2){
        for(let i = 1 ; i <=12 ; i++){
            if(calculationType == "addition"){
                addition_questions(10,90)
            }
            if(calculationType == "substraction"){
                substraction_questions(10,90)
            }
            if(calculationType == "multiply"){
                multiply_questions()
            }
        }
    }
    if(input == 3){
         for(let i = 1 ; i <=12 ; i++){
            if(calculationType == "addition"){
                addition_questions(100,900)
            }
            if(calculationType == "substraction"){
                substraction_questions(100,900)
            }
            if(calculationType == "multiply"){
                multiply_questions()
            }
        }
    }
    if(input == 4){
         for(let i = 1 ; i <=12 ; i++){
            if(calculationType == "addition"){
                addition_questions(1000,9000)
            }
            if(calculationType == "substraction"){
                substraction_questions(1000,9000)
            }
            if(calculationType == "multiply"){
                multiply_questions()
            }
        }
    }
    if(input == 5){
         for(let i = 1 ; i <=12 ; i++){
            if(calculationType == "addition"){
                addition_questions(10000,90000)
            }
            if(calculationType == "substraction"){
                substraction_questions(10000,90000)
            }
            if(calculationType == "multiply"){
                multiply_questions()
            }
        }
    }
});

// Download button event listener
document.getElementById('downloadBtn').addEventListener('click', function() {
    const content = document.getElementById('content');
    
    html2canvas(content).then(canvas => {
        // Create a temporary link to download the image
        const link = document.createElement('a');
        link.download = 'math-question.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});