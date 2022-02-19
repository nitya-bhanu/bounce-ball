var animation;
document.getElementById("bl").addEventListener("click", function () {
  anime({
    targets: ".ball",
    bottom:300,
    direction: "alternate",
    easing: "linear",
    duration: "400",
  });
});

var animation1 = anime({
  targets: ".movingobstacles",
  left: -100,
  duration: "4000",
  loop: true,
  easing: "linear",
  autoplay: false
});
var animation2 = anime({
  targets: ".movingobstacles2",
  left: -100,
  duration: "5500",
  loop: true,
  easing: "linear",
  autoplay: false
});
var score = anime({
    targets: '.score',
    autoplay: false,
    innerHTML: "High Score: "+[6000],
    duration: 40000,
    easing: 'linear',
    round: 1
  });
document.querySelector('.pause').addEventListener('click', function () {
    animation1.pause();
    animation2.pause();
    score.pause();
  })
  document.querySelector('.play').addEventListener('click', function () {
    animation1.play();
    animation2.play();
    score.play();
  })
  document.querySelector('.restart').addEventListener('click', function () {
    animation1.restart();
    animation2.restart();
    score.restart();
    document.getElementById("msg").innerHTML="";
  })

  var update = 0;
  var el = document.getElementById('time');
  
  function incrementScore() {
      update += 1;
      el.innerText = "You have been here for " + update + " seconds.";
  }
  var cancel = setInterval(incrementScore, 1000);


window.setInterval(getOffsets, 10);
function getOffsets() {
  var ballpos = document.querySelector(".ball");
  var box1pos = document.querySelector(".movingobstacles");
  var box2pos = document.querySelector(".movingobstacles2");
  var topball=ballpos.offsetTop;
  var topbox1=box1pos.offsetTop;
  var topbox2=box2pos.offsetTop;
  if (
    (box1pos.offsetLeft+box1pos.offsetWidth >ballpos.offsetLeft && box1pos.offsetLeft+box1pos.offsetWidth <=ballpos.offsetLeft+ballpos.offsetWidth )&&
    topbox1-topball<=ballpos.offsetHeight
  ) {
    // document.querySelector('.movingobstacles') = animation1.pause
    // document.querySelector('.movingobstacles2') = animation2.pause;
    // const x=update;
    document.querySelector('.pause').click();
    document.getElementById("msg").innerHTML="Game Over";
  } else if (
    (box2pos.offsetLeft+box2pos.offsetWidth >=ballpos.offsetLeft && box2pos.offsetLeft+box2pos.offsetWidth <=ballpos.offsetLeft+ballpos.offsetWidth ) &&
    topbox2-topball<=ballpos.offsetHeight
  ) {
    // document.querySelector('.movingobstacles') = animation1.pause;
    // document.querySelector('.movingobstacles2') = animation2.pause;
    document.querySelector('.pause').click();
    document.getElementById("msg").innerHTML="Game Over";
  }
}
