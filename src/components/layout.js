import React, { useState, useEffect } from "react";
import loadable from '@loadable/component';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import ReactNotification from "react-notifications-component";
//import Header from "./header";
const Header = loadable(() => import('./header'));
//import Footer from "./footer";
const Footer = loadable(() => import('./footer'));
import "../scss/global.scss";



const Layout = (props) => {
  const [ads, setAds] = useState();

  const location = useLocation();

  //const defaultComeFrom = (location.search && getSelectedTheme(location.search)) || 'referal';

  

  useEffect(() => {
      const ads = queryString.parse(location.search);
      console.log(ads)
      if(Object.prototype.hasOwnProperty.call(ads, 'lw')){
        localStorage.setItem('lw', true);
      }
  }, [])
  //const { children, location } = props
  return (
  <div className="beforeOverlay flex flex-col font-sans min-h-screen text-gray-900 bg-white relative md:pb-128" >
    <Header path={props.location.pathname} />
    <main className="flex flex-col flex-1 md:justify-center w-full z-30 bg-white min-h-screen">
      {/*BANDEAU CONFINEMENT*/}
      <div className="covid mt-24 md:mt-32 relative lg:absolute w-full p-5 bg-black flex justify-center text-white century">
      <div className="flex flex-col md:flex-row items-center mt-2 justify-center" style={{maxWidth:'1800px'}}>
      <svg className="flex p-5 my-1 md:p-0 mx-auto md:mx-6 mt-4" width="30px" fill="#ffffff" viewBox="0 0 100 125" ><path d="M24.283,94.366c-0.425,0-0.851-0.135-1.21-0.408c-0.788-0.6-1.019-1.684-0.543-2.552l20.299-37.091H19.86  c-0.708,0-1.364-0.375-1.723-0.984c-0.359-0.61-0.37-1.365-0.026-1.985l24.76-44.682c0.353-0.636,1.022-1.03,1.75-1.03h26.398  c0.706,0,1.359,0.372,1.72,0.979c0.36,0.607,0.374,1.359,0.036,1.979l-15.011,27.54H80.14c0.814,0,1.547,0.494,1.854,1.248  c0.306,0.755,0.124,1.619-0.46,2.187L25.676,93.801C25.291,94.176,24.788,94.366,24.283,94.366z"/></svg>          <p className="mx-auto py-4 block text-sm md:text-md xl:text-lg">
            <span className="text-center">Retrouvez nos offres exceptionnelles du Black Friday 2023 : <a href="/black-friday/" className="font-bold text-bleu hover:text-white">découvrir les offres</a>.</span>
          </p>
      </div>
      </div>
      {/*FIN BANDEAU CONFINEMENT*/}
      {props.children}
    </main>
    <Footer />
    <ReactNotification />
  </div>
)


}

export default Layout;