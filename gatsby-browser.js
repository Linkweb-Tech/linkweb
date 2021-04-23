import "./src/css/style.css";
import AOS from 'aos';
// import "./static/cookie/css/tarteaucitron.css";
import 'aos/dist/aos.css';
require('typeface-lato');

export const onClientEntry = () => {
   window.onload = () => {
      AOS.init(
         { duration: 2000 }
      );
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/6082b1a662662a09efc16b50/1f3v8bsdq';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();

   }
}