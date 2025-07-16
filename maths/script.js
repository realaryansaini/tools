let tableForm = document.querySelector("form#formForTable")
for (let i = 2; i < 20; i++) {
    let html = `<input type="radio" id="${i}" name="optionsForSum" value="${i}">
            <label for="${i}">${i}</label>`
    tableForm.insertAdjacentHTML("beforeend", html)
}

// Function to generate random numbers and update the question
function addition_questions(num1, num2, Symbol) {
    // const num1 = Math.floor(Math.random() * ending) + starting; 
    // const num2 = Math.floor(Math.random() * ending) + starting; 

    // document.getElementById('num1').textContent = num1;
    // document.getElementById('num2').textContent = num2;
    let html = `<div class="question">
    <div class="math-symbol">${Symbol}</div>
                <div class="math-question" id="num1">${num1}</div>
                <div class="math-question" id="num2">${num2}</div>
                
                <div class="underline"></div>
                <div class="underline2"></div>
            </div>`
    let content = document.querySelector(".content")
    content.insertAdjacentHTML("beforeend", html)
}

function substraction_questions(starting, ending) {
    // const num1 = Math.floor(Math.random() * ending) + starting; 
    // const num2 = Math.floor(Math.random() * ending) + starting; 

    // document.getElementById('num1').textContent = num1;
    // document.getElementById('num2').textContent = num2;
    let html = `<div class="question">
    <div class="math-symbol">-</div>
                <div class="math-question" id="num1">${Math.max(num1, num2)}</div>
                <div class="math-question" id="num2">${Math.min(num1, num2)}</div>
                
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
                <div class="math-question" id="num1">${Math.max(num1, num2)}</div>
                <div class="math-question" id="num2">${Math.min(num1, num2)}</div>
                
                <div class="underline"></div>
                <div class="underline2"></div>
            </div>`
    let content = document.querySelector(".content")
    content.insertAdjacentHTML("beforeend", html)
}

// Generate initial question when page loads
// addition_questions(1 ,100);

let inputs = document.querySelectorAll("input[name='calculationType']")
inputs.forEach((input) => {
    input.addEventListener('click', () => {
        let optionsForSum = document.querySelector("form#optionsForSum")
        let formForTable = document.querySelector("form#formForTable")
        if (input.value == "addition" || input.value == "substraction" || input.value == "multiply" || input.value == "divide") {
            optionsForSum.style.display = "grid"
            formForTable.style.display = "none"

        }
        else if (input.value == "table") {
            formForTable.style.display = "grid"
            optionsForSum.style.display = "none"
        }

    })
})

function getNums(input) {
    let num1 = 0
    let num2 = 0
    if (input == "2-1") {
        num1 = Math.floor(Math.random() * 90) + 10;
        num2 = Math.floor(Math.random() * 9) + 1;
    }
    else if (input == "2-2") {
        num1 = Math.floor(Math.random() * 90) + 10;
        num2 = Math.floor(Math.random() * 90) + 10;
    }
    else if (input == "3-1") {
        num1 = Math.floor(Math.random() * 900) + 100;
        num2 = Math.floor(Math.random() * 9) + 1;
    }
    else if (input == "3-2") {
        num1 = Math.floor(Math.random() * 900) + 100;
        num2 = Math.floor(Math.random() * 90) + 10;
    }
    else if (input == "3-3") {
        num1 = Math.floor(Math.random() * 900) + 100;
        num2 = Math.floor(Math.random() * 900) + 100;
    }
    else if (input == "4-2") {
        num1 = Math.floor(Math.random() * 9000) + 1000;
        num2 = Math.floor(Math.random() * 90) + 10;
    }
    else if (input == "4-3") {
        num1 = Math.floor(Math.random() * 9000) + 1000;
        num2 = Math.floor(Math.random() * 900) + 100;
    }
    else if (input == "4-4") {
        num1 = Math.floor(Math.random() * 9000) + 1000;
        num2 = Math.floor(Math.random() * 9000) + 1000;
    }
    else if (input == "5-2") {
        num1 = Math.floor(Math.random() * 90000) + 10000;
        num2 = Math.floor(Math.random() * 90) + 10;
    }
    else if (input == "5-3") {
        num1 = Math.floor(Math.random() * 90000) + 10000;
        num2 = Math.floor(Math.random() * 900) + 100;
    }
    else if (input == "5-4") {
        num1 = Math.floor(Math.random() * 90000) + 10000;
        num2 = Math.floor(Math.random() * 9000) + 1000;
    }
    else if (input == "5-5") {
        num1 = Math.floor(Math.random() * 90000) + 10000;
        num2 = Math.floor(Math.random() * 90000) + 10000;
    }
    return [num1, num2]
}
// Refresh button event listener
document.getElementById('refreshBtn').addEventListener('click', () => {
    // let input = document.querySelector("#input").value
    let input = document.querySelector('input[name="optionsForSum"]:checked').value;
    let calculationType = document.querySelector("input[name='calculationType']:checked").value
    // console.log(selectedValue);
    // if (calculationType == "addition") {

    if (calculationType == "addition") {
        for (let i = 1; i <= 12; i++) {
            let Numbers = getNums(input)
            let num1 = Numbers[0]
            let num2 = Numbers[1]
            addition_questions(num1, num2, "+")
        }
    }
    if (calculationType == "substraction") {
        for (let i = 1; i <= 12; i++) {
            let Numbers = getNums(input)
            let num1 = Numbers[0]
            let num2 = Numbers[1]
            addition_questions(Math.max(num1, num2), Math.min(num1, num2), "-")
        }
    }
    if (calculationType == "multiply") {
        for (let i = 1; i <= 12; i++) {
            let Numbers = getNums(input)
            let num1 = Numbers[0]
            let num2 = Numbers[1]
            addition_questions(Math.max(num1, num2), Math.min(num1, num2), "x")
        }
    }
    if (calculationType == "divide") {
        for (let i = 1; i <= 12; i++) {
            let Numbers = getNums(input)
            let num1 = Numbers[0]
            let num2 = Numbers[1]
            let html = `<div class="divide">
                <div class="divisor">${Math.min(num1, num2)}</div>
                <div class="divident">${Math.max(num1, num2)}</div>
            </div>`
            document.querySelector(".content").insertAdjacentHTML("beforeend", html)
        }
    }
    if (calculationType == "table") {
        let html = `<div class="title">Table of ${input}</div>
            <div class="multiplicationTable">
                <div>
                    <span class="tableOf">${input}</span> x <span class="incrementNum">1</span> =
                    <span class="multipliedAnwer">${input}</span>
                    </div>
                    <div>
                    <span class="tableOf">${input}</span> x <span class="incrementNum">2</span> =
                    <span class="multipliedAnwer">${Number(input) * 2}</span>
                    </div>
                    <div>
                    <span class="tableOf">${input}</span> x <span class="incrementNum">3</span> =
                    <span class="multipliedAnwer">${Number(input) * 3}</span>
                    </div>
                    <div>
                    <span class="tableOf">${input}</span> x <span class="incrementNum">4</span> =
                    <span class="multipliedAnwer">${Number(input) * 4}</span>
                    </div>
                    <div>
                    <span class="tableOf">${input}</span> x <span class="incrementNum">5</span> =
                    <span class="multipliedAnwer">${Number(input) * 5}</span>
                    </div>
                    <div>
                    <span class="tableOf">${input}</span> x <span class="incrementNum">6</span> =
                    <span class="multipliedAnwer">${Number(input) * 6}</span>
                    </div>
                    <div>
                    <span class="tableOf">${input}</span> x <span class="incrementNum">7</span> =
                    <span class="multipliedAnwer">${Number(input) * 7}</span>
                    </div>
                    <div>
                    <span class="tableOf">${input}</span> x <span class="incrementNum">8</span> =
                    <span class="multipliedAnwer">${Number(input) * 8}</span>
                    </div>
                    <div>
                    <span class="tableOf">${input}</span> x <span class="incrementNum">9</span> =
                    <span class="multipliedAnwer">${Number(input) * 9}</span>
                    </div>
                    <div>
                    <span class="tableOf">${input}</span> x <span class="incrementNum">10</span> =
                    <span class="multipliedAnwer">${Number(input) * 10}</span>
                    </div>
            </div>`
        document.querySelector(".content").insertAdjacentHTML("beforeend", html)

    }

});


function generateRandomString(length = 5) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}


// Download button event listener
document.getElementById('downloadBtn').addEventListener('click', function () {
    const content = document.getElementById('content');

    html2canvas(content).then(canvas => {
        // Create a temporary link to download the image
        const link = document.createElement('a');
        link.download = `math-question-${generateRandomString(5)}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});

document.querySelector("button.clear").addEventListener("click", () => {
    let content = document.querySelector(".content")
    let formForTable = document.querySelector("form#formForTable")
    let optionsForSum = document.querySelector("form#optionsForSum")
    formForTable.style.display = "none"
    optionsForSum.style.display = "none"
    content.innerHTML = ""
})