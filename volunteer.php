<?php
	$name = $_POST['name'];
	$bday = $_POST['bday'];
	$location = $_POST['location'];
	$eng = $_POST['eng'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$resume = $_POST['resume'];
	$dowhat = $_POST['dowhat'];
	$comment1 = $_POST['comment1'];
	$comment2 = $_POST['comment2'];
	$comment3 = $_POST['comment3'];
	$fp = fopen("volunteer.txt", "a");
	$savestring = "Name:    " . $name . "\nDOB:     " . $bday . "\nOccu:    " . $location . "\nEnglish: " . $eng . "\nPhone:   " . $phone . "\nEmail:   " . $email . "\nResume: " . $resume . "\nDid you attend: " . $comment1 . "\nThree words descripe yourself: " . $comment2 . "\nWhy Attend: " . $comment3 . "\nVolunteer What: " . $dowhat . "\n\n------------------------------\n\n";
	fwrite($fp, $savestring);
	fclose($fp);
	header("Location: http://www.tedxsonghuariver.com");
	die();
?>