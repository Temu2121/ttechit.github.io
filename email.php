<?php

if(isset($_POST['submit'])){
	$to = "temu1537@gmail.com"; // Your email address
	$name = $_POST['name'];
	$from = $_POST['email'];
	$location = $_POST['location'];
	$course = $_POST['course'];
    $phone1 = $_POST['phone1'];
    $phone2 = $_POST['phone2'];
	$subject = "New Registration";
	$headers = "From:" . $from;
	$result = mail($to,$subject,$course,$headers);



	if ($result) {
		echo '<script type="text/javascript">alert("Your Registration was sent Successfully! We will contact you soon!");alert("Thank You")</script>';
		echo '<script type="text/javascript">window.location.href = window.location.href;</script>';

	}else{
		echo '<script type="text/javascript">alert("Sorry! Message was not sent, Try again Later.");</script>';
		echo '<script type="text/javascript">window.location.href = window.location.href;</script>';
	}
}
?>