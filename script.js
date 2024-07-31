const butn = document.querySelectorAll(".btn");
const board = document.querySelector("#board");
const newbtn = document.querySelector("#newbtn");
const resetbtn = document.querySelector("#resetbtn");
const h1 = document.querySelector("h1");
const main = document.getElementById("container");

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
var count = 0;
let turn = false;
butn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turn) {
      btn.style.color = "red";
      btn.innerText = "X";
      turn = false;
    } else {
      btn.innerText = "O";
      btn.style.color = "black";
      turn = true;
    }
    btn.disabled = true;

    winner();
  });
});

function winner() {
  for (let chance of winpattern) {
    let check1 = butn[chance[0]].innerText;
    let check2 = butn[chance[1]].innerText;
    let check3 = butn[chance[2]].innerText;
    count += 1;
    console.log(count);
    if (check1 != "" && check2 != "" && check3 != "") {
      if (check1 === check2 && check2 === check3 && check1 === check3) {
        setTimeout(() => {
            board.remove();
        }, 1000);
        const h = document.createElement("h1");
        h.innerText = `🎉Player '${check1}' Wins!🎉`;
        setTimeout(() => {
          h.style.opacity = "1";
        }, 100);

        
        count--;
        document.body.querySelector(".shub").appendChild(h);
        butn.forEach((btn) => {
          btn.disabled = true;
        });

        break;
      } else if (count == 72) {
        draw();
      }
    }
  }
}

newbtn.addEventListener("click", () => {
  location.reload();
});
resetbtn.addEventListener("click", () => {
  location.reload();
});

function draw() {
  board.remove();
  const k = document.createElement("h2");
  k.style.color = "red";
  k.innerText = `🔄 It's a Draw! Choose an option below:`;
  document.body.querySelector(".shub").appendChild(k);
}
