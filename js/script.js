let activeLink = document.querySelectorAll("a");
activeLink.forEach((e) => {
  e.addEventListener("click", (e) => {
    for (let i = 0; i < activeLink.length; i++) {
      activeLink[i].classList.remove("active");
    }
    e.target.classList.add("active");
  });
});
const mobile = document.getElementsByClassName("mobile"),
  arrowDown = document.getElementsByClassName("arrowDown"),
  arrowUp = document.getElementsByClassName("arrowUp"),
  navBarAlter = document.getElementsByClassName("navBarAlter");

mobile[0].addEventListener("click", () => {
  arrowDown[0].classList.toggle("show");
  arrowUp[0].classList.toggle("show");
  navBarAlter[0].classList.toggle("show");
});

const next = document.getElementsByClassName("next"),
  slider = document.getElementsByClassName("slider"),
  pre = document.getElementsByClassName("pre");
slider[0].classList.add("ease"),
  sizer = 0,
  wider = 94.5,
  r = window.screen.width,
  inc = 31.5;

if (r <= 425) {
  wider = 189;
    inc =50;
}

next[0].addEventListener("click", () => {
  if (sizer >= wider) sizer = 0;
  sizer += inc;
  let size = `${sizer}%`;
  console.log(size);
  slider[0].style.transform = `translate(${size})`;
});

pre[0].addEventListener("click", () => {
  if (sizer <= -wider) sizer = 0;
  sizer -= inc;
  let size = `${sizer}%`;
  console.log(size);
  slider[0].style.transform = `translate(${size})`;
});

console.log(r);
