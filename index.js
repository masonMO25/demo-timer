const COUNTDOWN_TIME = 10;
const INTERVAL = 1000;

const MESSAGE = "watashi wa Mason desu";

const words = MESSAGE.split(" ");

// TODO: Declare variables for state we want to track.
const countdownSpan = document.querySelector("#countdown");
const messageP = document.querySelector("#message");

function displayMessage(msgArr) {
  let i = 0;

  const msgInterval = setInterval(function () {
    messageP.textContent = msgArr[i];
    i++;

    if (i === msgArr.length) {
      clearInterval(msgInterval);
    }
  }, INTERVAL);
}

function countDown() {
  let i = COUNTDOWN_TIME;

  const countDownInterval = setInterval(function () {
    countdownSpan.textContent = i;
    i--;

    // if we've reached 0, stop the interval
    // This will avoid memory leaks
    if (i < 0) {
      clearInterval(countDownInterval);
      displayMessage(words);
    }
  }, INTERVAL);
}

countDown();
