<?php

class CaptchaV3 {
    public function get_Captcha($secretKey) {
	    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LdgIb0UAAAAAIohhZnSDkWtwE7vt0wkrKV_OQRf&response={$secretKey}");
        $response = json_decode($response);
        
        return $response;
    }
}