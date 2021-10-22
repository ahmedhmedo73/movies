var myImage = document.querySelector(".img");
// console.log(myImage);
document.body.addEventListener("mousemove", function(e) {
    myImage.style.left = e.clientX;
    myImage.style.top = e.clientY;
    // console.log(e.clientX);
    // console.log(myImage.style.left);
});