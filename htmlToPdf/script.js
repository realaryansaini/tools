// pdf-export.js
function exportContainerToPDF() {
    const element = document.getElementById('container');
    html2canvas(element, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new window.jspdf.jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const imgWidth = pdfWidth;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('container-export.pdf');
    });
}



function hasSubArray(arr) {
    return arr.some(Array.isArray);
}

// let question_array = [["what is the full form of anything ? ", "what is your name", "Are you handsome"], ["what is the full form of anything ? T/F", "what is your name", "Are you handsome"], [["what is the full form of anything ?", ["aryan", "archana", "aditya", "manish"]], ["what is the full form of anything ?", ["aryan", "archana", "aditya", "manish"]]]]
// let question_array = [["what is the full form of anything ?", ["aryan","archana","aditya","manish"]]]
function showContent(question_array , input_title_array) {

    let content = document.querySelector("#main-questions-container")
    // console.log(input_title_array);
    
    content.insertAdjacentHTML("beforeend", `<div id="main-title">${input_title_array[0]}</div>
    <div id="date-container"><span id="date">${input_title_array[1]}</span></div>`)
    question_array.forEach((item) => {
        // let content = document.querySelector("#main-questions-container")
        if (hasSubArray(item) !== true && item[0].includes("T/F") == false) {

            let html = `<ol class="q-a">`
            content.insertAdjacentHTML("beforeend", `<li class="q-a-title">Answer the following question</li>`)
            item.forEach((subItem) => {
                let question = `<li class="question">${subItem}</li>`
                html = html + question
            })
            html = html + "</ol>"
            content.insertAdjacentHTML("beforeend", html)
            // console.log(item[0]);

        } else if (item[0].includes("T/F") == false) {
            content.insertAdjacentHTML("beforeend", `<li class="mcq-title">Mulitple Choice Question</li>`)
            let html = ""
            html = html + `<ol class="mcq">`
            item.forEach((element) => {
                let question = `<li class="question">${element[0]}</li>`
                html = html + question + `<ol class="options-container" type="a">`
                element[1].forEach((option) => {
                    html = html + `<li class="option">${option}</li>`
                })
                html = html + `</ol>`
                // html = html + "</ol>"
                // console.log("there is an array in it");
            })
            html = html + "</ol>"
            content.insertAdjacentHTML("beforeend", html)

        } else {
            let html = `<ol class="q-a">`
            content.insertAdjacentHTML("beforeend", `<li class="q-a-title">True/False</li>`)
            item.forEach((subItem) => {
                let question = `<li class="question">${subItem}</li>`
                html = html + question
            })
            html = html + "</ol>"
            content.insertAdjacentHTML("beforeend", html)
        }
    })
}


let button = document.querySelector("button#submit")
button.addEventListener("click", () => {
    // let question_array = [["what is the full form of anything ? ", "what is your name", "Are you handsome"], ["what is the full form of anything ? T/F", "what is your name", "Are you handsome"], [["what is the full form of anything ?", ["aryan", "archana", "aditya", "manish"]], ["what is the full form of anything ?", ["aryan", "archana", "aditya", "manish"]]]]
    // exportContainerToPDF()
    let input_title = document.querySelector("#input-title").value
    let input_title_array = input_title.split(",")
    // console.log(input_title_array[0]);
    

    let input_array = document.querySelector("#input-array").value
    showContent(JSON.parse(input_array) , input_title_array)
})

