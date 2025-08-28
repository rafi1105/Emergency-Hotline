const heartCount = document.getElementById("heartCount");
const clickHeart = document.querySelectorAll(".clickHeart");
clickHeart.forEach((heart) => {
    heart.addEventListener("click", function () {
        heartCount.innerText++;
    });
});


const coin = document.getElementById("coin");
const clickCall = document.querySelectorAll(".clickCall");
const cardTitle = document.querySelectorAll(".card-title");
const callNumber = document.querySelectorAll(".call-number");
const history = document.getElementById('history');

const clearHistory = document.getElementById('clearHistory');



clickCall.forEach((call, i) => {
    call.addEventListener('click', () => {
        if (coin.innerText <20){
            alert("You don't have sufficient Coin")
            return
        }
        alert("📞 Calling : " + cardTitle[i].innerText + " " + callNumber[i].innerText);
        history.innerHTML +=`
                <div class="flex items-center justify-between bg-gray-100 p-3 rounded-[8px] mb-3">
                    <div>
                        <h1 class="font-semibold text-xl">${cardTitle[i].innerText}</h1>
                        <p class="text-xl text-gray-500">${callNumber[i].innerText}</p>
                    </div>
                    <p class="text-gray-800">${new Date().toLocaleTimeString()}</p>
                </div>`
        coin.innerText = coin.innerText - 20;
        return coin
        
    });
});


clearHistory.addEventListener('click', () => {
    history.innerHTML = '';
});


const copycount = document.getElementById("copycount");
const clickCopy = document.querySelectorAll(".clickCopy");
clickCopy.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        const numberToCopy = callNumber[i].innerText;
        
        // Copy to clipboard using modern API
        navigator.clipboard.writeText(numberToCopy).then(() => {
            alert("Number Copied : " + numberToCopy);
            copycount.innerText++;
        }).catch((err) => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = numberToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            alert("Number Copied : " + numberToCopy);
            copycount.innerText++;
        });
    });
});


    //   const text = btn.parentElement.querySelector('#call-number').innerText;
    //   navigator.clipboard.writeText(text).then(() => {
    //     btn.textContent = "Copied!";
    //     setTimeout(() => btn.textContent = "Copy Order ID", 1000);
    //   });





// clickCall.forEach((call) => {
//     call.addEventListener("click", function () {
//         alert("Calling " + coin.innerText);
//     });
// });

// clickCopy.forEach((copy) => {
//     copy.addEventListener("click", function () {
//         navigator.clipboard.writeText(coin.innerText);
//     });
// });