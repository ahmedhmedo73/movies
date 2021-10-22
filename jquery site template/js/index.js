// Library => 2006 => Jquery => Js
//bootstrap , Jquery
//bootstrap => framework
//Jquery => library
// $ => object include all  Jquery methods
//("#demo") // Jquery Selector
//hide() => Effect
//(4000) => duration => 4s

/*
Jquery Effects

$("#demo").hide(5000);
$("#demo").show(1000);
$("#demo").toggle(1000);


$("#demo").slideDown(1000);
$("#demo").slideUp(1000);
$("#demo").slideToggle(1000);

$("#demo").fadeOut(3000);
$("#demo").fadeIn(3000);
$("#demo").fadeToggle(3000);
$("#demo").fadeTo(2000 , 0.5 );

callback();

//chaining 
$("#demo").slideUp(1000).slideDown(1000).hide(1000);

 $("#demo").animate( {width:'100%'} , 2000);
   $("#demo").stop();
*/



/*
Jquery HTML
.text()//setters & getters
.html()//setters & getters
.val();//Input 
.attr();//html attribute => src , href , id 
.css("color");//css property font-size , marign , padding

.addClass();
.removeClass();
.toggleClass();

.after();
.before();

.append();
.prepend();

.remove();
.empty();
.width();//width only
.innerWidth();//width + padding
.outerWidth();//width + padding + border
.outerWidth(true);//width + padding + border + margin

*/

/*
Jquery Traversing

$("#demo").next()
$("#demo").prev()
$("#demo").prevAll()
$("#demo").nextAll()

$("#demo").nextUntil()
$("#demo").prevUntil()
$("#demo").siblings()



$("#demo").parent()
$("#demo").parents()
$("#demo").parentsUntil()

$("#demo").children()
$("#demo").find("span")
$("span").eq(5)
// */

$(document).ready(function(params) {
    $("#loading").fadeOut(1000);
    $("body").css("overflow", "auto");
});

let aboutOffset = $("#about").offset().top;
$(window).scroll(function() {
    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset - 50) {
        $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.9)");
        $("#btnUp").fadeIn(500);
    } else {
        $("#main-nav").css("backgroundColor", "transparent");
        $("#btnUp").fadeOut(300);
    }
});

$("a").click(function(e) {
    let aHref = $(e.target).attr("href");
    let offset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: offset }, 1000);
});

$("#btnUp").click(function(e) {
    $("html,body").animate({ scrollTop: 0 }, 1000);
});

$(".setColor").click(function(e) {
    let boxWidth = $("#colorBox").innerWidth();
    if ($("#sideBar").css("left") == "0px") {
        $("#sideBar").css("left", -boxWidth);
    } else
        $("#sideBar").css("left", "0");
});

$(".color-box").click(function(e) {
    let color = $(e.target).css("backgroundColor");
    $("p").css("color", color);
});