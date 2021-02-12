function show(x) {
    x.classList.toggle("stciky")

    var navOne = document.querySelector(".nav-1")
    if (navOne.className === "nav-1") {
        navOne.className += " nav-11"
    } else {
        navOne.className = "nav-1"
    }

}



$(document).ready(function () {
    $('.owl-carousel3').owlCarousel({
        loop: true,
        margin: 40,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsiveClass: true,
		autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: true
            },
            992: {
                items: 2,
                nav: true
            },

        }
    })
});