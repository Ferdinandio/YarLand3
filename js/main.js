$(document).ready(function()
{
    $("a[href*='#container_menu']").click(function(event)
    {
        event.preventDefault();
        $('html, body').stop().animate({ scrollTop: $('#site_container_menu').offset().top }, 600, 'linear');
    });
    $("a[href*='#hit']").click(function(event)
    {
        event.preventDefault();
        $('html, body').stop().animate({ scrollTop: $('#site_hit').offset().top }, 600, 'linear');
    });
    $("#site_ResponsiveMenu1 ul li a").click(function(event)
    {
        $("#site_ResponsiveMenu1 input").prop("checked", false);
    });
    $("#SlideShow1").slideshow(
        {
            interval: 3000,
            type: 'sequence',
            effect: 'none',
            direction: '',
            pagination: false,
            fullscreen: 4,
            maxWidth: 1920,
            effectlength: 2000
        });
    $("#SlideShow1_back a").click(function()
    {
        $('#SlideShow1').slideshow('previmage');
    });
    $("#SlideShow1_next a").click(function()
    {
        $('#SlideShow1').slideshow('nextimage');
    });
    $("a[href*='#price_container']").click(function(event)
    {
        event.preventDefault();
        $('html, body').stop().animate({ scrollTop: $('#site_price_container').offset().top }, 600, 'linear');
    });
    $("a[href*='#what_plan_title']").click(function(event)
    {
        event.preventDefault();
        $('html, body').stop().animate({ scrollTop: $('#site_what_plan_title').offset().top }, 600, 'linear');
    });
    $("a[href*='#six_rules_container']").click(function(event)
    {
        event.preventDefault();
        $('html, body').stop().animate({ scrollTop: $('#site_six_rules_container').offset().top }, 600, 'linear');
    });
    $("a[data-rel='PhotoGallery1']").attr('rel', 'PhotoGallery1');
    $("#PhotoGallery1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
    $("a[data-rel='PhotoGallery2']").attr('rel', 'PhotoGallery2');
    $("#PhotoGallery2").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});



    $("a[data-rel='SlideShow1']").attr('rel', 'SlideShow1');
    $("#SlideShow1").magnificPopup({delegate:'li a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});




    $('#Button1').mouseover( function () {
        $(this).val("ЗАКАЗАТЬ БЕСПЛАТНЫЙ РАСЧЕТ")

    });

    $('#Button1').mouseout( function () {
        $(this).val("ЗАКАЗАТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ")

    });


    /**
     * Выделяем активный пункт меню
     */

// Cache selectors
    var lastId,
        topMenu = $("#ResponsiveMenu1"),
        topMenuHeight = topMenu.outerHeight()+15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

// Bind click handler to menu items
// so we can get a fancy scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

// Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });



    /**
     * Кнопка вверх
     */
    $(function() {

        $(window).scroll(function() {

            if($(this).scrollTop() > 400) {

                $('#toTop').fadeIn();

            } else {

                $('#toTop').fadeOut();

            }

        });



    });



    });


//Cлайды отзывы

$('#Image42').click(function() {
    $("#site_slide1").hide();
    $("#site_slide2").css({opacity: 0.6}).show().animate({opacity: 1.0}, 1000);
});


$('#Image44').click(function() {
    $("#site_slide2").hide();
    $("#site_slide3").css({opacity: 0.6}).show().animate({opacity: 1.0}, 1000);
});


$('#Image46').click(function() {
    $("#site_slide3").hide();
    $("#site_slide4").css({opacity: 0.6}).show().animate({opacity: 1.0}, 1000);
});


$('#Image48').click(function() {
    $("#site_slide4").hide();
    $("#site_slide1").css({opacity: 0.6}).show().animate({opacity: 1.0}, 1000);
});


$('#Image40').click(function() {
    $("#site_slide1").hide();
    $("#site_slide4").css({opacity: 0.6}).show().animate({opacity: 1.0}, 1000);
});



$('#Image47').click(function() {
    $("#site_slide4").hide();
    $("#site_slide3").css({opacity: 0.6}).show().animate({opacity: 1.0}, 1000);
});


$('#Image45').click(function() {
    $("#site_slide3").hide();
    $("#site_slide2").css({opacity: 0.6}).show().animate({opacity: 1.0}, 1000);
});


$('#Image43').click(function() {
    $("#site_slide2").hide();
    $("#site_slide1").css({opacity: 0.6}).show().animate({opacity: 1.0}, 1000);
});

//Отложенная загрузка изображений

[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});





//Создание нескольких капч

var headerCaptcha;
var footerCaptcha;
var mod1Captcha;
var mod2Captcha;

function recaptchaCallback() {
    headerCaptcha = grecaptcha.render('header_captcha', {
        'sitekey' : '6LdX2LAUAAAAAMChLW9UoDsq6qzGGZFs1FWUbaBJ',
        // 'theme' : 'dark'
    });

    footerCaptcha = grecaptcha.render('footer_captcha', {
        'sitekey' : '6LdX2LAUAAAAAMChLW9UoDsq6qzGGZFs1FWUbaBJ'
    });

    mod1Captcha = grecaptcha.render('mod1_captcha', {
        'sitekey' : '6LdX2LAUAAAAAMChLW9UoDsq6qzGGZFs1FWUbaBJ'
    });

    mod2Captcha = grecaptcha.render('mod2_captcha', {
        'sitekey' : '6LdX2LAUAAAAAMChLW9UoDsq6qzGGZFs1FWUbaBJ'
    });
}





//Отправка формы с капчей headerCaptcha
function sendAjaxRequest() {



    $("#form_hit").validate({
        rules:{
            Editbox1:{
                required: true,
                minlength: 17,
                maxlength: 17,
            },
            Checkbox2:{
                required: true,

            },
        },
        messages:{
            Editbox1:{
                required: "Это поле обязательно для заполнения",
                maxlength: "Максимальное число символов - 16",
            },
            Checkbox2:{
                required: "Необходимо установить флажок - <br>",

            }
        },
        highlight: function(element, errorClass) {
            $(element).css({ border: '1px solid red' });
            $(element) .next("span") .hide();
        },

        unhighlight: function(element, errorClass) {
            $(element).css({ border: 'none' });
            $(element) .next("span") .hide();
        }
    });


    if($("#form_hit").valid()){
        if (grecaptcha === undefined) {
            alert('Recaptcha не определена');
            return;
        }

        var response = grecaptcha.getResponse(headerCaptcha);

        if (!response) {
            alert('Подтвердите что вы не робот');
            return;
        }
        else {
            var str = $('#form_hit');
            // console.log(str);


            $.ajax({
                url: '/mail-header.php',
                data: str.serialize(),
                type: 'POST',
                success: function(){
                    // alert('Ок!');
                    location.href = "/success.html";
                },
                error: function(){
                    alert('Error!');
                }
            });

        }
    }




}


//Отправка формы с капчей footerCaptcha

function sendAjaxRequestFooter() {


    $("#footer_form").validate({
        rules:{
            Editbox2:{
                required: true,
                minlength: 17,
                maxlength: 17,
            },
            Checkbox2f:{
                required: true,

            },
            TextArea1:{
                required: true,
            }
        },
        messages:{
            Editbox2:{
                required: "Это поле обязательно для заполнения",
                maxlength: "Максимальное число символов - 16",
            },
            Checkbox2f:{
                required: "Необходимо установить флажок - <br>",

            },
            TextArea1:{
                required: "Заполните ваш вопрос",
            }
        },
        highlight: function(element, errorClass) {
            $(element).css({ border: '1px solid red' });
            $(element) .next("span") .hide();
        },

        unhighlight: function(element, errorClass) {
            $(element).css({ border: 'none' });
            $(element) .next("span") .hide();
        }
    });

    if($("#footer_form").valid()) {
        if (grecaptcha === undefined) {
            alert('Recaptcha не определена');
            return;
        }

        var response2 = grecaptcha.getResponse(footerCaptcha);

        if (!response2) {
            alert('Подтвердите что вы не робот');
            return;
        }
        else {
            var str2 = $('#footer_form');
            // console.log(str);


            $.ajax({
                url: '/mail-footer.php',
                data: str2.serialize(),
                type: 'POST',
                success: function () {
                    // alert('Ок!');
                    location.href = "/success.html"

                },
                error: function () {
                    alert('Error!');
                }
            });

        }

    }


}


//Отправка модальной формы 1


function sendAjaxRequesModal1() {


    $("#mod_cont").validate({
        rules:{
            name_mod1:{
                required: true,

            },
            phone_mod1:{
                required: true,

            },
            plans_mod1:{
                required: true,

            },
            Checkboxmod1:{
                required: true,
            }

        },
        messages:{
            name_mod1:{
                required: "Введите ваше имя",

            },
            phone_mod1:{
                required: "Введите ваш телефон",

            },
            plans_mod1:{
                required: "Введите кол-во планов",

            },
            Checkboxmod1:{
                required: "Необходимо установить флажок - <br>",

            },

        },
        highlight: function(element, errorClass) {
            $(element).css({ border: '1px solid red' });
            $(element) .next("span") .hide();
        },

        unhighlight: function(element, errorClass) {
            $(element).css({ border: '1px solid #ccc' });
            $(element) .next("span") .hide();
        }
    });



    if($("#mod_cont").valid()) {
        if (grecaptcha === undefined) {
            alert('Recaptcha не определена');
            return;
        }

        var response3 = grecaptcha.getResponse(mod1Captcha);

        if (!response3) {
            alert('Подтвердите что вы не робот');
            return;
        }
        else {
            var str2 = $('#mod_cont');
            // console.log(str);


            $.ajax({
                url: '/mail-modal1.php',
                data: str2.serialize(),
                type: 'POST',
                success: function () {
                    // alert('Ок!');
                    location.href = "/success.html"

                },
                error: function () {
                    alert('Error!');
                }
            });

        }

    }


}


//Отправка модальной формы 3


function sendAjaxRequesModal2() {


    $("#mod_cont2").validate({
        rules:{
            name_mod2:{
                required: true,

            },
            phone_mod3:{
                required: true,

            },

            Checkboxmod2:{
                required: true,
            }

        },
        messages:{
            name_mod2:{
                required: "Введите ваше имя",

            },
            phone_mod3:{
                required: "Введите ваш телефон",

            },

            Checkboxmod2:{
                required: "Необходимо установить флажок - <br>",

            },

        },
        highlight: function(element, errorClass) {
            $(element).css({ border: '1px solid red' });
            $(element) .next("span") .hide();
        },

        unhighlight: function(element, errorClass) {
            $(element).css({ border: '1px solid #ccc' });
            $(element) .next("span") .hide();
        }
    });



    if($("#mod_cont2").valid()) {
        if (grecaptcha === undefined) {
            alert('Recaptcha не определена');
            return;
        }

        var response3 = grecaptcha.getResponse(mod2Captcha);

        if (!response3) {
            alert('Подтвердите что вы не робот');
            return;
        }
        else {
            var str2 = $('#mod_cont2');
            // console.log(str);


            $.ajax({
                url: '/mail-modal2.php',
                data: str2.serialize(),
                type: 'POST',
                success: function () {
                    // alert('Ок!');
                    location.href = "/success.html"

                },
                error: function () {
                    alert('Error!');
                }
            });

        }

    }


}



$(function() {
    $("#Editbox1").mask('8 (999) 999-99-99', {placeholder:'_'});
    $("#Editbox2").mask('8 (999) 999-99-99', {placeholder:'_'});
    $("#Editbox3").mask('8 (999) 999-99-99', {placeholder:'_'});
    $("#Editbox7").mask('8 (999) 999-99-99', {placeholder:'_'});
});


$('#define').click(function() {

        $.ajax({
            url: '/delfile.php',

            type: 'post',
            success: function(){
                alert('Yes!');
            },
            error: function(){
                alert('Error!');
            }
        });
}
);





