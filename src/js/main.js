$(document).ready(function () {
    var inputs = $('#setServices .setServices__item .setServices__input'),
        btnSecondBlock = $('#kitorder--form .kitorder--form__btn'),
        setServicesBtn = $('#setServices--form .setServices__btn');


    function checkInputs() {
        var inputs = $('#setServices .setServices__item .setServices__input'),
            pricesVal = $('#setServices .setServices__item .setServices__priceVal'),
            sumVal = 0,
            hiddenInputSum = $('#secondBlockPopup--form .setServices__inputSum'),
            hiddenInputIndexs = $('#secondBlockPopup--form .setServices__inputParamsIndexs'),
            hiddenInputVal = $('#secondBlockPopup--form .setServices__inputParamsVal'),
            sumSpan = $('#setServices--form .totalSum__input'),
            arrIndexInputs = [0, 0, 0, 0, 0, 0, 0, 0],
            arrValueInputs = [0, 0, 0, 0, 0, 0, 0, 0];

        for (var i = 0; i < inputs.length; i++) {
            if (parseInt(inputs[i].value) != 0) {
                arrIndexInputs[i] = parseInt(inputs[i].value);
                arrValueInputs[i] = parseInt(pricesVal[i].innerText);
            }
            sumVal += parseInt(inputs[i].value) * parseInt(pricesVal[i].innerText);
        }
        hiddenInputSum.attr('value', sumVal);
        hiddenInputIndexs.attr('value', arrIndexInputs);
        hiddenInputVal.attr('value', arrValueInputs);
        sumSpan.text(sumVal);
    };

    inputs.change(function (e) {
        checkInputs();
    });

    setServicesBtn.on('click', function () {
        var secondBlockPopup = $('#secondBlockPopup');

        secondBlockPopup.fadeIn(300);
        closeSecondBlockPopup();
    });

    function closeSecondBlockPopup() {
        $(document).mouseup(function (e) {
            var block = $('#secondBlockPopup'),
                container = $('#secondBlockPopup .container');

            if (block.has(e.target).length === 0) {
                $('#secondBlockPopup').fadeOut(300);
            } else if (container.has(e.target).length === 0) {
                $('#secondBlockPopup').fadeOut(300);
            }
        })
    };

    $('#secondBlockPopup--form').submit(function (e) {
        var userName = $('#secondBlockPopup--form .secondBlockPopup--form__input[name="username"]'), 
            userPhone = $('#secondBlockPopup--form .secondBlockPopup--form__input[name="phone"]'),
            userSum = $('#secondBlockPopup--form .setServices__inputSum[name="sum"]').val(), 
            userParamsIndex = $('#secondBlockPopup--form .setServices__inputParamsIndexs[name="paramsIndex"]').val(),
            userParamsVal = $('#secondBlockPopup--form .setServices__inputParamsVal[name="paramsVal"]').val(),
            popupWrapper = $('#secondBlockPopup'),
            messagePopupError = popupWrapper.children('.secondBlockPopup__fail'),
            messagePopupDone = popupWrapper.children('.secondBlockPopup__done');
        userName.css('border', '1px solid #ccc');
        userPhone.css('border', '1px solid #ccc');
        e.preventDefault();
        if (userName.val().length == 0 || !isNaN(userName.val())) {
            userName.css('border', '1px solid red');
            return;
        } else if (userPhone.val().length == 0)  {
            userPhone.css('border', '1px solid red');
            return;
        };
        $.ajax({
            type: "POST",
            url: "././sendSecondForm.php",
            data: {userName: userName.val(), userPhone: userPhone.val(), userSum: userSum, userIndex: userParamsIndex, userVal: userParamsVal},
            dataType: "html",
        })
        .done(function(data){
            console.log(data);
            console.log('Сообщение успешно отправлено!');
            popupWrapper.fadeOut(300);
            location.href = "./success.html"
        })
        .fail(function(){
            console.log('fail')
        })
    });

    checkInputs();

    /*btnFirstBlock.on('click', function(e){
        
    });  */

});