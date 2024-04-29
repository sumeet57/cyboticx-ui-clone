function b1() {
  let img1 = document.querySelector(".b1cont");

  document
    .querySelector(".page3 .b1")
    .addEventListener("mousemove", (details) => {
      document.querySelector(".b1cont").style.opacity = "1";
      gsap.to(img1, {
        top: details.layerY - 100,
        left: details.layerX - 100,
        duration: 1,
      });
    });
  document
    .querySelector(".page3 .b1")
    .addEventListener("mouseleave", (details) => {
      document.querySelector(".b1cont").style.opacity = "0";
    });
}
function b2() {
  let img2 = document.querySelector(".b2cont");
  document
    .querySelector(".page3 .b2")
    .addEventListener("mousemove", (details) => {
      document.querySelector(".b2cont").style.opacity = "1";
      gsap.to(img2, {
        top: details.layerY - 100,
        left: details.layerX - 100,
        duration: 1,
      });
    });
  document
    .querySelector(".page3 .b2")
    .addEventListener("mouseleave", (details) => {
      document.querySelector(".b2cont").style.opacity = "0";
    });
}
function b3() {
  let img3 = document.querySelector(".b3cont");
  document
    .querySelector(".page3 .b3")
    .addEventListener("mousemove", (details) => {
      document.querySelector(".b3cont").style.opacity = "1";
      gsap.to(img3, {
        top: details.layerY - 100,
        left: details.layerX - 100,
        duration: 1,
      });
    });
  document
    .querySelector(".page3 .b3")
    .addEventListener("mouseleave", (details) => {
      document.querySelector(".b3cont").style.opacity = "0";
    });
}
function b4() {
  let img4 = document.querySelector(".b4cont");
  document
    .querySelector(".page3 .b4")
    .addEventListener("mousemove", (details) => {
      document.querySelector(".b4cont").style.opacity = "1";
      gsap.to(img4, {
        top: details.layerY - 100,
        left: details.layerX - 100,
        duration: 1,
      });
    });
  document
    .querySelector(".page3 .b4")
    .addEventListener("mouseleave", (details) => {
      document.querySelector(".b4cont").style.opacity = "0";
    });
}
function b5() {
  let img5 = document.querySelector(".b5cont");
  document
    .querySelector(".page3 .b5")
    .addEventListener("mousemove", (details) => {
      gsap.to(img5, {
        top: details.layerY - 100,
        left: details.layerX - 100,
        duration: 1,
      });
    });
  document
    .querySelector(".page3 .b5")
    .addEventListener("mouseleave", (details) => {
      document.querySelector(".b5cont").style.opacity = "0";
    });
}

document.querySelector("#bmain").addEventListener("mousemove", (e) => {
  console.log(e);
  gsap.to(".cursor", {
    top: e.y - 20,
    left: e.x - 20,
    // duration: 1,
  });
});

b1();
b2();
b3();
b4();
b5();

// moving_c();
