var timer = 60;
var score = 0;
var hitrn;

// ////////make bubbles
function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 70; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

// ///////set timer
function runtimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval = timerint;
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1> Game Over <br> your score is ${score}</h1>`;

      // ////add new game button
      var pbtm = document.getElementById("pbtm");
      var btn = document.createElement("button");
      var btnText = document.createTextNode("New Game");
      btn.appendChild(btnText);
      btn.setAttribute("class", "btn");
      pbtm.appendChild(btn);

      btn.addEventListener("click", function () {
        timer = 60;
        score = 0;
        document.querySelector("#scoreval").innerHTML = "";
        document.querySelector("#hitval").innerHTML = "";
        makeBubble();
        getNewHit();
      });
    }
  }, 1000);
}

// /////////set hit
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

// ////set score
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

// ////add event to parent
document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
runtimer();
getNewHit();
