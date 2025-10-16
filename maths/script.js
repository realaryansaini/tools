let tableForm = document.querySelector("form#formForTable")
for (let i = 2; i < 20; i++) {
    let html = `<input type="radio" id="${i}" name="optionsForTable" value="${i}">
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
        let formForFraction = document.querySelector("form#formForFraction")

        if (input.value == "addition" || input.value == "substraction" || input.value == "multiply" || input.value == "divide") {

            document.querySelectorAll('#optionsForSum > label:not(.onlyForShapes)').forEach((item) => {
                item.style.display = "flex"
            })

            optionsForSum.style.display = "grid"
            formForTable.style.display = "none"
            formForFraction.style.display = "none"
            if (input.value == "multiply" || input.value == "divide") {
                // optionsForSum.style.display = "none"
                optionsForSum.style.gridTemplateColumns = "repeat(7, auto);"
                document.querySelectorAll(".optionOnlyForDivide").forEach((item) => {
                    item.style.display = "flex"
                })
                document.querySelectorAll(".notForDivide").forEach((item) => {
                    item.style.display = "none"
                })
            } else {
                document.querySelectorAll(".notForDivide").forEach((item) => {
                    item.style.display = "flex"
                })
                // formForDivide.style.gridTempleteColoums = "repeat(6 , auto);"
                // optionsForSum.style.display = "grid"
                // formForDivide.style.display = "none"
                document.querySelectorAll(".optionOnlyForDivide").forEach((item) => {
                    item.style.display = "none"
                })

            }


            document.querySelectorAll("label.onlyForShapes").forEach((item) => {
                item.style.display = "none"
            })



        }
        else if (input.value == "table") {
            formForTable.style.display = "grid"
            optionsForSum.style.display = "none"
            formForFraction.style.display = "none"
            // formForDivide.style.display = "none"
            document.querySelectorAll(".optionOnlyForDivide").forEach((item) => {
                item.style.display = "none"
            })


        }
        else if (input.value == "perimeter" || input.value == "area") {
            formForTable.style.display = "none"
            optionsForSum.style.display = "grid"
            formForFraction.style.display = "none"
            // formForDivide.style.display = "none"

            // document.querySelectorAll(".optionOnlyForDivide").forEach((item)=>{
            //         item.style.display = "none"
            //     })
            document.querySelectorAll('#optionsForSum > label:not(.onlyForShapes)').forEach((item) => {
                item.style.display = "none"
            })
            document.querySelectorAll('form  > label.onlyForShapes').forEach((item) => {
                item.style.display = "flex"
            })



        }
        else if (input.value == "fraction") {
            formForTable.style.display = "none"
            optionsForSum.style.display = "none"
            formForFraction.style.display = "grid"
        }

    })
})

function getNums(input) {
    let num1 = 0
    let num2 = 0
    if (input == "2-1" || input == "1-2") {
        num1 = Math.floor(Math.random() * 90) + 10;
        num2 = Math.floor(Math.random() * 8) + 2;
    }
    else if (input == "2-2") {
        num1 = Math.floor(Math.random() * 90) + 10;
        num2 = Math.floor(Math.random() * 90) + 10;
    }
    else if (input == "3-1") {
        num1 = Math.floor(Math.random() * 900) + 100;
        num2 = Math.floor(Math.random() * 8) + 2;
    }
    else if (input == "10-20-3") {
        num1 = Math.floor(Math.random() * 11) + 10;
        num2 = Math.floor(Math.random() * 900) + 100;
    }
    else if (input == "10-20-4") {
        num1 = Math.floor(Math.random() * 11) + 10;
        num2 = Math.floor(Math.random() * 9000) + 1000;
    }
    else if (input == "10-40-4") {
        num1 = Math.floor(Math.random() * 31) + 10;
        num2 = Math.floor(Math.random() * 9000) + 1000;
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
    // console.log(document.querySelector('input[name="optionsForSum"]:checked'))
    let input = ""
    if (document.querySelector('input[name="optionsForSum"]:checked') !== null) {
        input = document.querySelector('input[name="optionsForSum"]:checked').value;
    }

    let calculationType = document.querySelector("input[name='calculationType']:checked").value
    // if (calculationType == "addition") {

    if (calculationType == "addition") {

        content.insertAdjacentHTML("beforeend", `<div class="title">${calculationType}:</div>`)
        for (let i = 1; i <= 12; i++) {
            let Numbers = getNums(input)
            let num1 = Numbers[0]
            let num2 = Numbers[1]
            addition_questions(num1, num2, "+")
        }
    }
    if (calculationType == "substraction") {
        content.insertAdjacentHTML("beforeend", `<div class="title">${calculationType}:</div>`)

        for (let i = 1; i <= 12; i++) {
            let Numbers = getNums(input)
            let num1 = Numbers[0]
            let num2 = Numbers[1]
            addition_questions(Math.max(num1, num2), Math.min(num1, num2), "-")
        }
    }
    if (calculationType == "multiply") {
        content.insertAdjacentHTML("beforeend", `<div class="title">${calculationType}:</div>`)
        for (let i = 1; i <= 12; i++) {
            let Numbers = getNums(input)
            let num1 = Numbers[0]
            let num2 = Numbers[1]
            addition_questions(Math.max(num1, num2), Math.min(num1, num2), "x")
        }
    }
    if (calculationType == "divide") {
        content.insertAdjacentHTML("beforeend", `<div class="title">${calculationType}:</div>`)
        for (let i = 1; i <= 12; i++) {
            let Numbers = getNums(input)
            let num1 = Numbers[0]
            let num2 = Numbers[1]
            let html = `<div class="divide question">
                <div class="divisor">${Math.min(num1, num2)}</div>
                <div class="divident">${Math.max(num1, num2)}</div>
            </div>`
            document.querySelector(".content").insertAdjacentHTML("beforeend", html)
        }
    }
    if (calculationType == "table") {
        let input = document.querySelector('input[name="optionsForTable"]:checked').value;
        let html = `<div class="title-table">Table of ${input}</div>
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
    if (calculationType == "perimeter" || calculationType == "area") {
        if (input == "rec") {
            document.querySelector("#content").insertAdjacentHTML("beforeend", `<div class='title'>Find the ${calculationType} of rectangle</div>`)
            for (let i = 1; i <= 12; i++) {
                let units = ["cm", "m"]
                let unit = units[Math.floor(Math.random() * 2) + 0]
                let num1 = Math.floor(Math.random() * 90) + 10;
                let num2 = Math.floor(Math.random() * 90) + 10;
                let html = `<div class="rectangle">
                <div class="length-label">${Math.max(num1, num2)}${unit}</div>
                <div class="width-label">${Math.min(num1, num2)}${unit}</div>
            </div>`
                document.querySelector("#content").insertAdjacentHTML("beforeend", html)
            }
        }
        if (input == "rec-l") {
            document.querySelector("#content").insertAdjacentHTML("beforeend", `<div class='title'>Find the Length of rectangle</div>`)
            for (let i = 1; i <= 12; i++) {
                let units = ["cm", "m"]
                let unit = units[Math.floor(Math.random() * 2) + 0]
                let num1 = Math.floor(Math.random() * 990) + 10;
                let num2 = Math.floor(Math.random() * 90) + 10;
                let html = ""
                if (calculationType == "area") {
                    html = `<div class="rectangle">
                    <div class="length-label-area">Area = ${num1}${unit}<sup>2</sup></div>
                    <div class="length-label">B = ${num2}${unit}</div>
                </div>`
                }
                if (calculationType == "perimeter") {
                    html = `<div class="rectangle">
                    <div class="length-label-area">Perimeter = ${num1}${unit}</div>
                    <div class="length-label">B = ${num2}${unit}</div>
                </div>`
                }
                document.querySelector("#content").insertAdjacentHTML("beforeend", html)
            }
        }
        if (input == "sq") {
            document.querySelector("#content").insertAdjacentHTML("beforeend", `<div class='title'>Find the ${calculationType} of square</div>`)
            for (let i = 1; i <= 12; i++) {
                let units = ["cm", "m"]
                let unit = units[Math.floor(Math.random() * 2) + 0]
                let num1 = Math.floor(Math.random() * 990) + 10;
                // let num2 = Math.floor(Math.random() * 90) + 10;
                let html = `<div class="rectangle square">
                <div class="length-label">${num1}${unit}</div>
                </div>`
                document.querySelector("#content").insertAdjacentHTML("beforeend", html)
            }
        }
        if (input == "sq-s") {
            document.querySelector("#content").insertAdjacentHTML("beforeend", `<div class='title'>Find the side of square</div>`)
            let html = ""
            for (let i = 1; i <= 12; i++) {
                let units = ["cm", "m"]
                let unit = units[Math.floor(Math.random() * 2) + 0]
                let num1 = Math.floor(Math.random() * 9900) + 100;
                // let num2 = Math.floor(Math.random() * 90) + 10;
                if (calculationType == "area") {

                    html = `<div class="rectangle square">
                    <div class="length-label-area">Area = ${num1}${unit} <sup>2</sup></div>
                    </div>`
                } else {
                    html = `<div class="rectangle square">
                    <div class="length-label-area">Perimeter = ${num1}${unit}</div>
                    </div>`

                }
                document.querySelector("#content").insertAdjacentHTML("beforeend", html)
            }
        }
        if (input == "cir") {
            if (calculationType == "perimeter") {
                calculationType = "circumference"
            }
            document.querySelector("#content").insertAdjacentHTML("beforeend", `<div class='title'>Find the ${calculationType} of circle</div>`)

            for (let i = 1; i <= 12; i++) {
                let units = ["cm", "m"]
                let unit = units[Math.floor(Math.random() * 2) + 0]
                let num1 = Math.floor(Math.random() * 90) + 10;
                // let num2 = Math.floor(Math.random() * 90) + 10;
                let html = `<div class="circle"><svg  viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="110" cy="110" r="100" stroke="black" stroke-width="4" fill="white" />

                    <line x1="110" y1="110" x2="110" y2="10" stroke="black" stroke-width="2" />

                    <text x="140" y="70" text-anchor="middle" font-size="18" fill="black" font-weight="bold">
                        ${num1}${unit}
                    </text>
                </svg>
            </div>`
                document.querySelector("#content").insertAdjacentHTML("beforeend", html)
            }
        }
        if (input == "cir-r") {
            if (calculationType == "perimeter") {
                calculationType = "circumference"
            }
            document.querySelector("#content").insertAdjacentHTML("beforeend", `<div class='title'>Find the radius of circle</div>`)

            let html = ""
            for (let i = 1; i <= 12; i++) {
                let units = ["cm", "m"]
                let unit = units[Math.floor(Math.random() * 2) + 0]
                let num1 = Math.floor(Math.random() * 9900) + 100;
                if (calculationType == "area") {
                    // let num2 = Math.floor(Math.random() * 90) + 10;
                    html = `<div class="circle"><svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"> <circle cx="110" cy="110" r="100" stroke="black" stroke-width="4" fill="white" /> <text x="110" y="100" text-anchor="middle" font-size="18" fill="black" font-weight="bold"> Area = ${num1}${unit} <tspan dy="-6" font-size="12">2</tspan> </text> 
                    <text x="110" y="130" text-anchor="middle" font-size="18" fill="black" font-weight="bold"> r = ? </text> </svg>
                    </div>`
                }
                else {
                    console.log("i am in perimeter");

                    html = `<div class="circle"><svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"> <circle cx="110" cy="110" r="100" stroke="black" stroke-width="4" fill="white" /> <text x="110" y="100" text-anchor="middle" font-size="18" fill="black" font-weight="bold"> Circumf = ${num1}${unit}</text> 
                    <text x="110" y="130" text-anchor="middle" font-size="18" fill="black" font-weight="bold"> r = ? </text> </svg>
                    </div>`

                }
                document.querySelector("#content").insertAdjacentHTML("beforeend", html)
            }
        }
        if (input == "tri") {
            document.querySelector("#content").insertAdjacentHTML("beforeend", `<div class='title'>Find the ${calculationType} of triangle</div>`)

            for (let i = 1; i <= 12; i++) {
                let num1 = Math.floor(Math.random() * 90) + 10;
                let num2 = Math.floor(Math.random() * 90) + 10;
                let num3 = Math.floor(Math.random() * 90) + 10;
                let html = ""
                // let num2 = Math.floor(Math.random() * 90) + 10;
                let units = ["cm", "m"]
                let unit = units[Math.floor(Math.random() * 2) + 0]
                if (calculationType == "perimeter") {
                    html = ` <div class="triangle">
                    <svg width="100%" height="100%" viewBox="60 80 280 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M85.843 311.828C99.1021 311.98 112.412 313.617 125.675 313.46C192.446 312.698 253 318.5 334.836 313.428C337.022 313.003 317.099 272.821 291.342 227.968C263.178 178.924 239.144 126.682 200 85C177 85 94.3401 258.649 81.1177 281.612C75.6425 291.118 69.4588 300.629 65 310.658"
                    stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round"
                    stroke-linejoin="round" />
                    <!-- Side labels (approximate, manually placed) -->
                    <text x="180" y="300" font-size="14" fill="blue" font-weight="bold">${num1}${unit}</text>
                    <text x="230" y="190" font-size="14" fill="blue" font-weight="bold"
                    transform="rotate(-28 270,250)">${num2}${unit}</text>
                    <text x="150" y="190" font-size="14" fill="blue" font-weight="bold"
                    transform="rotate(38 120,180)">${num3}${unit}</text>
                    </svg>
                    
                    </div>`
                } else if (calculationType == "area") {
                    html = ` <div class="triangle">
                    <svg width="100%" height="100%" viewBox="60 80 280 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M85.843 311.828C99.1021 311.98 112.412 313.617 125.675 313.46C192.446 312.698 253 318.5 334.836 313.428C337.022 313.003 317.099 272.821 291.342 227.968C263.178 178.924 239.144 126.682 200 85C177 85 94.3401 258.649 81.1177 281.612C75.6425 291.118 69.4588 300.629 65 310.658"
                    stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round"
                    stroke-linejoin="round" />
                    
                    <!-- Perpendicular line from top of triangle to base -->
                    <line x1="200" y1="85" x2="200" y2="313.5" stroke="black" stroke-width="4" stroke-dasharray="6 4"/>
                    
                    <!-- Side labels (approximate, manually placed) -->
                    <text x="210" y="250" font-size="20" fill="blue" font-weight="bold">${num2}${unit}</text>
                    <text x="180" y="340" font-size="20" fill="blue" font-weight="bold">${num1}${unit}</text>
                    </svg>
                    
                    
                    </div>`

                }
                document.querySelector("#content").insertAdjacentHTML("beforeend", html)
            }

        }
        if (input == "pgram" || input == "rhombus" || input == "rhombus-s" || input == "pgram-h") {
            let title = input
            let ctype = calculationType
            if (input == "pgram") {
                title = "parallelog.."
            }
            else if(input == "pgram-h" && calculationType == "perimeter"){
                title = "parallelog.."
                ctype = "other side"
            }
            else if(input == "pgram-h" && calculationType == "area"){
                title = "parallelog.."
                ctype = "height"
            }
             else if (input == "rhombus-s") {
                ctype = "Side"
                title = "rhombus"
            }

            document.querySelector("#content").insertAdjacentHTML("beforeend", `<div class='title'>Find the ${ctype} of ${title}</div>`)
            let html = ""
            for (let i = 1; i <= 12; i++) {
                let units = ["cm", "m"]
                let unit = units[Math.floor(Math.random() * 2) + 0]
                let num1 = Math.floor(Math.random() * 90) + 10;
                let num2 = Math.floor(Math.random() * 90) + 10;
                if (calculationType == "area") {
                    if (input == "pgram" || input == "rhombus") {

                        html = `<div class="parellelogram"><svg  viewBox="0 0 200 105" xmlns="http://www.w3.org/2000/svg">
                        <!-- Parallelogram tightly fit in viewBox -->
                    <polygon points="0,100 50,0 200,0 150,100" 
                    fill="none" 
                    stroke="black" 
                    stroke-width="2"/>
                    
                    <!-- Altitude from top-left corner -->
                    <line x1="50" y1="0" x2="50" y2="100" 
                    stroke="blue" 
                    stroke-width="2" 
                    stroke-dasharray="5 3"/>
                    
                    <!-- Height label -->
                    <text x="55" y="50" font-size="15" fill="blue">${Math.min(num1, num2)}${unit}</text>
                    
                    <!-- Base label -->
                    <text x="70" y="95" font-size="15" fill="green">${Math.max(num1, num2)}${unit}</text>
                    
                    <!-- Optional: Base line (visual aid) -->
                    <!-- From bottom-left to bottom-right -->
                    <!-- <line x1="0" y1="100" x2="150" y2="100" stroke="green" stroke-width="1" stroke-dasharray="3 2"/> -->
                    </svg>
                    </div>
                    `
                    }
                    if (input == "pgram-h") {
                        num1 = Math.floor(Math.random() * 900) + 100;
                        console.log("i am in pgram h");
                        
                        html = `<div class="parellelogram"><svg  viewBox="0 0 200 105" xmlns="http://www.w3.org/2000/svg">
                    <!-- Parallelogram tightly fit in viewBox -->
                <polygon points="0,100 50,0 200,0 150,100" 
                fill="none" 
                stroke="black" 
                stroke-width="2"/>
                
                <!-- Altitude from top-left corner -->
                
                
                <!-- Height label -->
                
                
                <!-- Base label -->
                <text x="40" y="50" font-size="15" fill="black">Area = ${num1}${unit}<tspan dy="-6" font-size="12">2</tspan></text>
                </text> 
                    <text x="90" y="70" text-anchor="middle" font-size="12" fill="black"> Base = ${num2}${unit} </text>
                
                <!-- Optional: Base line (visual aid) -->
                <!-- From bottom-left to bottom-right -->
                <!-- <line x1="0" y1="100" x2="150" y2="100" stroke="green" stroke-width="1" stroke-dasharray="3 2"/> -->
                </svg>
                </div>
                `
                    }
                    if (input == "rhombus-s") {
                        num1 = Math.floor(Math.random() * 9900) + 100;
                        html = `<div class="parellelogram"><svg  viewBox="0 0 200 105" xmlns="http://www.w3.org/2000/svg">
                    <!-- Parallelogram tightly fit in viewBox -->
                <polygon points="0,100 50,0 200,0 150,100" 
                fill="none" 
                stroke="black" 
                stroke-width="2"/>
                
                <!-- Altitude from top-left corner -->
                
                
                <!-- Height label -->
                
                
                <!-- Base label -->
                <text x="40" y="50" font-size="15" fill="black">Area = ${num1}${unit}<tspan dy="-6" font-size="12">2</tspan></text>
                </text> 
                    <text x="90" y="70" text-anchor="middle" font-size="18" fill="black"> s = ? </text>
                
                <!-- Optional: Base line (visual aid) -->
                <!-- From bottom-left to bottom-right -->
                <!-- <line x1="0" y1="100" x2="150" y2="100" stroke="green" stroke-width="1" stroke-dasharray="3 2"/> -->
                </svg>
                </div>
                `
                    }
                }
                else if (calculationType == "perimeter") {
                    if (input == "pgram") {
                        html = `<div class="parellelogram"><svg  viewBox="0 0 200 105" xmlns="http://www.w3.org/2000/svg">
                        <!-- Parallelogram tightly fit in viewBox -->
                    <polygon points="0,100 50,0 200,0 150,100" 
                    fill="none" 
                    stroke="black" 
                    stroke-width="2"/>
                    
                    <!-- Altitude from top-left corner -->
                    
                    
                    <!-- Height label -->
                    <text x="40" y="50" font-size="15" fill="blue">${Math.min(num1, num2)}${unit}</text>
                    
                    <!-- Base label -->
                    <text x="70" y="95" font-size="15" fill="green">${Math.max(num1, num2)}${unit}</text>
                    
                    <!-- Optional: Base line (visual aid) -->
                    <!-- From bottom-left to bottom-right -->
                    <!-- <line x1="0" y1="100" x2="150" y2="100" stroke="green" stroke-width="1" stroke-dasharray="3 2"/> -->
                    </svg>
                    </div>
                    `
                    }
                    if (input == "pgram-h") {
                        num1 = Math.floor(Math.random() * 900) + 100;
                        
                        html = `<div class="parellelogram"><svg  viewBox="0 0 200 105" xmlns="http://www.w3.org/2000/svg">
                    <!-- Parallelogram tightly fit in viewBox -->
                <polygon points="0,100 50,0 200,0 150,100" 
                fill="none" 
                stroke="black" 
                stroke-width="2"/>
                
                <!-- Altitude from top-left corner -->
                
                
                <!-- Height label -->
                
                
                <!-- Base label -->
                <text x="40" y="50" font-size="15" fill="black">Perimeter = ${num1}${unit}</text>
                </text> 
                    <text x="90" y="70" text-anchor="middle" font-size="12" fill="black"> Base = ${num2}${unit} </text>
                
                <!-- Optional: Base line (visual aid) -->
                <!-- From bottom-left to bottom-right -->
                <!-- <line x1="0" y1="100" x2="150" y2="100" stroke="green" stroke-width="1" stroke-dasharray="3 2"/> -->
                </svg>
                </div>
                `
                    }
                    if (input == "rhombus") {
                        html = `<div class="parellelogram"><svg  viewBox="0 0 200 105" xmlns="http://www.w3.org/2000/svg">
                    <!-- Parallelogram tightly fit in viewBox -->
                <polygon points="0,100 50,0 200,0 150,100" 
                fill="none" 
                stroke="black" 
                stroke-width="2"/>
                
                <!-- Altitude from top-left corner -->
                
                
                <!-- Height label -->
                
                
                <!-- Base label -->
                <text x="70" y="95" font-size="15" fill="green">${num1}${unit}</text>
                
                
                <!-- Optional: Base line (visual aid) -->
                <!-- From bottom-left to bottom-right -->
                <!-- <line x1="0" y1="100" x2="150" y2="100" stroke="green" stroke-width="1" stroke-dasharray="3 2"/> -->
                </svg>
                </div>
                `
                    }
                    if (input == "rhombus-s") {
                        num1 = Math.floor(Math.random() * 9900) + 100;
                        html = `<div class="parellelogram"><svg  viewBox="0 0 200 105" xmlns="http://www.w3.org/2000/svg">
                    <!-- Parallelogram tightly fit in viewBox -->
                <polygon points="0,100 50,0 200,0 150,100" 
                fill="none" 
                stroke="black" 
                stroke-width="2"/>
                
                <!-- Altitude from top-left corner -->
                
                
                <!-- Height label -->
                
                
                <!-- Base label -->
                <text x="32" y="60" font-size="15" fill="black">Perimeter = ${num1}${unit}</text>
                <text x="90" y="80" text-anchor="middle" font-size="18" fill="black"> s = ? </text>
                
                <!-- Optional: Base line (visual aid) -->
                <!-- From bottom-left to bottom-right -->
                <!-- <line x1="0" y1="100" x2="150" y2="100" stroke="green" stroke-width="1" stroke-dasharray="3 2"/> -->
                </svg>
                </div>
                `
                    }

                }
                document.querySelector("#content").insertAdjacentHTML("beforeend", html)
            }
        }
    }
    if (calculationType == "fraction") {
        input = document.querySelector('input[name="optionsForFraction"]:checked').value;
        if (input == "per") {
            document.querySelector("#content").insertAdjacentHTML("beforeend", `<div class='title'>Find the value of :</div>`)
            for (let i = 1; i <= 20; i++) {
                let num1 = Math.floor(Math.random() * 90) + 10;
                let num2 = Math.floor(Math.random() * 900) + 100;
                let html = `<div class="percentage"><span class="beforeOf">${num1}%</span> of <span class="afterOf">${num2}</span> = ______</div>`
                document.querySelector("#content").insertAdjacentHTML("beforeend", html)
            }
        }
        if (input == "per-s") {
            document.querySelector("#content").insertAdjacentHTML("beforeend", `<div class='title'>Find the value of :</div>`)
            for (let i = 1; i <= 20; i++) {
                let standrad_percentages = ["1", "2", "2.5", "3", "4", "5", "6.25", "7", "7.5", "8", "9", "10", "12.5", "15", "16.67", "17.5", "20", "25", "30", "33.33", "35", "40", "45", "50", "55", "60", "62.5", "66.67", "70", "75", "80", "85", "87.5", "90", "95", "100"]
                let num1 = standrad_percentages[Math.floor(Math.random() * standrad_percentages.length - 1) + 1];
                let num2 = Math.floor(Math.random() * 900) + 100;
                let html = `<div class="percentage"><span class="beforeOf">${num1}%</span> of <span class="afterOf">${num2}</span> = ______</div>`
                document.querySelector("#content").insertAdjacentHTML("beforeend", html)
            }
        }

        // console.log("you are in fraction");


    }
    if(calculationType == "dec"){
        if (input == "2-1") {
            document.querySelector("#content").insertAdjacentHTML("beforeend", `<div class='title'>Find the value of :</div>`)
            for (let i = 1; i <= 20; i++) {
                let Numbers = getNums(input)
                let num1 = Numbers[0]
                let num2 = Numbers[1]
                let html = `<div class="percentage"><span class="beforeOf">${num1}</span> + <span class="afterOf">${num2}</span> = ______</div>`
                document.querySelector("#content").insertAdjacentHTML("beforeend", html)
            }
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
    // document.querySelectorAll("div.divide.question::before").forEach((item)=>{
    //     item.style.display = "none"
    // })

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
    let formForFraction = document.querySelector("form#formForFraction")
    let optionsForSum = document.querySelector("form#optionsForSum")
    formForTable.style.display = "none"
    optionsForSum.style.display = "none"
    formForFraction.style.display = "none"
    content.innerHTML = ""

})

// document.querySelectorAll('input[name="calculationType]"').forEach((button) => {
//     button.addEventListener("click", () => {

//     })
// })


const content = document.querySelector('#content');

content.addEventListener('click', function () {
    // Your function code here
    //   console.log('Element was double-clicked');
    content.classList.add("fullScreen")
});

content.addEventListener('dblclick', function () {
    // Your function code here
    console.log('Element was double-clicked');
    content.classList.remove("fullScreen")
});

