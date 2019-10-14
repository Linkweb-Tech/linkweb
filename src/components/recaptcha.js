import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-v3'

class ReCaptchaBlock extends Component {

  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }

  render() {
    return (
      <div>

        <ReCaptcha
            sitekey="6LfT84MUAAAAADxf0gSSMIhpMWh2CIAKHdobtTtq"
            action='contactpage'
            verifyCallback={this.verifyCallback}
        />
      </div>
    );
  };
};

export default ReCaptchaBlock;