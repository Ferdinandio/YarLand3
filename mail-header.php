<?php
$phone =$_POST['Editbox1'];

/* Сюда впишите свою эл. почту webdizain@bk.ru  webdizain@bk.ru*/
$emails = "info@plany01.ru";



$from="Plany01.ru <admin@plany01.ru>";



$send = mail($emails, "plany01.ru", "Сообщение c самой верхней формы (Бесплатная консультация):

 \n Телефон: $phone

  ", 'From:'.$from);
//if($send ){
//    header('Refresh: 0; URL=/success.html');
//}