import React from "react";
import PropTypes from "prop-types";
import CookieConsent from 'react-cookie-consent';
import Header from "./header";
import Footer from "./footer";
import "../scss/global.scss";




class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

  }

  componentWillMount() {

    // tarteaucitron.init({
    //   "privacyUrl": "", /* Privacy policy url */

    //   "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
    //   "cookieName": "tarteaucitron", /* Cookie name */

    //   "orientation": "bottom", /* Banner position (top - bottom) */
    //   "showAlertSmall": true, /* Show the small banner on bottom right */
    //   "cookieslist": true, /* Show the cookie list */

    //   "adblocker": false, /* Show a Warning if an adblocker is detected */
    //   "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
    //   "highPrivacy": true, /* Disable auto consent */
    //   "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */

    //   "removeCredit": false, /* Remove credit link */
    //   "moreInfoLink": true, /* Show more info link */
    //   "useExternalCss": false, /* If false, the tarteaucitron.css file will be loaded */

    //   //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */

    //   "readmoreLink": "/cookiespolicy" /* Change the default readmore link */
    //   });




  };

  render() {

    const { children, location } = this.props
    return (
      <div className="beforeOverlay flex flex-col font-sans min-h-screen text-gray-900 bg-white relative md:pb-128" >

        <Header path={location.pathname} />
        <main className="flex flex-col flex-1 md:justify-center w-full z-20 bg-white min-h-screen">
          {children}
        </main>
        <Footer />

      </div>
    )
  }

}

export default Layout;



