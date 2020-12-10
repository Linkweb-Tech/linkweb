import React from "react";
import {Link} from 'gatsby';
import ButtonMenu from "../components/buttonmenu.js";
import ButtonMenuBack from "../components/buttonmenuback.js";
import "../scss/global.scss";
class SousMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'white',
            active: 'w'
        }
    }

    render() {
        return (
                    <section className="w-full flex flex-row justify-end h-8 font-medium">
                        <section className="bg-white w-1/5 flex-start lg:w-1/12 flex text-center italic text-xs sm:text-sm md:text-md text-darkgrey">
                        <div className="w-full md:w-1/2 p-1 mt-0"><ButtonMenuBack url="/creation-site-internet-toulouse/" position="center"/></div>
                        <div className="w-full md:w-1/2 pt-2 text-sm text-left mt-0" style={{marginLeft:'-14px'}}><Link className="hover:text-bleu" to="/creation-site-internet-toulouse/">Retour</Link></div>
                        </section>
                        <section className="w-4/5 lg:w-3/5 xl:w-2/5 absolute md:relative z-40 md:z-50 opacity-0 md:opacity-100 flex bg-darkgrey text-xs sm:text-sm md:text-md" style={{borderBottomLeftRadius:'27px', minHeight:'48px'}}>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creation-site-internet-vitrine/" text="Site vitrine" position="center" /></div>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creer-une-boutique-en-ligne/" text="E-commerce" position="center" /></div>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creation-site-internet-catalogue/" text="Site catalogue" position="center" /></div>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creation-site-internet-sur-mesure/" text="Site sur-mesure" position="center" /></div>
                        </section>
                        <section className="sousmenupages w-4/5 lg:w-2/5 flex z-50 md:z-40 relative md:absolute visible md:hidden bg-darkgrey text-xs sm:text-sm md:text-md" style={{borderBottomLeftRadius:'27px', minHeight:'48px'}}>
                            <div className="zoom w-full lg:w-1/3 p-1"><div className="button-a"><a href="/creation-site-internet-vitrine/" title="Site internet vitrine" ><svg width="30px" className={`mx-auto block active-${this.props.active}`} viewBox="0 0 100 125"><path class="cls-1" d="M62.5,40.47V53h.66a2.34,2.34,0,0,1,2.34,2.34V83H95a.51.51,0,0,0,.5-.5v-42A.51.51,0,0,0,95,40H63A.51.51,0,0,0,62.5,40.47ZM77.5,78h3v3h-3Z"/><path class="cls-1" d="M62.5,56h-15V86h15V56Zm-6,28h-3V81h3Z"/><polygon class="cls-1" points="44.5 75.97 35.5 75.97 35.5 80.97 31.5 80.97 31.5 83.97 44.5 83.97 44.5 75.97"/><path class="cls-1" d="M26,73H44.5V55.31A2.34,2.34,0,0,1,46.84,53H59.5V40.47A3.5,3.5,0,0,1,63,37H84.53V18.07A4.11,4.11,0,0,0,80.42,14H8.61a4.11,4.11,0,0,0-4.11,4.1V69a4.11,4.11,0,0,0,4.1,4.1h0L26,73Z"/></svg></a></div></div>
                            <div className="zoom w-full lg:w-1/3 p-1"><div className="button-b"><a href="/creer-une-boutique-en-ligne/" title="Site internet e-commerce"><svg className={`mx-auto block active-${this.props.active}`} width="30px" viewBox="0 0 100 125"><g><path d="M73.9,57.4c-4.8,0-9-3.4-10-8.1l-5.1-25.1H25.6l-2.1-8.5c-0.5-2-2.3-3.3-4.3-3.3H6.9c-2.4,0-4.4,2-4.4,4.4     c0,2.4,2,4.4,4.4,4.4h8.8l10.9,43.6c0.5,2,2.3,3.3,4.3,3.3H76c2.1,0,3.8-1.4,4.3-3.4l1.2-5l-2.6-3.6     C77.4,56.9,75.6,57.4,73.9,57.4z"/><circle cx="37" cy="79.8" r="7.8"/><circle cx="67.8" cy="79.8" r="7.8"/><path d="M97.1,50.2l-8.6-11.9l5.3-2.2c2.2-0.9,2.4-3.9,0.3-5L69.7,17.2c-2.1-1.2-4.6,0.6-4.1,3l5.6,27.6c0.5,2.3,3.4,3.1,4.9,1.3     l3.7-4.4l8.6,11.9c0.7,0.9,2,1.1,2.9,0.5l5.4-3.9C97.6,52.5,97.8,51.1,97.1,50.2z"/></g></svg></a></div></div>
                            <div className="zoom w-full lg:w-1/3 p-1"><div className="button-c"><a href="/creation-site-internet-catalogue/" title="Site internet catalogue"><svg width="30px" className={`mx-auto block active-${this.props.active}`} viewBox="0 0 100 125"><path d="M7.59,25.95a93.35,93.35,0,0,1,38.43,9,2.39,2.39,0,0,1,1.37,2.17V90.28a1.77,1.77,0,0,1-2.49,1.61A93,93,0,0,0,7.59,83.41l-1.34,0A2.23,2.23,0,0,1,4,81.19v-53A2.24,2.24,0,0,1,6.14,26Zm2.24-9-.61,3.34a1,1,0,0,0,1,1.24,97.86,97.86,0,0,1,34,7.71.28.28,0,0,0,.26-.49C28.52,18.91,14.72,16.54,11,16.06A1,1,0,0,0,9.83,16.91Zm36.9,7.93a.41.41,0,0,0,.49-.66C34.76,13.51,23.4,9.13,20.13,8a1,1,0,0,0-1.31.61l-1.14,2.85a1,1,0,0,0,.73,1.41A98.32,98.32,0,0,1,46.73,24.84ZM96,81.19v-53A2.24,2.24,0,0,0,93.86,26l-1.44,0a93.35,93.35,0,0,0-38.43,9,2.39,2.39,0,0,0-1.37,2.17V90.28a1.77,1.77,0,0,0,2.49,1.61,93,93,0,0,1,37.31-8.48l1.34,0A2.23,2.23,0,0,0,96,81.19Zm-40.21-52a97.86,97.86,0,0,1,34-7.71,1,1,0,0,0,1-1.24l-.61-3.34A1,1,0,0,0,89,16.06c-3.72.49-17.53,2.86-33.43,12.66A.28.28,0,0,0,55.83,29.2ZM81.18,8.62A1,1,0,0,0,79.87,8c-3.28,1.12-14.64,5.5-27.09,16.17a.41.41,0,0,0,.49.66,98.32,98.32,0,0,1,28.33-12,1,1,0,0,0,.73-1.41Z"/></svg></a></div></div>
                            <div className="zoom w-full lg:w-1/3 p-1"><div className="button-d"><a href="/creation-site-internet-sur-mesure/" title="Site internet sur-mesure"><svg className={`mx-auto block active-${this.props.active}`} width="30px" viewBox="0 0 100 125"><g stroke="none" stroke-width="1" ><path d="M27.9618401,35.6503671 C26.8920472,36.7321051 24.8898246,35.9207626 23.7935025,35.103544 C21.5232569,34.4279739 19.8087542,36.3676851 20.0901751,38.5187286 C20.3339493,40.5526575 21.8014042,40.4247657 19.9970516,42.2492657 L15.59511,46.7003576 C14.2450272,48.0655027 12.7906485,47.3297568 11.4421106,45.9720418 L6.5608964,41.0574937 C5.21355391,39.7009557 3.99391016,38.7307414 5.34205265,37.3656607 L10.4704618,32.1728459 C11.9058518,30.7194234 12.7296819,32.2877168 14.2468756,32.1539214 C15.9537828,32.1414982 17.6419495,30.0039537 17.1528469,28.3692501 C16.999042,28.1394071 16.8715455,27.9085985 16.777898,27.6766681 L16.7693461,27.6557299 C16.4492947,26.8454724 17.0280631,25.5328799 17.8032212,24.7479654 C17.8032212,24.7479654 24.4070118,18.2256566 24.7355507,17.8929889 C33.3085151,9.21245487 42.5205708,12.1380403 45.7907966,13.2741976 C45.7902909,14.5917649 46.0354996,15.0022914 42.5196329,14.6079123 C39.0054857,14.2137354 28.3246141,19.8914045 33.4657775,25.0520349 C33.7888267,25.3762979 36.3568245,27.1369808 32.7262431,30.8080778 L27.9618401,35.6503671 Z M54.6841435,64.836694 C57.1402864,62.161099 59.5055405,59.3979439 61.972525,56.7446022 C68.4736932,63.0669352 75.8426739,70.1846012 84.5797882,78.823369 C86.2528006,80.4775305 83.4493965,84.1975295 82.2513071,85.3958947 L82.2227273,85.4244745 L82.1932832,85.4539463 C80.9945869,86.6529276 77.7829368,89.4473016 75.8750422,87.5331541 L54.6841435,64.836694 Z M35.0125073,30.7940454 C35.0125073,30.7940454 39.8154765,35.2764205 49.0617121,44.1616385 C46.6533768,46.3881408 44.0371576,48.7112056 41.6694391,50.7945882 L28.8056798,36.9854611 L35.0125073,30.7940454 Z M93.9649963,26.8195869 C95.6506525,35.9774808 87.8056454,43.3002537 87.8056454,43.3002537 C83.1319658,47.9627055 78.208259,48.4869076 72.4937157,46.3285076 C69.2182116,45.0842105 66.0961631,48.5632399 66.0961631,48.5632399 C66.0961631,48.5632399 36.2971729,81.4394687 33.9248474,83.8061021 C31.5514461,86.1738022 29.8809901,86.4577519 27.8820319,86.4504506 C25.8636067,86.4258709 23.8079579,85.3492824 22.3118865,83.8568064 L22.2751318,83.8201437 L22.2394622,83.7845569 C20.7444759,82.2931476 19.6458365,80.2230342 19.6395835,78.2277818 C19.6322546,76.2336237 20.1898549,74.2237044 22.2546165,72.1638993 C24.3193965,70.1040849 57.5823077,40.0698355 57.5823077,40.0698355 C57.5823077,40.0698355 60.9052241,36.718229 59.7859407,33.7585372 C57.586409,27.9145573 59.5197844,22.8115738 64.175174,18.1673568 C69.2092092,13.1454138 73.5909206,12.0204567 79.3942378,12.1765513 L80.8535454,13.6323554 L72.7384923,21.871475 C71.6340505,22.9732593 70.6586408,27.7505177 72.8226224,29.9092947 L75.7626909,32.8423101 C78.460484,35.5336295 83.4973605,34.276192 84.6017839,33.1744077 L92.560531,25.311221 L94.0187627,26.7659492 L93.9649963,26.8195869 Z"/></g></svg></a></div></div>
                        </section>
                    </section>

);
}
}

export default SousMenu;