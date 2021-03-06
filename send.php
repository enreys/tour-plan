<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$sendBooking = $_POST['booking-send'];
$sendNewsletter = $_POST['newsletter-button'];
$message = $_POST['message'];
$sendFeedback = $_POST['feedback-send'];


// Формирование самого письма
$title = "Новое сообщение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message";




if (isset($_POST['newsletter-button'])) {
    $title = "Подписка на новости";
    $body = "
    <h1>Новое обращение</h1>
    Пользователь подписался на новостную подписку.<br>
    Его <b>e-mail:</b> $email";
  } else if (isset($_POST['feedback-send'])) {
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message";
  } else if (isset($_POST['booking-send'])) {
    $title = "Новое бронирование отеля";
    $body = "<h2>Новое бронирование отеля</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>E-mail:</b> $email<br><br>
    <b>Сообщение:</b><br>$message";
  }








// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'enreys@bk.ru'; // Логин на почте
    $mail->Password   = 'crossfire1337'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('enreys@bk.ru', 'enreys ltd'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('enreysbtc@bk.ru');  


    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
if (isset($_POST['email'])) {
    header('Location: thankyou.html');
  } else if (isset($_POST['feedback-send'])) {
    header('Location: thankyou.html');
  } else if (isset($_POST['booking-send'])) {
    header('Location: thankyou.html');
  }