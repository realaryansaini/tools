async function pasteClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    document.getElementById("input").value = text;
  } catch (err) {
    alert("Unable to access clipboard: " + err);
  }
}



document.querySelector("input#input").addEventListener("click" , ()=>{
    if(document.querySelector("input#input").value == ""){
        pasteClipboard()
    }
})

// Generate initial question when page loads
// addition_questions(1 ,100);

// Refresh button event listener
document.getElementById('refreshBtn').addEventListener('click', () => {
    const date = new Date();
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    document.querySelector("#date").innerText = formattedDate

    let input = document.querySelector("#input").value
    let arr = JSON.parse(input)
    let onlyQuestion = document.querySelector("input[name='onlyQuestion']")
    if (onlyQuestion.checked) {

        for (let i = 0; i < arr.length; i = i + 1) {
            let content = document.querySelector("div.content")
            let html = `
            <div class="question-answer">
            <span class="question font-light">
            ${arr[i]}
            </span>
            </div>`
            content.insertAdjacentHTML("beforeend", html)
        }
    } else {

        for (let i = 0; i < arr.length; i = i + 2) {
            let content = document.querySelector("div.content")
            let html = `
            <div class="question-answer">
            <span class="question">
            ${arr[i]}
            </span>
            <span class="answer">
            ${arr[i + 1]}
            </span>
            </div>`
            content.insertAdjacentHTML("beforeend", html)
        }
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
        link.download = `Q/A-${generateRandomString(5)}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});