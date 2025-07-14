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

// Refresh button event listener
document.getElementById('refreshBtn').addEventListener('click', () => {
    // let input = document.querySelector("#input").value
    let input = document.querySelector('input[name="optionsForSum"]:checked').value;
    let calculationType = document.querySelector("input[name='calculationType']:checked").value
    // console.log(selectedValue);
    // if (calculationType == "addition") {
    if (input == "2-1") {
        for (let i = 1; i <= 12; i++) {
            let num1 = Math.floor(Math.random() * 90) + 10;
            let num2 = Math.floor(Math.random() * 9) + 1;
            if (calculationType == "addition") {
                addition_questions(num1, num2, "+")
            }
            else if (calculationType == "substraction") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "-")
            }
            else if (calculationType == "multiply") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "x")
            }
            else if (calculationType == "divide") {
                let html = `<div class="divide">
                <div class="divisor">${Math.min(num1, num2)}</div>
                <div class="divident">${Math.max(num1, num2)}</div>
            </div>`
                document.querySelector(".content").insertAdjacentHTML("beforeend", html)
            }
        }
    }
    else if (input == "2-2") {
        for (let i = 1; i <= 12; i++) {
            let num1 = Math.floor(Math.random() * 90) + 10;
            let num2 = Math.floor(Math.random() * 90) + 10;
            if (calculationType == "addition") {
                addition_questions(num1, num2, "+")
            }
            else if (calculationType == "substraction") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "-")
            }
            else if (calculationType == "multiply") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "x")
            }
            else if (calculationType == "divide") {
                let html = `<div class="divide">
                <div class="divisor">${Math.min(num1, num2)}</div>
                <div class="divident">${Math.max(num1, num2)}</div>
            </div>`
                document.querySelector(".content").insertAdjacentHTML("beforeend", html)
            }
        }
    }
    else if (input == "3-2") {
        for (let i = 1; i <= 12; i++) {
            let num1 = Math.floor(Math.random() * 900) + 100;
            let num2 = Math.floor(Math.random() * 90) + 10;
            if (calculationType == "addition") {
                addition_questions(num1, num2, "+")
            }
            else if (calculationType == "substraction") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "-")
            }
            else if (calculationType == "multiply") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "x")
            }
            else if (calculationType == "divide") {
                let html = `<div class="divide">
                <div class="divisor">${Math.min(num1, num2)}</div>
                <div class="divident">${Math.max(num1, num2)}</div>
            </div>`
                document.querySelector(".content").insertAdjacentHTML("beforeend", html)
            }
        }
    }
    else if (input == "3-3") {
        for (let i = 1; i <= 12; i++) {
            let num1 = Math.floor(Math.random() * 900) + 100;
            let num2 = Math.floor(Math.random() * 900) + 100;
            if (calculationType == "addition") {
                addition_questions(num1, num2, "+")
            }
            else if (calculationType == "substraction") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "-")
            }
            else if (calculationType == "multiply") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "x")
            }
            else if (calculationType == "divide") {
                let html = `<div class="divide">
                <div class="divisor">${Math.min(num1, num2)}</div>
                <div class="divident">${Math.max(num1, num2)}</div>
            </div>`
                document.querySelector(".content").insertAdjacentHTML("beforeend", html)
            }
        }
    }
    else if (input == "4-3") {
        for (let i = 1; i <= 12; i++) {
            let num1 = Math.floor(Math.random() * 9000) + 1000;
            let num2 = Math.floor(Math.random() * 900) + 100;
            if (calculationType == "addition") {
                addition_questions(num1, num2, "+")
            }
            else if (calculationType == "substraction") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "-")
            }
            else if (calculationType == "multiply") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "x")
            }
            else if (calculationType == "divide") {
                let html = `<div class="divide">
                <div class="divisor">${Math.min(num1, num2)}</div>
                <div class="divident">${Math.max(num1, num2)}</div>
            </div>`
                document.querySelector(".content").insertAdjacentHTML("beforeend", html)
            }
        }
    }
    else if (input == "4-4") {
        for (let i = 1; i <= 12; i++) {
            let num1 = Math.floor(Math.random() * 9000) + 1000;
            let num2 = Math.floor(Math.random() * 9000) + 1000;
            if (calculationType == "addition") {
                addition_questions(num1, num2, "+")
            }
            else if (calculationType == "substraction") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "-")
            }
            else if (calculationType == "multiply") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "x")
            }
            else if (calculationType == "divide") {
                let html = `<div class="divide">
                <div class="divisor">${Math.min(num1, num2)}</div>
                <div class="divident">${Math.max(num1, num2)}</div>
            </div>`
                document.querySelector(".content").insertAdjacentHTML("beforeend", html)
            }
        }
    }
    else if (input == "5-4") {
        for (let i = 1; i <= 12; i++) {
            let num1 = Math.floor(Math.random() * 90000) + 10000;
            let num2 = Math.floor(Math.random() * 9000) + 1000;
            if (calculationType == "addition") {
                addition_questions(num1, num2, "+")
            }
            else if (calculationType == "substraction") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "-")
            }
            else if (calculationType == "multiply") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "x")
            }
            else if (calculationType == "divide") {
                let html = `<div class="divide">
                <div class="divisor">${Math.min(num1, num2)}</div>
                <div class="divident">${Math.max(num1, num2)}</div>
            </div>`
                document.querySelector(".content").insertAdjacentHTML("beforeend", html)
            }
        }
    }
    else if (input == "5-5") {
        for (let i = 1; i <= 12; i++) {
            let num1 = Math.floor(Math.random() * 90000) + 10000;
            let num2 = Math.floor(Math.random() * 90000) + 10000;
            if (calculationType == "addition") {
                addition_questions(num1, num2, "+")
            }
            else if (calculationType == "substraction") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "-")
            }
            else if (calculationType == "multiply") {
                addition_questions(Math.max(num1, num2), Math.min(num1, num2), "x")
            }
            else if (calculationType == "divide") {
                let html = `<div class="divide">
                <div class="divisor">${Math.min(num1, num2)}</div>
                <div class="divident">${Math.max(num1, num2)}</div>
            </div>`
                document.querySelector(".content").insertAdjacentHTML("beforeend", html)
            }
        }
    }
    // if (calculationType == "substraction") {

    // }
    // if (calculationType == "multiply") {
    // }
    // }

});

// Download button event listener
document.getElementById('downloadBtn').addEventListener('click', function () {
    const content = document.getElementById('content');

    html2canvas(content).then(canvas => {
        // Create a temporary link to download the image
        const link = document.createElement('a');
        link.download = 'math-question.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});

document.querySelector("button.clear").addEventListener("click", () => {
    let content = document.querySelector(".content")
    content.innerHTML = ""
})