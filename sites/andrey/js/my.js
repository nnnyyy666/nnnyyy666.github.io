$(function() {

    $(".js_scroll-link").click(function () {
        $('html, body').animate({scrollTop: $('a[name="' + this.hash.slice(1) + '"]').offset().top-100}, 500);
        return false;
    });



    $(".navbar-toggler").click(function() {

        $(this).toggleClass("active");

    });




});






$(window).scroll(function(){
    if ($(window).scrollTop() >= 60) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');

    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});


var request = null;
var mouse = { x: 0, y: 0 };
var cx = window.innerWidth / 2;
var cy = window.innerHeight / 2;

$('body').mousemove(function(event) {

    mouse.x = event.pageX;
    mouse.y = event.pageY;

    cancelAnimationFrame(request);
    request = requestAnimationFrame(update);
});

function update() {

    dx = mouse.x - cx;
    dy = mouse.y - cy;

    tiltx = (dy / cy);
    tilty = - (dx / cx);
    radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
    degree = (radius * 15);
    TweenLite.to("#canvas", 1, {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)', ease:Power2.easeOut});
    TweenLite.to(".intro__h1", 1, {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)', ease:Power2.easeOut});
}

$(window).resize(function() {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
});

//with train

var current = $(window).scrollTop();
var total = $(window).height() - current;
var ele = $(".train");
//var currPosition = ele.position().left + 360;
var currPosition = ele.position().left;
var trackLength = 300;
$(window).scroll(function (event) {
    current = $(window).scrollTop();
    console.log({total:total,current:current});
    console.log(current/total * 100);
    var newPosition = -(trackLength * (current/total))
    ele.css({left:currPosition+newPosition+'px'});
});

//with train fin


/* Demo Scripts for Bootstrap Carousel and Animate.css article
 * on SitePoint by Maria Antonietta Perna
 */
(function( $ ) {

    //Function to animate slider captions
    function doAnimations( elems ) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $('#myCarousel'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel();

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Pause carousel
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

})(jQuery);








// function animateFrom(elem, direction) {
//     direction = direction | 1;
//
//     var x = 0,
//         y = direction * 100;
//     if(elem.classList.contains("gs_reveal_fromLeft")) {
//         x = -100;
//         y = 0;
//     } else if(elem.classList.contains("gs_reveal_fromRight")) {
//         x = 100;
//         y = 0;
//     }
//     gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
//         duration: 1.25,
//         x: 0,
//         y: 0,
//         autoAlpha: 1,
//         ease: "expo",
//         overwrite: "auto"
//     });
// }
//
// function hide(elem) {
//     gsap.set(elem, {autoAlpha: 0});
// }




$('.advantages__item').each(function(){

    var self = $(this);

    var waypoint = new Waypoint({
        element: self,
        handler: function(direction) {
            console.log('Scrolled to waypoint!')
        }
    });

});


var animations = ["bm1", "bm2", "bm3"];
var i, len = animations.length;
for (i = 0; i < len; i++) {
    var anim;
    var elem = document.getElementById(animations[i]);
    var animData = {
        container: elem,
        renderer: "svg",
        loop: true,
        autoplay: true,
        rendererSettings: {
         progressiveLoad:false
     },
     path: 'json'+i+'/'+ animations[i] + '.json',
        assetsPath: 'json'+i+'/images/'


    };
    anim = bodymovin.loadAnimation(animData);
}



// var anim;
// var elem = document.getElementById('bm');
//
// var animData = {
//     container: elem,
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,   /*MAKE SURE THIS IS FALSE*/
//     rendererSettings: {
//         progressiveLoad:false
//     },
//     path: 'json/icon1.json',
//     name: 'myAnimation',
// };
//
//
// anim = bodymovin.loadAnimation(animData);
//
//
// var anim2;
// var elem2 = document.getElementById('bm2');
//
// var animData2 = {
//     container: elem2,
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,   /*MAKE SURE THIS IS FALSE*/
//     rendererSettings: {
//         progressiveLoad:false
//     },
//     path: 'json/icon2.json',
//     name: 'myAnimation2',
// };
//
//////
// anim2 = bodymovin.loadAnimation(animData2);





var waypoint = new Waypoint({
    element: document.getElementById('bm'),
    handler: function(direction) {
        anim.play();   /*THIS IS WHERE WE PLAY THE ANIMATION*/
    },
    offset: 'bottom-in-view' /* string defined in waypoint.js See documentation for more presets */
});


var waypoint2 = new Waypoint({
    element: document.getElementById('bm2'),
    handler: function(direction) {
        anim.play();   /*THIS IS WHERE WE PLAY THE ANIMATION*/
    },
    offset: 'bottom-in-view' /* string defined in waypoint.js See documentation for more presets */
});




$('.advantages__item').each(function(){

    var self = $(this);

    var waypoint = new Waypoint({
        element: self,
        handler: function(direction) {
            console.log('Scrolled to waypoint!')
        }
    });

});


