<?php 

// require_once('phpmailer/PHPMailerAutoload.php');
// $mail = new PHPMailer;
// $mail->CharSet = 'utf-8';

// $name = $_POST['user_name'];
// $phone = $_POST['phone'];
// $plans = $_POST['countPlans'];
// $size = $_POST['sizePlans'];
// // $email = $_POST['user_email'];

// //$mail->SMTPDebug = 3;                               // Enable verbose debug output

// $mail->isSMTP();                                      // Set mailer to use SMTP
// $mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
// $mail->SMTPAuth = true;                               // Enable SMTP authentication
// $mail->Username = 'amagregorov@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
// $mail->Password = '$dk820&123'; // Ваш пароль от почты с которой будут отправляться письма
// $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
// $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

// $mail->setFrom('amagregorov@mail.ru'); // от кого будет уходить письмо?
// $mail->addAddress('dmi8829@yandex.ru');     // Кому будет уходить письмо 
// //$mail->addAddress('ellen@example.com');               // Name is optional
// //$mail->addReplyTo('info@example.com', 'Information');
// //$mail->addCC('cc@example.com');
// //$mail->addBCC('bcc@example.com');
// //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
// $mail->isHTML(true);                                  // Set email format to HTML

// $mail->Subject = 'Заявка со страницы услуг';
// // $mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone;
// $mail->Body    = "Сообщение c формы - 2-ой сектор страницы услуг:

// \n Имя: $name
// \n Телефон: $phone
// \n Кол-во планов нужно: $plans
// \n Размер: $size";
// $mail->AltBody = '';

// if(!$mail->send()) {
//     echo 'Error';
// } else {
//     header('location: ../success.html');
// }

$name =$_POST['user_name'];

$phone =$_POST['phone'];

$plans = $_POST['countPlans'];

$size = $_POST['sizePlans'];


/* Сюда впишите свою эл. почту webdizain@bk.ru  webdizain@bk.ru*/
$emails = "amagregorov@mail.ru";



$from="Plany01.ru <admin@plany01.ru>";



$send = mail($emails, "plany01.ru", "Сообщение c формы - страница услуг (модальное окно):

  \n Имя: $name
 \n Телефон: $phone
 \n Кол-во планов нужно: $plans
 \n Размер: $size


	", 'From:'.$from);
	
if ($send ) {

	header('Refresh: 0; URL=/success.html');
	 
}