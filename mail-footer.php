<?php
$phone =$_POST['Editbox2'];

$message = $_POST['TextArea1'];

/* Сюда впишите свою эл. почту webdizain@bk.ru  webdizain@bk.ru*/
$emails = "info@plany01.ru";



$from="Plany01.ru <admin@plany01.ru>";


$send = mail($emails, "plany01.ru", "Сообщение c нижней формы (Вопрос):

 \n Телефон: $phone
  \n Вопрос: $message

  ", 'From:'.$from);
//if($send ){
//    header('Refresh: 0; URL=/success.html');
//}