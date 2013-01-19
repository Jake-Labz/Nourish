<?php
$EmailFrom = 'jake.thelabrat@gmail.com';
//$EmailTo = 'info@nourishgroup.co.uk';
$EmailTo = 'stevenwake@me.com';
$Subject = 'Website Enquiry';
$Name = Trim(stripslashes($_POST['Name']));
$Tel = Trim(stripslashes($_POST['Tel']));
$Email = Trim(stripslashes($_POST['Email']));
$Message = Trim(stripslashes($_POST['Message']));
// prepare email body text
$Body = "Name: $Name\nTel: $Tel\n Email: $Email\n Message: $Message\n";
// send email
$success = mail($EmailTo, $Subject, $Body, "From:$EmailFrom");
// redirect to success page
echo ($success) ? 'sent' : 'error';
?>