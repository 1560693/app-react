var mdvBlog = mdvBlog || {};

(function ($) {

    // USE STRICT
    "use strict";

    var $window = $(window);
    var $document = $(document);

    mdvBlog.header = {
        init: function () {
            mdvBlog.header.offCanvasMenu();
            mdvBlog.header.searchToggle();
        },

        offCanvasMenu: function () {

            var $backdrop = $('<div class="mnmd-offcanvas-backdrop"></div>');
            var $offCanvas = $('.js-mnmd-offcanvas');
            var $offCanvasToggle = $('.js-mnmd-offcanvas-toggle');
            var $offCanvasClose = $('.js-mnmd-offcanvas-close');

            $backdrop.on('click', function () {
                $offCanvas.removeClass('is-active');
                $(this).fadeOut(200, function () {
                    $(this).detach();
                });
            });

            $offCanvasToggle.click(function (e) {

                /* ========================================================================
                click icon menu -> show menu mobile
                attr(): lấy giá trị hoặc thêm thuộc tính (attribute) cho thành phần
                ===========================================================================*/

                e.preventDefault();
                var targetID = $(this).attr('href');
                var $target = $(targetID);
                $target.toggleClass('is-active');
                $backdrop.hide().appendTo(document.body).fadeIn(200);
            });

            $offCanvasClose.click(function (e) {
                e.preventDefault();
                var targetID = $(this).attr('href');
                var $target = $(targetID);
                $target.removeClass('is-active');
                $backdrop.fadeOut(200, function () {
                    $(this).detach();
                });
            });

        },
        searchToggle: function () {
            var $searchDropdownToggle = $('.js-search-dropdown-toggle');
            var $headerSearchDropdown = $('#header-search-dropdown');

            $searchDropdownToggle.on('click', function (e) {
                e.preventDefault();
                $headerSearchDropdown.toggleClass('is-active');
            });
        },
    };

    mdvBlog.documentOnReady = {
        init: function () {
            mdvBlog.header.init();
            mdvBlog.documentOnReady.fixed_menu();
            mdvBlog.documentOnReady.fixed_jumb_menu();
            mdvBlog.documentOnReady.customCarouselNav();
            mdvBlog.documentOnReady.carousel_auto_width_center();
            mdvBlog.documentOnReady.carousel_auto_width_has_number();
            mdvBlog.documentOnReady.themeSwitch();
            mdvBlog.documentOnReady.loader();
        },
        /* ============================================================================
         * Loader
         * ==========================================================================*/
        loader: function() {
            setTimeout(function(){
                $('.site-wrapper').addClass('loaded')
            },1000)
        },

        /* ============================================================================
         * Dark Mode & Light Mode
         * ==========================================================================*/
        themeSwitch: function () {
            const siteWrapper = $('.site-wrapper'),
                theme_switch = $('.theme-switch__button');

            function toggleDarkMode(status) {
                if (status === 'on') {
                    $(theme_switch).attr('aria-checked', 'true');
                    siteWrapper.addClass('dark-mode');
                    var moon = $('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14.947" viewBox="0 0 15 14.947"><g id="moon" transform="translate(0 -0.547)"><g id="Group_17398" data-name="Group 17398" transform="translate(0 0.546)"><path id="Path_1462" data-name="Path 1462" d="M14.645,9.053a.527.527,0,0,0-.441.1,5.624,5.624,0,0,1-1.706,1,5.343,5.343,0,0,1-1.936.345A5.629,5.629,0,0,1,4.927,4.855,5.908,5.908,0,0,1,5.233,3a5.147,5.147,0,0,1,.92-1.649.489.489,0,0,0-.077-.69.527.527,0,0,0-.441-.1A7.736,7.736,0,0,0,1.572,3.283a7.588,7.588,0,1,0,13.4,6.383A.455.455,0,0,0,14.645,9.053Z" transform="translate(0 -0.546)" fill="#171717"/></g></g></svg>')
                    $(theme_switch).children("span").html(moon);
                } else {
                    var sun = $('<svg id="sunny-day" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path id="Path_1453" data-name="Path 1453" d="M102.893,183.46a.512.512,0,0,0-.512.512v1.455a.512.512,0,0,0,1.024,0v-1.455A.512.512,0,0,0,102.893,183.46Z" transform="translate(-95.394 -170.939)"/><path id="Path_1454" data-name="Path 1454" d="M102.893,2.482a.512.512,0,0,0,.512-.512V.515a.512.512,0,1,0-1.024,0V1.97A.512.512,0,0,0,102.893,2.482Z" transform="translate(-95.394 -0.003)"/><path id="Path_1455" data-name="Path 1455" d="M31.166,159.864l-1.029,1.029a.512.512,0,0,0,.724.724l1.029-1.029a.512.512,0,1,0-.724-.724Z" transform="translate(-27.94 -148.814)" /><path id="Path_1456" data-name="Path 1456" d="M160.22,32.043a.51.51,0,0,0,.362-.15l1.029-1.029a.512.512,0,1,0-.724-.724l-1.029,1.029a.512.512,0,0,0,.362.874Z" transform="translate(-148.809 -27.943)" /><path id="Path_1457" data-name="Path 1457" d="M2.479,102.907a.512.512,0,0,0-.512-.512H.512a.512.512,0,0,0,0,1.024H1.967A.512.512,0,0,0,2.479,102.907Z" transform="translate(0 -95.407)" /><path id="Path_1458" data-name="Path 1458" d="M185.42,102.395h-1.456a.512.512,0,1,0,0,1.024h1.456a.512.512,0,1,0,0-1.024Z" transform="translate(-170.932 -95.407)" /><path id="Path_1459" data-name="Path 1459" d="M31.173,31.894a.512.512,0,1,0,.724-.724l-1.029-1.029a.512.512,0,1,0-.724.724Z" transform="translate(-27.947 -27.945)" /><path id="Path_1460" data-name="Path 1460" d="M160.589,159.864a.512.512,0,0,0-.724.724l1.029,1.029a.512.512,0,0,0,.724-.724Z" transform="translate(-148.815 -148.814)" /><path id="Path_1461" data-name="Path 1461" d="M55.5,51.518A3.984,3.984,0,1,0,59.484,55.5,3.989,3.989,0,0,0,55.5,51.518Zm0,6.944a2.96,2.96,0,1,1,2.96-2.96A2.964,2.964,0,0,1,55.5,58.462Z" transform="translate(-48 -48.002)"/></svg>')
                    $(theme_switch).attr('aria-checked', 'false');
                    siteWrapper.removeClass('dark-mode');
                    $(theme_switch).children("span").html(sun)
                }
            }

            function updateDarkMode() {
                var darkMode = siteWrapper.hasClass('dark-mode');
                if (darkMode) {
                    toggleDarkMode('off');
                } else {
                    toggleDarkMode('on');
                }
            }

            function init() {
                var darkMode = siteWrapper.hasClass('dark-mode');
                // Turn on Dark Mode by default if is set in Theme Option
                if (darkMode) {
                    toggleDarkMode('on');
                }
                theme_switch.each(function () {
                    $(this).on('click', updateDarkMode);
                });
            }
            init(); // initialize
        },

        fixed_menu: function () {
            var $tabToggle = $('.tab-toggle');
            var $tabContent = $('.tab-content');

            $tabToggle.on('click', function () {
                $(this).toggleClass('is-active');
                $tabContent.toggleClass('open');
            });
        },
        fixed_jumb_menu: function () {
            var $href_nav_links = $('.nav-link[href*=#]');
            var $page_voca_action = $('.js-acive-page');

            $href_nav_links.bind('click', function (e) {

                var target = $(this).attr("href"); //đặt mục tiêu là biến
                var scrollToPosition = $(target).offset().top - 120;

                /*
                    thực hiện cuộn động bằng cách lấy vị trí trên cùng 
                    của phần tử mục tiêu và đặt nó làm mục tiêu cuộn
                */
                $('html').stop().animate({
                    scrollTop: scrollToPosition
                }, 600, function () {
                    $window.location.hash = target;
                });

                e.preventDefault(); //ngăn chặn nhảy khó, hành vi mặc định
            });

            $window.scroll(function () {
                var scrollDistance = $window.scrollTop();
                $page_voca_action.each(function (i) {
                    if ($(this).position().top <= scrollDistance) {
                        $('.nav-link.is-active').removeClass('is-active');
                        $('.nav .nav-link').eq(i).addClass('is-active');
                    }
                });
            }).scroll();
        },
        /* ============================================================================
         * Carousel funtions
         * ==========================================================================*/

        carousel_auto_width_center: function () {
            var $carousels = $('.js-mnmd-carousel-auto-width-center');
            $carousels.each(function () {
                var carousel_loop = $(this).data('carousel-loop');
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                $(this).owlCarousel({
                    items: 3,
                    margin: carousel_margin,
                    nav: true,
                    dots: true,
                    loop: carousel_loop,
                    autoWidth: true,
                    center: true,
                    autoHeight: true,
                    navText: [
                        '<i class="fas fa-chevron-left"></i>',
                        '<i class="fas fa-chevron-right"></i>',
                    ],
                    smartSpeed: 600,
                    onInitialized: owl_onInitialized,
                    responsive: {

                        991: {
                            margin: carousel_margin,
                        }
                    },
                });

                function owl_onInitialized(event) {
                    var element = event.target;
                    var current = event.item.index;
                    var owl_items = $(element).find(".owl-item");
                    var current_center = $(element).find(".owl-item").eq(current);
                    var current_center_index = $(element).find(".owl-item").eq(current).index();
                    var current_center_active = owl_items[current_center_index];
                    /*Action*/

                    setTimeout(function () {
                        $(current_center_active).addClass("active_current");
                        $(current_center).addClass("Animation-Preventive");
                    }, 100);

                };
                $(this).on('translate.owl.carousel', function (event) {
                    var element = event.target;
                    var current = event.item.index;
                    var current_center = $(element).find(".owl-item").eq(current);
                    var owl_items = $(element).find(".owl-item");
                    var owl_item_remove_class = $(element).find(".owl-item.active_current");
                    var current_center_index = $(element).find(".owl-item").eq(current).index();
                    var current_center_active = owl_items[current_center_index];
                    /*Action*/
                    $(current_center_active).addClass("active_current");
                    setTimeout(function () {
                        $(owl_item_remove_class).removeClass("active_current Animation-Preventive");
                        $(current_center).addClass("Animation-Preventive");

                    }, 100);
                });
                $(this).on("translate.owl.carousel", function (event) {
                    var element = event.target;
                    console.log(element);
                    var nav_btn_prev = $(element).find(".owl-prev");
                    var nav_btn_next = $(element).find(".owl-next");
                    $(nav_btn_prev).addClass("disable-btn");
                    $(nav_btn_next).addClass("disable-btn");
                });
                $(this).on("translated.owl.carousel", function (event) {
                    var element = event.target;
                    var nav_btn_prev = $(element).find(".owl-prev");
                    var nav_btn_next = $(element).find(".owl-next");
                    $(nav_btn_prev).removeClass("disable-btn");
                    $(nav_btn_next).removeClass("disable-btn");
                });
            })
        },
        carousel_auto_width_has_number: function () {
            var $carousels = $(".js-carousel-auto-width-has-number");
            $carousels.each(function () {
                $(this).owlCarousel({
                    margin: 0,
                    nav: true,
                    dots: true,
                    loop: true,
                    autoWidth: true,
                    items: 5,
                    rtl: true,
                    navText: [
                        '<i class="fas fa-chevron-left"></i>',
                        '<i class="fas fa-chevron-right"></i>',
                    ],
                    smartSpeed: 600,
                    onInitialized: counter,
                    onTranslate: counter,
                    responsive: {
                        0: {
                            nav: false,
                            dots: true,
                            items: 1
                        },
                        576: {
                            nav: true,
                            dots: false,
                            items: 5
                        }
                    },
                });

                function counter(event) {
                    var element = event.target;
                    var itemCount = event.item.count;
                    var itenIndex = event.item.index;
                    var owlstageChildrens = $(element).find('.owl-stage').children().length;
                    var theCloned = owlstageChildrens - itemCount;
                    var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                    if (itenIndex < parseInt(theCloned / 2)) {
                        currentIndex = owlstageChildrens - theCloned;
                    } else if (currentIndex > itemCount) {
                        currentIndex = currentIndex - itemCount;
                    }
                    $(element).parent().find('.owl-number').html('0' + currentIndex + ' <span class="slide-seperated"></span> ' + '0' + itemCount);
                }
            });
        },

        customCarouselNav: function () {
            if ($.isFunction($.fn.owlCarousel)) {
                var $carouselNexts = $(".js-carousel-next");
                $carouselNexts.each(function () {
                    var carouselNext = $(this);
                    var carouselID = carouselNext
                        .parent(".carousel-nav-custom-holder")
                        .attr("data-carouselID");
                    var $carousel = $("#" + carouselID);

                    carouselNext.on("click", function () {
                        $carousel.trigger("next.owl.carousel");
                    });
                });

                var $carouselPrevs = $(".js-carousel-prev");
                $carouselPrevs.each(function () {
                    var carouselPrev = $(this);
                    var carouselID = carouselPrev
                        .parent(".carousel-nav-custom-holder")
                        .attr("data-carouselID");
                    var $carousel = $("#" + carouselID);

                    carouselPrev.on("click", function () {
                        $carousel.trigger("prev.owl.carousel");
                    });
                });
            }
        },
    };

    mdvBlog.documentOnScroll = {

        init: function () {
            mdvBlog.documentOnScroll.goToTopScroll();
        },

        goToTopScroll: function () {
            var btn_to_top = $('.js-go-top')

            $window.scroll(function () {
                if ($window.scrollTop() > 400) {
                    btn_to_top.addClass('is-active');
                } else {
                    btn_to_top.removeClass('is-active');
                }
            });

            btn_to_top.on('click', function (e) {
                $('html').stop().animate({ scrollTop: 0 }, 600);
                e.preventDefault();
            });
        },
    };
    // chạy function
    $document.ready(mdvBlog.documentOnReady.init);
    $document.ready(mdvBlog.documentOnScroll.init);



})(jQuery)