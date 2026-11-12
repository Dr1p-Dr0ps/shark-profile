// さめがしゃべる言葉。ここを書き換えると言葉を増やせます。
const messages = [
  "さめです",
  "ねむ…",
  "おなかすいた",
  "コーヒー飲みたい",
  "ちょっと休憩しよう",
];

const shark = document.querySelector(".shark-button");
const message = document.querySelector(".shark-message");
const countText = document.querySelector("#count");
let count = 0;
let previous = -1;

shark.addEventListener("click", () => {
  // 続けて同じ言葉が出ないように、前回と同じなら選び直します。
  let random = Math.floor(Math.random() * messages.length);
  while (random === previous) {
    random = Math.floor(Math.random() * messages.length);
  }
  previous = random;

  count++;
  countText.textContent = count;
  shark.disabled = true;
  shark.classList.add("jump");
  message.textContent = "";

  // 60ミリ秒ごとに1文字ずつ表示します。
  let index = 0;
  const typing = setInterval(() => {
    message.textContent += messages[random][index];
    index++;

    if (index >= messages[random].length) {
      clearInterval(typing);
      shark.disabled = false;
      shark.classList.remove("jump");
    }
  }, 60);
});
