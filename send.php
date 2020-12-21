<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php';

$mail = new PHPMailer(true);

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

try {
    $mail->isSMTP();
    $mail->Host = 'mail.massaspequenogigante.com.br';
    $mail->SMTPAuth = true;
    $mail->Username = 'atendimento@massaspequenogigante.com.br';
    $mail->Password = '@P@st3l201A';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('contato@email.com.br', 'Contato do cliente');
    $mail->addAddress('atendimento@massaspequenogigante.com.br', 'Contato Pequeno Gigante Massas Alimenticias');

    $mail->isHTML(true);

    $mail->Subject = "Assunto: $subject";
    $mail->Body = '<div style="width: 600px; float: left; background-color: transparent;">';
    $mail->Body .= "Nome: $name <br><br> E-mail: $email <br><br> Menssagem: $message";
    $mail->Body .= '</div>';

    $mail->send();
    $mail->ClearAllRecipients();
    $mail->ClearAttachments();

} catch (Exception $e) {
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
