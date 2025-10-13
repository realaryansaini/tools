




// Generate initial question when page loads
// addition_questions(1 ,100);

// Refresh button event listener

document.getElementById('refreshBtn').addEventListener('click', () => {
    for (let i = 1; i <= 30; i++) {
        const num = Math.floor(Math.random() * 90) + 10;
        let content = document.querySelector("div.content")
        let input = document.querySelector('input[name="numberOfDigits"]:checked').value;
        if (input == "gap") {
            let html = `
            <div class="question-answer">
            <span class="question">
            <span class="num">${num}</span> + <span class="answer">?</span> = 100 <button class="show_answer">Show</button>
            </span>
            </div>`
            content.insertAdjacentHTML("beforeend", html)
        }
        else if (input == "square") {
            let html = `
            <div class="question-answer">
            <span class="question">
            <span class="num">${num}</span><sup>2</sup> = <span class="answer">?</span><button class="show_answer">Show</button>
            </span>
            </div>`
            content.insertAdjacentHTML("beforeend", html)
        }
        else if (input == "squareRoot") {
            let html = `
            <div class="question-answer">
            <span class="question">
            <span class="num">${num * num}</span><sup>1/2</sup> = <span class="answer">?</span><button class="show_answer">Show</button>
            </span>
            </div>`
            content.insertAdjacentHTML("beforeend", html)
        }
        else if (input == "cube") {
            let html = `
            <div class="question-answer">
            <span class="question">
            <span class="num">${num}</span><sup>3</sup> = <span class="answer">?</span><button class="show_answer">Show</button>
            </span>
            </div>`
            content.insertAdjacentHTML("beforeend", html)
        }
        else if (input == "cubeRoot") {
            let html = `
            <div class="question-answer">
            <span class="question">
            <span class="num">${num * num * num}</span><sup>1/3</sup> = <span class="answer">?</span><button class="show_answer">Show</button>
            </span>
            </div>`
            content.insertAdjacentHTML("beforeend", html)
        }
        else if (input == "sum") {
            let sumInput = document.querySelector('input[name="optionsForSum"]:checked').value
            let sumNum1 = 0
            let sumNum2 = 0
            if (sumInput == "1-1") {
                sumNum1 = Math.floor(Math.random() * 9) + 1;
                sumNum2 = Math.floor(Math.random() * 9) + 1;
            }
            else if (sumInput == "2-1") {
                sumNum1 = Math.floor(Math.random() * 90) + 10;
                sumNum2 = Math.floor(Math.random() * 9) + 1;
            }
            else if (sumInput == "2-2") {
                sumNum1 = Math.floor(Math.random() * 90) + 10;
                sumNum2 = Math.floor(Math.random() * 90) + 10;
            }
            else if (sumInput == "3-2") {
                sumNum1 = Math.floor(Math.random() * 900) + 100;
                sumNum2 = Math.floor(Math.random() * 90) + 10;
            }
            else if (sumInput == "3-3") {
                sumNum1 = Math.floor(Math.random() * 900) + 100;
                sumNum2 = Math.floor(Math.random() * 900) + 100;
            }
            else if (sumInput == "4-3") {
                sumNum1 = Math.floor(Math.random() * 9000) + 1000;
                sumNum2 = Math.floor(Math.random() * 900) + 100;
            }
            else if (sumInput == "4-4") {
                sumNum1 = Math.floor(Math.random() * 9000) + 1000;
                sumNum2 = Math.floor(Math.random() * 9000) + 1000;
            }
            let html = `
        <div class="question-answer">
        <span class="question">
        <span class="num sumNum1">${sumNum1}</span>  + <span class="sumNum2">${sumNum2}</span> = <span class="answer">?</span> <button class="show_answer">Show</button>
        </span>
        </div>`
            content.insertAdjacentHTML("beforeend", html)

        }
        else if (input == "sub") {
            let sumInput = document.querySelector('input[name="optionsForSum"]:checked').value
            let sumNum1 = 0
            let sumNum2 = 0
            if (sumInput == "1-1") {
                sumNum1 = Math.floor(Math.random() * 9) + 1;
                sumNum2 = Math.floor(Math.random() * 9) + 1;
            }
            else if (sumInput == "2-1") {
                sumNum1 = Math.floor(Math.random() * 90) + 10;
                sumNum2 = Math.floor(Math.random() * 9) + 1;
            }
            else if (sumInput == "2-2") {
                sumNum1 = Math.floor(Math.random() * 90) + 10;
                sumNum2 = Math.floor(Math.random() * 90) + 10;
            }
            else if (sumInput == "3-2") {
                sumNum1 = Math.floor(Math.random() * 900) + 100;
                sumNum2 = Math.floor(Math.random() * 90) + 10;
            }
            else if (sumInput == "3-3") {
                sumNum1 = Math.floor(Math.random() * 900) + 100;
                sumNum2 = Math.floor(Math.random() * 900) + 100;
            }
            else if (sumInput == "4-3") {
                sumNum1 = Math.floor(Math.random() * 9000) + 1000;
                sumNum2 = Math.floor(Math.random() * 900) + 100;
            }
            else if (sumInput == "4-4") {
                sumNum1 = Math.floor(Math.random() * 9000) + 1000;
                sumNum2 = Math.floor(Math.random() * 9000) + 1000;
            }
            let html = `
        <div class="question-answer">
        <span class="question">
        <span class="num sumNum1">${Math.max(sumNum1, sumNum2)}</span>  - <span class="sumNum2">${Math.min(sumNum1, sumNum2)}</span> = <span class="answer">?</span> <button class="show_answer">Show</button>
        </span>
        </div>`
            content.insertAdjacentHTML("beforeend", html)

        }
        else if (input == "mul") {
            let sumInput = document.querySelector('input[name="optionsForSum"]:checked').value
            let sumNum1 = 0
            let sumNum2 = 0
            if (sumInput == "1-1") {
                sumNum1 = Math.floor(Math.random() * 9) + 1;
                sumNum2 = Math.floor(Math.random() * 9) + 1;
            }
            else if (sumInput == "2-1") {
                sumNum1 = Math.floor(Math.random() * 90) + 10;
                sumNum2 = Math.floor(Math.random() * 9) + 1;
            }
            else if (sumInput == "2-2") {
                sumNum1 = Math.floor(Math.random() * 90) + 10;
                sumNum2 = Math.floor(Math.random() * 90) + 10;
            }
            else if (sumInput == "3-2") {
                sumNum1 = Math.floor(Math.random() * 900) + 100;
                sumNum2 = Math.floor(Math.random() * 90) + 10;
            }
            else if (sumInput == "3-3") {
                sumNum1 = Math.floor(Math.random() * 900) + 100;
                sumNum2 = Math.floor(Math.random() * 900) + 100;
            }
            else if (sumInput == "4-3") {
                sumNum1 = Math.floor(Math.random() * 9000) + 1000;
                sumNum2 = Math.floor(Math.random() * 900) + 100;
            }
            else if (sumInput == "4-4") {
                sumNum1 = Math.floor(Math.random() * 9000) + 1000;
                sumNum2 = Math.floor(Math.random() * 9000) + 1000;
            }
            let html = `
        <div class="question-answer">
        <span class="question">
        <span class="num sumNum1">${sumNum1}</span>  x <span class="sumNum2">${sumNum2}</span> = <span class="answer">?</span> <button class="show_answer">Show</button>
        </span>
        </div>`
            content.insertAdjacentHTML("beforeend", html)

        }
    }
    let buttons = document.querySelectorAll("button.show_answer")

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            let parent = event.target.parentElement
            let num = parent.querySelector(".num").textContent
            let input = document.querySelector('input[name="numberOfDigits"]:checked').value
            if (input == "gap") {
                parent.querySelector("span.answer").textContent = 100 - num
            }
            else if (input == "square") {
                parent.querySelector("span.answer").textContent = num * num
            }
            else if (input == "squareRoot") {
                parent.querySelector("span.answer").textContent = Math.sqrt(num)
            }
            else if (input == "cube") {
                parent.querySelector("span.answer").textContent = num * num * num
            }
            else if (input == "cubeRoot") {
                parent.querySelector("span.answer").textContent = Math.cbrt(num)
            }
            else if (input == "sum") {
                // parent.querySelector("span.answer").textContent = Math.cbrt(num)
                // let sumInput = document.querySelector('input[name="optionsForSum"]:checked').value
                // if(sumInput == "1-1"){

                // }
                let sumNum1 = parent.querySelector(".sumNum1").textContent
                let sumNum2 = parent.querySelector(".sumNum2").textContent
                parent.querySelector("span.answer").textContent = Number(sumNum1) + Number(sumNum2)
            }
            else if (input == "sub") {
                // parent.querySelector("span.answer").textContent = Math.cbrt(num)
                // let sumInput = document.querySelector('input[name="optionsForSum"]:checked').value
                // if(sumInput == "1-1"){

                // }
                let sumNum1 = parent.querySelector(".sumNum1").textContent
                let sumNum2 = parent.querySelector(".sumNum2").textContent
                parent.querySelector("span.answer").textContent = Number(sumNum1) - Number(sumNum2)
            }
            else if (input == "mul") {
                // parent.querySelector("span.answer").textContent = Math.cbrt(num)
                // let sumInput = document.querySelector('input[name="optionsForSum"]:checked').value
                // if(sumInput == "1-1"){

                // }
                let sumNum1 = parent.querySelector(".sumNum1").textContent
                let sumNum2 = parent.querySelector(".sumNum2").textContent
                parent.querySelector("span.answer").textContent = Number(sumNum1) * Number(sumNum2)
            }
            button.style.display = "none"
        })
    })
});

// let handleSumInput = ()=> {
//     let form = document.querySelector("form#optionsForSum")
//     form.style.display = "flex"
// }

let inputs = document.querySelectorAll("input[name='numberOfDigits']")
inputs.forEach((input) => {
    input.addEventListener('click', () => {
        let form = document.querySelector("form#optionsForSum")
        if (input.value == "sum" || input.value == "mul" || input.value == "sub") {
            form.style.display = "flex"
        } else {
            form.style.display = "none"
        }
    })
})

// let SumInputs = document.querySelectorAll("input[name='optionsForSum']")
// SumInputs.forEach((input)=>{
//     input.addEventListener("click",()=>{
//         if(input.value == "1-1"){

//         }
//     })
// })
// Download button event listener
// document.getElementById('downloadBtn').addEventListener('click', function () {
//     const content = document.getElementById('content');
//     content.innerHTML = ""

//     let form = document.querySelector("form#optionsForSum")
//     form.style.display = "none"


    // html2canvas(content).then(canvas => {
    //     const link = document.createElement('a');
    //     link.download = 'word-meaning.png';
    //     link.href = canvas.toDataURL('image/png');
    //     link.click();
    // });

// });


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
    document.querySelectorAll(".show_answer").forEach((item)=>{
 item.style.display = "none"
    })
    

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
    // let formForTable = document.querySelector("form#formForTable")
    // let optionsForSum = document.querySelector("form#optionsForSum")
    // formForTable.style.display = "none"
    // optionsForSum.style.display = "none"
    content.innerHTML = ""
})