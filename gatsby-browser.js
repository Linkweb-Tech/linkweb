
// require("./static/data/tarteaucitron/tarteaucitron.services.js");
//import tarteaucitron from "./static/data/tarteaucitron/tarteaucitron.js";
import "./src/css/style.css";
import AOS from 'aos';



import 'aos/dist/aos.css';
require('typeface-lato');

export const onClientEntry = () => {
window.onload = () => { 
    AOS.init(
       {duration: 2000 }
    );
      
   // let scriptTarte = document.createElement('script');
   // scriptTarte.type = "text/javascript";
   // let tartContent = document.createTextNode(
      
   //    tarteaucitron.user.gajsUa = 'UA-43540005-1',
   //    tarteaucitron.user.gajsMore = function () { /* add here your optionnal _ga.push() */ },
   //    (tarteaucitron.job = tarteaucitron.job || []).push('gajs'),
   //    tarteaucitron.user.googletagmanagerId = 'GTM-WJMB7VQ',
   //    (tarteaucitron.job = tarteaucitron.job || []).push('googletagmanager')
   // );
   // console.log(scriptTarte);
   // scriptTarte.appendChild(tartContent);
   
   // document.body.appendChild(scriptTarte);
      

    //ici


 }
}