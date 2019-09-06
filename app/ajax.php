<?php

$tell = htmlspecialchars($_POST["phone"]);

if (!empty($tell)) {

	$to = 'khripunovpp@gmail.com';
	$subject = 'Заказ Золото Сибири';
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; utf-8' . "\r\n";
	$headers .= 'From:  олото Сибири <info@золотосибири.рф>' . "\r\n";
	$message = "
							<table>
								<tr>
									<td><b>Контактный телефон</b></td>
									<td>$tell</td>
								</tr>
								<tr>
									<td colspan=\"2\">Сообщение создано автоматически!</td>
								</tr>
							</table>
							";
				
	mail($to, $subject, $message, $headers);

	$jsonout = '{"status": "success", "message": "Спасибо! Ваша заявка принята. Наш оператор свяжется с вами в течение 15 минут."}';

} else {

	$jsonout = '{"status": "error", "message": "Без номера телефона мы не сможем вам помочь."}';
	
}

echo $jsonout;

?>