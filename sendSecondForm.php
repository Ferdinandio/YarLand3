<?php 
    print_r($_POST);

    $userName =  $_POST['userName'];
    $userPhone = $_POST['userPhone'];
    $userSum =  $_POST['userSum'];
    $userIndex =  $_POST['userIndex'];
    $userVal =  $_POST['userVal'];

    $to = 'info@plany01.ru'; // обратите внимание на запятую

    $subject = 'Subject from site (calc)';

    // текст письма
    /*$message = "
    <html lang='ru'>
        <head>
            <meta charset='UTF-8'>
            <title>Заявка с сайта от {$userName}</title>
        </head>
        <body>
            <table>
                <tr><td>Имя</td><td>{$userName}</td></tr>  
                <tr><td>Телефон</td><td>{$userPhone}</td></tr>  
                <tr><td>Сумма</td><td>{$userSum}</td></tr>
                <tr><td>Выбранные пункты в калькуляторе</td><td>{$userIndex}</td></tr>  
                <tr><td>Цена в калькуляторе</td><td>{$userVal}</td></tr>
            </table>
        </body>
    </html>
    ";*/

    $message = "Имя: {$userName}; \r\nТелефон: {$userPhone}; \r\nСумма: {$userSum}; \r\nВыбранные пункты в калькуляторе: {$userIndex}; \r\nЦены из калькулятора: {$userVal};";

    // Для отправки HTML-письма должен быть установлен заголовок Content-type
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

    // Отправляем
    mail($to, $subject, $message);
?>
