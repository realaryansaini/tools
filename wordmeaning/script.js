




// Generate initial question when page loads
// addition_questions(1 ,100);

// Refresh button event listener
document.getElementById('refreshBtn').addEventListener('click', () => {
    let input = document.querySelector("#input").value
    let arr = JSON.parse(input)
    for (let i = 0; i < arr.length; i=i+4) {
        let table = document.querySelector("table.my-table")
        let html = `
        <tr>
            <td>${arr[i]}</td>
            <td>${arr[i+1]}</td>
            <td>${arr[i+2]}</td>
            <td>${arr[i+3]}</td>
        </tr>`
        table.insertAdjacentHTML("beforeend",html)

    }
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