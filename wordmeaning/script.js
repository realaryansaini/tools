async function pasteClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    document.getElementById("input").value = text;
  } catch (err) {
    alert("Unable to access clipboard: " + err);
  }
}



document.querySelector("input").addEventListener("click" , ()=>{
     if(document.querySelector("input#input").value == ""){
        pasteClipboard()
    }
})




// Generate initial question when page loads
// addition_questions(1 ,100);

// let togleHeader = document.querySelector("button.togle_header")
// togleHeader.addEventListener("click",(event)=>{
//    let table = document.querySelector(".my-table").firstElementChild.firstElementChild
//    table.innerHTML = ""
//    console.log(table)
// })

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Refresh button event listener
document.getElementById('refreshBtn').addEventListener('click', () => {
    let headers = document.querySelector("input#headers").value
    if (headers !== "") {
        let headers_arr = headers.split(",")
        document.querySelector("table.my-table").insertAdjacentHTML("afterbegin", `<tr>
                       <th>${capitalizeFirstLetter(headers_arr[0].trim())}</th>
                       <th>${capitalizeFirstLetter(headers_arr[1].trim())}</th>
                       <th>${capitalizeFirstLetter(headers_arr[2].trim())}</th>
                       <th>${capitalizeFirstLetter(headers_arr[3].trim())}</th>
                    </tr>`)
    } else {
        document.querySelector("table.my-table").insertAdjacentHTML("afterbegin", `<tr>
                       <th>Word</th>
                       <th>Meaning</th>
                       <th>Word</th>
                       <th>Meaning</th>
                    </tr>`)
    }
    let input = document.querySelector("#input").value
    let arr = JSON.parse(input)
    // let wordMeaning = document.querySelector('input[name="Word-Meaning"]:checked').value;
    // if(wordMeaning == "yes"){
    //     document.querySelector("table.my-table").insertAdjacentHTML("afterbegin" , `<tr>
    //                    <th>Word</th>
    //                    <th>Meaning</th>
    //                    <th>Word</th>
    //                    <th>Meaning</th>
    //                 </tr>`)
    // }
    for (let i = 0; i < arr.length; i = i + 4) {
        let table = document.querySelector("table.my-table")
        let html = `
        <tr>
            <td>${capitalizeFirstLetter(arr[i].trim())}</td>
            <td>${capitalizeFirstLetter(arr[i + 1].trim())}</td>
            <td>${capitalizeFirstLetter(arr[i + 2].trim())}</td>
            <td>${capitalizeFirstLetter(arr[i + 3].trim())}</td>
        </tr>`
        table.insertAdjacentHTML("beforeend", html)

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
        link.download = `word-meaning-${generateRandomString(5)}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});