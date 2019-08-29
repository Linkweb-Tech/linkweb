import "./src/css/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
require('typeface-lato');

export const onClientEntry = () => {
window.onload = () => { 
    AOS.init(
       {duration: 2000 }
    ); 
 }
}