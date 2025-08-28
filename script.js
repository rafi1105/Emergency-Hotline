const heartCount = document.getElementById("heartCount");
const heartCountMobile = document.getElementById("heartCountMobile");
const clickHeart = document.querySelectorAll(".clickHeart");

// Mobile Sidebar functionality
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

// Open sidebar
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
        mobileSidebar.classList.remove("translate-x-full");
        sidebarOverlay.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    });
}

// Close sidebar
function closeSidebar() {
    mobileSidebar.classList.add("translate-x-full");
    sidebarOverlay.classList.add("hidden");
    document.body.style.overflow = "auto"; // Restore scrolling
}

if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeSidebar);
}

// Sync mobile and desktop counters
function updateHeartCount() {
    const currentCount = parseInt(heartCount.innerText) + 1;
    heartCount.innerText = currentCount;
    if (heartCountMobile) heartCountMobile.innerText = currentCount;
}

clickHeart.forEach((heart) => {
    heart.addEventListener("click", updateHeartCount);
});


const coin = document.getElementById("coin");
const coinMobile = document.getElementById("coinMobile");
const clickCall = document.querySelectorAll(".clickCall");
const cardTitle = document.querySelectorAll(".card-title");
const callNumber = document.querySelectorAll(".call-number");
const history = document.getElementById('history');
const historyMobile = document.getElementById('historyMobile');

const clearHistory = document.getElementById('clearHistory');
const clearHistoryMobile = document.getElementById('clearHistoryMobile');

// Sync coin values
function updateCoinCount(newValue) {
    coin.innerText = newValue;
    if (coinMobile) coinMobile.innerText = newValue;
}

clickCall.forEach((call, i) => {
    call.addEventListener('click', () => {
        const currentCoins = parseInt(coin.innerText);
        if (currentCoins < 20){
            alert("You don't have sufficient Coin")
            return
        }
        alert("📞 Calling : " + cardTitle[i].innerText + " " + callNumber[i].innerText);
        
        // Add to desktop history
        if (history) {
            history.innerHTML +=`
                <div class="flex items-center justify-between bg-gray-100 p-3 rounded-[8px] mb-3">
                    <div>
                        <h1 class="font-semibold text-xl">${cardTitle[i].innerText}</h1>
                        <p class="text-xl text-gray-500">${callNumber[i].innerText}</p>
                    </div>
                    <p class="text-gray-800">${new Date().toLocaleTimeString()}</p>
                </div>`
        }
        
        // Add to mobile history
        if (historyMobile) {
            historyMobile.innerHTML +=`
                <div class="flex items-center justify-between bg-gray-100 p-2 rounded-[8px] mb-2">
                    <div>
                        <h1 class="font-semibold text-sm">${cardTitle[i].innerText}</h1>
                        <p class="text-sm text-gray-500">${callNumber[i].innerText}</p>
                    </div>
                    <p class="text-gray-800 text-xs">${new Date().toLocaleTimeString()}</p>
                </div>`
        }
        
        updateCoinCount(currentCoins - 20);
    });
});

// Clear desktop history
if (clearHistory) {
    clearHistory.addEventListener('click', () => {
        if (history) history.innerHTML = '';
    });
}

// Clear mobile history
if (clearHistoryMobile) {
    clearHistoryMobile.addEventListener('click', () => {
        if (historyMobile) historyMobile.innerHTML = '';
    });
}


const copycount = document.getElementById("copycount");
const copycountMobile = document.getElementById("copycountMobile");
const clickCopy = document.querySelectorAll(".clickCopy");

// Sync copy count
function updateCopyCount() {
    const currentCount = parseInt(copycount.innerText) + 1;
    copycount.innerText = currentCount;
    if (copycountMobile) copycountMobile.innerText = currentCount;
}

clickCopy.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        const numberToCopy = callNumber[i].innerText;
        
        // Copy to clipboard using modern API
        navigator.clipboard.writeText(numberToCopy).then(() => {
            alert("Number Copied : " + numberToCopy);
            updateCopyCount();
        }).catch((err) => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = numberToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            alert("Number Copied : " + numberToCopy);
            updateCopyCount();
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