$(document).ready(function () {
    // $("#hamburger").click(function () {
    //     $("#sideBar").addClass("openStyles");
    // });
    // $("#sideBarX").click(function () {
    //     $("#sideBar").removeClass("openStyles");
    // });
    /////////////////////////////////////////////////////////////
    $(window).on("load", function () {
        $(window).scroll(function () {
            let windowBottom = $(this).scrollTop() + $(this).innerHeight();
            // console.log(windowBottom)
            if(windowBottom > 630 && windowBottom < 660){
                $(".info").addClass("info-active")
                $(".shurikenImg2").addClass("shurikenImg2-active")
                $(".shurikenImg").addClass("shurikenImg-active")
            }else if ( windowBottom > 1410 && windowBottom < 1440){
                $(".project-container").addClass("project-container-active")
                $(".ball").addClass("ball-active")
                $(".leftBar").addClass("leftBar-active")
                $(".rightBar").addClass("rightBar-active")
            }else if (windowBottom > 2065 && windowBottom < 2350){
                $(".packmanContainer").addClass("packmanContainer-active")
                $(".skillsDiv").addClass("skillsDiv-active")
                $(".pacman").addClass("pacman-active")
                $(".pacman__mouth").addClass("pacman__mouth-active")
                $(".eatingBall1").addClass("eatingBall1-active")
                $(".eatingBall2").addClass("eatingBall2-active")
                $(".eatingBall3").addClass("eatingBall3-active")
                $(".eatingBall4").addClass("eatingBall4-active")
                $(".eatingBall5").addClass("eatingBall5-active")
            }
            
            $(".fade").each(function () {
                /* Check the location of each desired element */
                let objectBottom = $(this).offset().top + $(this).outerHeight();
                /* If the element is completely within bounds of the window, fade it in */
                if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                    if ($(this).css("opacity") == 0) { $(this).fadeTo(700, 1); }
                } else { //object goes out of view (scrolling up)
                    if ($(this).css("opacity") == 1) { $(this).fadeTo(200, 0); }
                }
            });
        }).scroll(); //invoke scroll-handler on page-load
    });
    //////////////////////////////////////////////////////////////
    $("#projBtn").click(function (){
        $('html, body').animate({
            scrollTop: $(".projects").offset().top
        }, 500);
    });
    //////////////////////////////////////////////////////////////
    $("#skillsBtn").click(function (){
        $('html, body').animate({
            scrollTop: $(".skills").offset().top
        }, 500);
    });
    //////////////////////////////////////////////////////////////
    $('#infoBtn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });
      //////////////////////////////////////////////////////////////
      $("#resume").click(function() {
        window.location.href = "./jonahlathamresume.pdf";
    });
});