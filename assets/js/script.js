// tab-1
let tabs = document.querySelectorAll(".tab-1");
let tabcontent = document.querySelectorAll(".tab-content .content");
console.log(tabs, tabcontent);

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabcontent.forEach((e) => {
            e.classList.remove("active");
            tabcontent[index].classList.add("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
            tabs[index].classList.add("active")
        });
    })
})

// down to up btn 
const topbtn = document.querySelector(".topbtn")
window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topbtn.classList.add("show")
    } else {
        topbtn.classList.remove("show");
    }
})
topbtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})

// slider 1
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1580,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ],
});

// footer slider
$('.footer-slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    nextArrow: ".btn-next",
    prevArrow: ".btn-prev",
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});
