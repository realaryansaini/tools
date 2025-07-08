




// Generate initial question when page loads
// addition_questions(1 ,100);

// Refresh button event listener

document.getElementById('refreshBtn').addEventListener('click', () => {
    for (let i = 1; i <= 30; i++) {
        const num = Math.floor(Math.random() * 90) + 10;
        let content = document.querySelector("div.content")
        let input = document.querySelector('input[name="numberOfDigits"]:checked').value;
        if (input == "square") {
            let html = `
            <div class="question-answer">
            <span class="question">
            <span class="num">${num}</span><sup>2</sup> = <span class="answer">?</span><button class="show_answer">Show</button>
            </span>
            </div>`
            content.insertAdjacentHTML("beforeend", html)
        } if (input == "squareRoot") {
            let html = `
            <div class="question-answer">
            <span class="question">
            <span class="num">${num * num}</span><sup>1/2</sup> = <span class="answer">?</span><button class="show_answer">Show</button>
            </span>
            </div>`
            content.insertAdjacentHTML("beforeend", html)
        } else {
            let html = `
            <div class="question-answer">
            <span class="question">
            <span class="num">${num}</span> + <span class="answer">?</span> = 100 <button class="show_answer">Show</button>
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
            if (input == "square") {

                parent.querySelector("span.answer").textContent = num * num
            } if(input == "squareRoot"){
                
                parent.querySelector("span.answer").textContent = Math.sqrt(num)
            } else {

                parent.querySelector("span.answer").textContent = 100 - num
            }
            button.style.display = "none"
        })
    })
});

// Download button event listener
document.getElementById('downloadBtn').addEventListener('click', function () {
    const content = document.getElementById('content');

    html2canvas(content).then(canvas => {
        // Create a temporary link to download the image
        const link = document.createElement('a');
        link.download = 'word-meaning.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});