<?php
$name =$_POST['name_mod1'];

$phone =$_POST['phone_mod1'];

$plans =$_POST['plans_mod1'];

/* Сюда впишите свою эл. почту webdizain@bk.ru  webdizain@bk.ru*/
$emails = "info@plany01.ru";



$from="Plany01.ru <admin@plany01.ru>";



$send = mail($emails, "plany01.ru", "Сообщение c формы - заказ планов:

  \n Имя: $name
 \n Телефон: $phone
  \n Кол-во планов нужно: $plans

  ", 'From:'.$from);
//if($send ){
//    header('Refresh: 0; URL=/success.html');
//}