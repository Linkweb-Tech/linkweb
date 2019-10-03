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
    console.log(this.state)
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

  render() {
    
   
    return (

      <nav className={`mainNav w-full top-0 z-40 ${ (this.state.home == true ) ? 'home' : '' }`}>
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
          <Link to="/actualite-digitale" className="flex items-center no-underline text-white">
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
              this.state.isExpanded ? `block bg-white` : `hidden`
              } md:block md:flex md:items-center md:bg-transparent w-full md:w-auto`}
          >
            <div className="text-md pr-0 menu flex flex-col md:flex-row md:pr-5">
              <Link
                to="/"
                activeClassName="active"
                className="block lg:text-lg md:text-sm hover:text-bleu md:inline-block mt-4 md:mt-0  no-underline text-black md:text-white century py-6 px-4 md:px-2 lg:px-6"
              >
                Accueil
              </Link>
  
              <Link
                to="/creation-site-internet-toulouse"
                activeClassName="active"
                className="block  lg:text-lg md:text-sm hover:text-bleu md:inline-block mt-4 md:mt-0  no-underline text-black md:text-white century py-6 px-4 md:px-2 lg:px-6"
              >
                Création Site Internet
              </Link>
  
              <Link
                to="/referencement-toulouse"
                activeClassName="active"
                className="block lg:text-lg md:text-sm hover:text-bleu md:inline-block mt-4 md:mt-0 no-underline text-black md:text-white century py-6 px-4 md:px-2 lg:px-6"
              >
                Référencement
              </Link>
              <Link
                to="/agence-web-toulouse"
                activeClassName="active"
                className="block lg:text-lg md:text-sm hover:text-bleu md:inline-block mt-4 md:mt-0  no-underline text-black md:text-white century py-6 px-4 md:px-2 lg:px-6"
              >
                Agence Web
              </Link>
              <Link
                to="/agence-de-communication-agen-47-toulouse-31"
                activeClassName="active"
                className="block lg:text-lg md:text-sm hover:text-bleu md:inline-block mt-4 md:mt-0  no-underline text-black md:text-white century py-6 px-4 md:px-2 lg:px-6"
              >
                Nos Réalisations
              </Link>
              <Link
                to="/contact-agence-web-toulouse"
                activeClassName="active"
                className="block lg:text-lg md:text-sm last md:inline-block mt-4 md:mt-0  no-underline text-white century bg-bleu text-white py-6 px-4 md:px-2 lg:px-6"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </nav>
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


