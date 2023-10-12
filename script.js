let keyPressed = document.getElementById("body");
let ball = document.getElementById("ball");
let left = 0,
  t = 0;
let elementWidth = ball.offsetWidth;
let browserHeight = document.documentElement.clientHeight;
let browserWidth = document.documentElement.clientWidth;
keyPressed.addEventListener("keydown", (e) => {
  // ---------------Moving Up-----------------------------
  if (e.keyCode == 104 || e.keyCode == 38 || e.keyCode == 87) {
    if (t > 0) {
      t = t - 10;
      ball.style.top = t + "px";
    }
  }
  // ------------------Moving Down----------------------------
  if (e.keyCode == 83 || e.keyCode == 40 || e.keyCode == 98) {
    if (t < browserHeight - elementWidth - 10) {
      t = t + 10;
      ball.style.top = t + "px";
    }
  }
  // ---------------------------Moving Left--------------------
  if (e.keyCode == 65 || e.keyCode == 37 || e.keyCode == 100) {
    if (left > 0) {
      left -= 10;
      ball.style.left = left + "px";
    }
  }
  // ----------------------Moving Right--------------------------
  if (e.keyCode == 68 || e.keyCode == 39 || e.keyCode == 102) {
    if (left < browserWidth - elementWidth - 6) {
      left += 10;
      ball.style.left = left + "px";
    }
  }
});
