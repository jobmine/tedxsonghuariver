<?php
	$name = $_POST['name'];
	$bday = $_POST['bday'];
	$location = $_POST['location'];
	$eng = $_POST['eng'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$comment1 = $_POST['comment1'];
	$comment2 = $_POST['comment2'];
	$comment3 = $_POST['comment3'];
	$comment4 = $_POST['comment4'];
	$fp = fopen("audience.txt", "a");
	$savestring = "Name:    " . $name . "\nDOB:     " . $bday . "\nOccu:    " . $location . "\nEnglish: " . $eng . "\nPhone:   " . $phone . "\nEmail:   " . $email . "\nDid you attend: " . $comment1 . "\nThree words descripe yourself: " . $comment2 . "\nThree hobbies: " . $comment3 . "\nWhy Attend: " . $comment4 . "\n\n------------------------------\n\n";
	fwrite($fp, $savestring);
	fclose($fp);
	header("Location: http://www.tedxsonghuariver.com");
	die();
?>