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
            sitekey="6LdgIb0UAAAAAMv6X2v-DPG2LDQ_yxKZq0IO2NvQ"
            action='contactpage'
            verifyCallback={this.verifyCallback}
        />

        <h2>Google ReCaptcha with React </h2>

        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component. <br/>
          2. Check <strong>console</strong> to see the token.
        </code>
      </div>
    );
  };
};

export default ReCaptchaBlock;