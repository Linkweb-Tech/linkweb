import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import fbIcon from "../images/facebook-logo.svg";
import twitterIcon from "../images/twitter-logo.svg";
import instaIcon from "../images/instagram-logo.svg";
import linkwebLogo from "../images/linkweb-black.png";
import "../scss/header.scss";


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      home: false, 
      isExpanded: false,
      toggleExpansion: () => {}
    }
    
  }
  componentDidMount() {
    //console.log(this.state)
    const nav = document.querySelector('nav');
    const navTop = nav.offsetTop;
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > ( navTop + 500 )) {
        nav.classList.add('fixed-nav');
      } else {
        nav.classList.remove('fixed-nav');
      }
    });
    if(this.props.path == '/' ) {
      this.setState({ home: true });
      
    } 
  }

  handleClick() {
    var thisComponent = this;
    if(this.state.isExpanded) {
      thisComponent.setState({isExpanded: false});
    }
  }

  render() {
    
    return (
      <div id={this.state.isExpanded ? "navContainer" : ""} onClick={() => this.handleClick()}>
        <nav id="navBar" className={`mainNav w-full top-0 z-40 ${ (this.state.home == true ) ? 'home' : '' }`}>
          <button
            className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white burger"
            onClick={() => (this.state.isExpanded) ? this.setState({isExpanded: false}) : this.setState({isExpanded: true}) }
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div className='
            
            topbar max-w-xl bg-bleu flex justify-around p-2 rounded-br-large'>
            <Link  to="/" className="flex items-center no-underline text-white">
              <span className="text-white century">Agence Web</span>
            </Link>
            <Link to="/actualite-digitale/" className="flex items-center no-underline text-white">
              <span className="text-white century">Le Blog</span>
            </Link>
            <a href="https://www.facebook.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex items-center no-underline text-white">
              <img 
                src={ fbIcon }
                alt="Réseaux sociaux"
                className="w-6 fill-current"
              />
            </a>
            <a href="https://twitter.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex items-center no-underline text-white">
              <img 
                src={ twitterIcon }
                alt="Réseaux sociaux"
                className="w-6 fill-current"
              />
            </a>
            <a href="https://www.instagram.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex items-center no-underline text-white">
              <img 
                src={ instaIcon }
                alt="Réseaux sociaux"
                className="w-6 fill-current"
              />
            </a>
            <a href="/contact-agence-web-toulouse/"  className="flex items-center no-underline text-white block md:hidden svg-white">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="23" width="24" viewBox="0 0 511.626 511.626">
                <g>
                  <g>
                    <path d="M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099    c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277    c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569    c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852    c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116    c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679    c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974    C26.169,159.743,37.307,170.736,49.106,178.729z"/>
                    <path d="M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699    c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287    c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699    c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265    c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265    V184.437C503.441,193.569,493.927,201.854,483.072,209.275z"/>
                  </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-between mx-auto w-auto md:w-full">
            <Link to="/" className="flex items-center no-underline w-56 pl-5">
              <img 
                src={linkwebLogo} 
                alt="Linkweb"
                className=""
              />
            </Link>
    
            
    
            <div
              className={`${
                this.state.isExpanded ? `expand bg-white ` : `unexpand`
                } md:flex md:items-center md:bg-transparent w-full md:w-auto overflow-hidden xl:m-0 md:mx-auto`}
            >
              <div className="text-xs pr-0 menu flex flex-col md:flex-row md:pr-5">
                <nav itemProp="WebPageElement" itemScope="itemscope" itemType="http://schema.org/SiteNavigationElement">
                <Link
                  itemProp="url"
                  title="Accueil"
                  to="/"
                  activeClassName="active"
                  className="block lg:text-lg md:text-sm hover:text-bleu md:inline-block mt-4 md:mt-0 no-underline text-black md:text-white century py-6 px-4 md:px-2 lg:px-6"
                >
                  Accueil
                </Link>
    
                <Link
                  itemProp="url"
                  title="Création de site internet"
                  to="/creation-site-internet-toulouse/"
                  activeClassName="active"
                  className="block  lg:text-lg md:text-sm hover:text-bleu md:inline-block mt-4 md:mt-0 no-underline text-black md:text-white century py-6 px-4 md:px-2 lg:px-6"
                >
                  Création Site Internet
                </Link>
    
                <Link
                  itemProp="url"
                  title="Référencement"
                  to="/referencement-toulouse/"
                  activeClassName="active"
                  className="block lg:text-lg md:text-sm hover:text-bleu md:inline-block mt-4 md:mt-0 no-underline text-black md:text-white century py-6 px-4 md:px-2 lg:px-6"
                >
                  Référencement
                </Link>
                <Link
                  itemProp="url"
                  title="Agence Web"
                  to="/agence-web-toulouse/"
                  activeClassName="active"
                  className="block lg:text-lg md:text-sm hover:text-bleu md:inline-block mt-4 md:mt-0  no-underline text-black md:text-white century py-6 px-4 md:px-2 lg:px-6"
                >
                  Agence Web
                </Link>
                <Link
                  itemProp="url"
                  title="Nos Réalisations"
                  to="/agence-de-communication-agen-47-toulouse-31/"
                  activeClassName="active"
                  className="block lg:text-lg md:text-sm hover:text-bleu md:inline-block mt-4 md:mt-0  no-underline text-black md:text-white century py-6 px-4 md:px-2 lg:px-6"
                >
                  Nos Réalisations
                </Link>
                <Link
                  itemProp="url"
                  title="Demander un devis"
                  to="/contact-agence-web-toulouse/"
                  activeClassName="active"
                  className="devis block lg:text-lg md:text-sm last md:inline-block mt-4 md:mt-0 rounded-lg no-underline text-white century bg-bleu text-white py-6 px-4 md:px-2 lg:px-6"
                >
                  Demander un devis
                </Link>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;





// function Header({ siteTitle }) {

//   
//   const nav = document.querySelector('nav');
//   const navTop = nav.offsetTop;

//   function handleScroll() {
//     if (window.scrollY > navTop) {
//       nav.classList.add('fixed-nav');
//       document.body.style.paddingTop = nav.offsetHeight+'px';
//     } else {
//       nav.classList.remove('fixed-nav');
//       document.body.style.paddingTop = 0;
//     }
//   }

//   window.addEventListener('scroll', handleScroll);
//   return (
//     <nav className="mainNav w-full">
//       <div className="topbar max-w-xl bg-bleu flex justify-around p-2 rounded-br-large">
//         <Link to="#" className="flex items-center no-underline text-white">
//           <span className="text-white century">Agence Web</span>
//         </Link>
//         <Link to="#" className="flex items-center no-underline text-white">
//           <span className="text-white century">Le Blog</span>
//         </Link>
//         <Link to="#" className="flex items-center no-underline text-white">
//           <img 
//             src={ fbIcon }
//             className="w-6 fill-current"
//           />
//         </Link>
//         <Link to="#" className="flex items-center no-underline text-white">
//           <img 
//             src={ twitterIcon }
//             className="w-6 fill-current"
//           />
//         </Link>
//         <Link to="#" className="flex items-center no-underline text-white">
//           <img 
//             src={ instaIcon }
//             className="w-6 fill-current"
//           />
//         </Link>
//       </div>
//       <div className="flex flex-wrap items-center justify-between mx-auto md:p-3 w-full">
//         <Link to="/" className="flex items-center no-underline w-56 pl-5">
//           <img 
//             src={linkwebLogo} 
//             className=""
//           />
//         </Link>

//         <button
//           className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
//           onClick={() => toggleExpansion(!isExpanded)}
//         >
//           <svg
//             className="fill-current h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         </button>

//         <div
//           className={`${
//             isExpanded ? `block` : `hidden`
//           } md:block md:flex md:items-center w-full md:w-auto`}
//         >
//           <div className="text-md pr-5 menu">
//             <Link
//               to="/"
//               className="block md:inline-block mt-4 md:mt-0  no-underline text-white century py-6 px-4"
//             >
//               Accueil
//             </Link>

//             <Link
//               to="/about"
//               className="block md:inline-block mt-4 md:mt-0  no-underline text-white century py-6 px-4"
//             >
//               Création Site Internet
//             </Link>

//             <Link
//               to="/contact"
//               className="block md:inline-block mt-4 md:mt-0 no-underline text-white century py-6 px-4"
//             >
//               Référencement
//             </Link>
//             <Link
//               to="#"
//               className="block md:inline-block mt-4 md:mt-0  no-underline text-white century py-6 px-4"
//             >
//               Agence Web
//             </Link>
//             <Link
//               to="#"
//               className="block md:inline-block mt-4 md:mt-0  no-underline text-white century py-6 px-4"
//             >
//               Nos Réalisations
//             </Link>
//             <Link
//               to="#"
//               className="block last md:inline-block mt-4 md:mt-0  no-underline text-white century bg-bleu text-white py-6 px-4"
//             >
//               Demander un devis
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Header.propTypes = {
//   siteTitle: PropTypes.string
// };

// Header.defaultProps = {
//   siteTitle: ``
// };

// export default Header;


