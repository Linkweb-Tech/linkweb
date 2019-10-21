import React from "react";
import PropTypes from "prop-types";
import CookieConsent from 'react-cookie-consent';
import Header from "./header";
import Footer from "./footer";
import PageProgress from 'react-page-progress';
import Bar from './progressBar';
import "../scss/global.scss";



class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props); 
    
  }

  componentDidMount() {
      
  };

  render() {

    const { children, location } = this.props
    return(
      <div className="beforeOverlay flex flex-col font-sans min-h-screen text-gray-900 bg-white relative md:pb-128" >
        <Bar height={5} color={'black'} />
        <Header path={location.pathname} />
        <main className="flex flex-col flex-1 md:justify-center w-full z-20 bg-white min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent
            location="bottom"
            enableDeclineButton
            flipButtons
            declineButtonText="Non pas d'accord"
            buttonText="J'accepte"
            cookieName="Mercury"
            style={{ background: "#000000" }}
            buttonStyle={{ color: "#37c5ee", fontSize: "16px" }}
            expires={150}
        >
            Ce site utilise les cookie afin d'ameliorer l'expérience utilisateur, c'est bon pour vous ?{" "}
        </CookieConsent>
      </div>
    )
  }

}

export default Layout;



