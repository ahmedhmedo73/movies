// $('#myBtn').click(function(e) {
//     $('.test').hide(3000);
// });



// $('#myBtn').click(function(e) {
//     $('.test').slideUp(1000, function() {
//         $('#myBtn').slideUp(1000);
//     });
// });


//chain
// $('.test').slideUp(1000).show(1000).hide(1000).slideDown(1000);

//animate
// $('#myBtn').click(function(e) {
//     $('.test').animate({ width: "500px" }, 1000);
//     $('.test').animate({ height: "500px" }, 1000);
//     $('.test').animate({ borderRadius: "50%" }, 1000);
//     for (let index = 0; index < 10; index++) {
//         $('.test').animate({ marginLeft: "+=80px" }, 1000);
//         $('.test').animate({ marginTop: "+=80px" }, 1000);
//         $('.test').animate({ marginLeft: "-=80px" }, 1000);
//         $('.test').animate({ marginTop: "-=80px" }, 1000);
//     }
// });
$(".img-item").click(function(e) {
    let imgSrc = $(e.target).attr('src');
    console.log(imgSrc);
    $("#mainImage").attr('src', imgSrc);
});