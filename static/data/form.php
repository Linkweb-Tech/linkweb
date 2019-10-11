<?php 
	include('./class/captchaV3.php');

	$captcha = new CaptchaV3();
	$response = $captcha->get_Captcha($_REQUEST['recaptcha']);

	function isEmail($email) {
		return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i", $email));
	}	

	header("Access-Control-Allow-Origin: https://new.linkweb.fr");
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	$rest_json = file_get_contents("php://input");

	$_POST = json_decode($rest_json, true);
	//echo $rest_json;
	if( empty($_POST['email']) ) die();
	if ($_POST){

		// set response code - 200 OK

		http_response_code(200);

		$clientName = addslashes(trim($_POST['nom']));
		$clientLastName = addslashes(trim($_POST['prenom']));
		$clientEmail = addslashes(trim($_POST['email']));
		$clientPhone = addslashes(trim($_POST['telephone'])); 
		$clientCity = addslashes(trim($_POST['ville']));    
		$clientSubject = addslashes(trim($_POST['objet']));  
		$message = addslashes(trim($_POST['message']));
		
		// Exemples liste, radio et checkbox
		$liste1 = addslashes(trim($_POST['liste1']));
		$radio1 = addslashes(trim($_POST['radio1']));
		if (isset($_POST['checkbox1'])) {
			$checkbox1 = addslashes(trim($_POST['checkbox1']));
		} else {
			$checkbox1 = "";
		}
		if (isset($_POST['checkbox2'])) {
			$checkbox2 = addslashes(trim($_POST['checkbox2']));
		} else {
			$checkbox2 = "";
		}
	
		$response = array();
		$response['nameMessage'] = '';
		$response['prenomMessage'] = '';
		$response['emailMessage'] = '';
		$response['phoneMessage'] = '';
		$response['messageMessage'] = '';
		$response['objetMessage'] = '';
		$response['adresseMessage'] = '';
		$response['sent'] = '';
	
		if($clientName == '') {
			$response['nameMessage'] = "Entrez un nom !";
		}
		if($clientLastName == '') {
			$response['prenomMessage'] = "Entrez un prénom !";
		}
		if(!isEmail($clientEmail)) {
			$response['emailMessage'] = "Email non valide !";
		}
		if(!is_numeric($clientPhone) or strlen($clientPhone) != 10) {
			$response['phoneMessage'] = "Numéro non valide !";
		}
		if($message == '') {
			$response['messageMessage'] = "Entrez un message !";
		}
		if($clientSubject == '') {
			$response['objetMessage'] = "Entrez un objet !";
		}
		if($clientCity == '') {
			$response['adresseMessage'] = "Entrez une adresse !";
		}
		if( !$clientSubject== '' && $clientLastName != '' && $clientName != '' && isEmail($clientEmail) && is_numeric($clientPhone) && strlen($clientPhone) == 10 && $message != '') {
	
			$subject="Nouveau contact - " . $clientSubject;

			$to="technique@linkweb.fr";

			$from="contact@linkweb.fr";

			//data

			$msg ='<h1>Demande de contact</h1>';
			$msg .= 'Email du client : ' . $_POST['email'] .'<br>';
			$msg .= 'Nom prénom : ' . $clientName . ' ' . $clientLastName . '<br>';
			$msg .= 'Tel: ' . $clientPhone . '<br>';
			$msg .= 'Adresse : ' . $clientCity . '<br><br>';
			$msg .= 'Message : ' . $message . '<br> <br>';

			$msg .= '<i>Message envoyé depuis le site linkweb.fr<i>';

			//Headers

			$headers="MIME-Version: 1.0\r\n";

			$headers.="Content-type: text/html; charset=UTF-8\r\n";

			$headers.="From: ".$from."";

			mail($to,$subject,$msg,$headers);

			//echo json_encode( $_POST );
			$response['sent'] = true;
			echo json_encode($response);

		} else {

			// tell the user about error
			$response['sent'] = false;
			echo json_encode($response);

		}
	}
?>