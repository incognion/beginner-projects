// FILL DOT
let currentImageIndex = 0;

let buttonEL = document.querySelector(".dots");

let buttonArrow = document.querySelectorAll(".btn");

let image = document.querySelector("img");

const imglist = ["maria.jpg", "amir.jpg", "hannah.jpg", "matthew.jpg"];

// console.log(buttonArrow);

console.log(buttonArrow[0]);

buttonArrow[0].addEventListener("click", function handleClick(event) {
  console.log(event.target.parentNode.className);
  if (
    event.target.classList.contains("btn--left") ||
    event.target.parentNode.classList.contains("btn--left")
  ) {
    if (currentImageIndex > 0) currentImageIndex = currentImageIndex - 1;
    else currentImageIndex = 3;
    image.src = imglist[currentImageIndex];
    for (i = 0; i < 4; i++) {
      if (i == currentImageIndex) {
        continue;
      } else {
        console.log("aksjfh");
        buttonEL.children[i].classList.remove("fill-button");
      }
    }
    buttonEL.children[currentImageIndex].classList.add("fill-button");
  }
});
buttonArrow[1].addEventListener("click", function handleClick(event) {
  console.log(event.target.parentNode.className);
  if (
    event.target.classList.contains("btn--right") ||
    event.target.parentNode.classList.contains("btn--right")
  ) {
    if (currentImageIndex < 3) currentImageIndex = currentImageIndex + 1;
    else currentImageIndex = 0;
    image.src = imglist[currentImageIndex];
    for (i = 0; i < 4; i++) {
      if (i == currentImageIndex) {
        continue;
      } else {
        buttonEL.children[i].classList.remove("fill-button");
      }
    }
    buttonEL.children[currentImageIndex].classList.add("fill-button");
  }
});

buttonEL.addEventListener("click", function handleClick(event) {
  let parent = event.target.parentNode;
  if (event.target.className == "dot") {
    event.target.classList.add("fill-button");
    let childIndex = Array.prototype.indexOf.call(
      parent.children,
      event.target
    );
    // console.log(parent.children[4]);
    // console.log(event.target);
    image.src = imglist[childIndex];
    currentImageIndex = childIndex;
    for (i = 0; i < parent.childElementCount; i++) {
      if (i == childIndex) {
        continue;
      } else {
        parent.children[i].classList.remove("fill-button");
      }
    }
  }
});
