

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

function increaseHeart(el) {
  heartCount++;
  document.getElementById("heartCount").innerHTML =
    `<img src="assets/heart.png" alt=""> ${heartCount}`;

  // Highlight the clicked heart (visual feedback)
  el.querySelector("img").style.backgroundColor = "#ffcccc"; 
}

function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    alert(`Copied: ${number}`);
    copyCount++;
    document.getElementById("copyCount").innerHTML = `${copyCount} copy`;
  }).catch(err => {
    console.error("Copy failed: ", err);
  });
}

function makeCall(service, number) {
  if (coinCount < 20) {
    alert("Not enough coins to make a call!");
    return;
  }

  alert(`Calling ${service} at ${number}`);
  coinCount -= 20;

  // Update coin counter
  document.getElementById("coinCount").innerHTML =
    `<img src="assets/coin.png" alt=""> ${coinCount}`;

  // Add to call history with time
  let historyList = document.getElementById("historyList");
  let li = document.createElement("li");
  let time = new Date().toLocaleTimeString();
  li.textContent = `${service} (${number}) - ${time}`;
  historyList.appendChild(li);
}

function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}



