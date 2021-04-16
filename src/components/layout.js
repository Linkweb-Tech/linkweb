import React, { Component } from "react";
import PropTypes from "prop-types";
import CookieConsent from 'react-cookie-consent';
import Header from "./header";
import Footer from "./footer";
import "../scss/global.scss";




class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

  }

  render() {

    const { children, location } = this.props
    return (
      <div className="beforeOverlay flex flex-col font-sans min-h-screen text-gray-900 bg-white relative md:pb-128" >

        <Header path={location.pathname} />
        <main className="flex flex-col flex-1 md:justify-center w-full z-30 bg-white min-h-screen">
          {/*BANDEAU CONFINEMENT*/}
           {/*<div className="covid mt-24 md:mt-32 relative lg:absolute w-full p-4  bg-bleu flex justify-center text-white century">
            <div className="flex flex-col md:flex-row"  style={{maxWidth:'1800px'}}>
              <svg className="flex p-4 my-1 md:p-0 mx-auto md:mx-10" width="80px" viewBox="0 0 100 125" fill="#FFFFFF"><path d="M51.86243,24.8783a6.62152,6.62152,0,0,1,6.32415-4.87818c2.90357.01593,4.77991,2.22571,4.1908,4.93579a6.62152,6.62152,0,0,1-6.32416,4.87818C53.14966,29.79816,51.27325,27.58838,51.86243,24.8783Zm9.92395,44.301c-5.19379,2.99017-9.78266,3.48114-8.67011-1.63672L58.963,40.64673c1.16785-5.37244-5.13476-6.73157-10.784-3.86163a35.76129,35.76129,0,0,0-10.61835,8.55908.52188.52188,0,0,0,.653.79236c5.19379-2.99012,9.78266-3.48108,8.67011,1.63678L41.03705,74.66919c-1.16785,5.37244,5.13476,6.73157,10.784,3.86163a35.76223,35.76223,0,0,0,10.61835-8.55908A.5219.5219,0,0,0,61.78638,69.17932ZM95,50A45,45,0,1,1,50,5,45,45,0,0,1,95,50Zm-5,0A40,40,0,1,0,50,90,40.04532,40.04532,0,0,0,90,50Z"/></svg>
              <p className="mx-auto block text-sm md:text-md xl:text-lg">
                <span className="font-extrabold">INFORMATION CORONAVIRUS :</span> En cette période de confinement, l’agence Linkweb reste ouverte. Le travail de référencement effectué sur les sites internet de nos clients se poursuit. Pour toute demande de modification, d’information ou de devis, nous restons joignables par <a href="tel:0533950030" className="underline font-bold hover:no-underline">téléphone</a> ou par <a href="mailto:contact@linkweb.fr" className="underline font-bold hover:no-underline">mail</a>.
              </p>
            </div>
          </div>*/}
          {/*FIN BANDEAU CONFINEMENT*/}
          {children}
        </main>
        <Footer />

      </div>
    )
  }

}

export default Layout;



