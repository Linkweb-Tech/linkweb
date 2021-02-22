import React, { Component } from 'react';

import RoundButtonAccueil from "../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../components/roundButtonAccueilMail";

import Test from "../images/motiontest.svg";
import googlePartner from "../images/PartnerBadge-RGB.png";

// const Orbs = posed.div({
//     open: { 
//         staggerChildren: 150, 
//     },
//     closed: {}
// });
// const Blue = posed.span({
//     open: { 
//         y: 0, 
//         opacity: 1,
//         transition: {
//             duration: 300,
//             ease: 'linear'
//         }
//     },
//     closed: { 
//         y: 700, 
//         opacity: 1,
//         transition: {
//             duration: 300,
//             ease: 'linear'
//         }
//     },
//     initialPose: 'closed'
// });

// const Top = posed.span({
//     open: { 
//         y: 0, 
//         opacity: 1, 
//         transition: {
//             duration: 400,
//             ease: 'linear'
//           }

//     },
//     closed: { 
//         y: -600, 
//         opacity: 1,
//         transition: {
//             duration: 400,
//             ease: 'linear'
//         }
//     },
//     initialPose: 'closed'
// });

// const BigTitle = posed.h1({
//     open: { 
//         x: 0, 
//         delay: 1300,
//         opacity: 1, 
//         transition: {
//             duration: 400,
//             ease: 'linear'
//           }

//     },
//     closed: { 
//         x: -1100, 
//         opacity: 1,
//         transition: {
//             duration: 400,
//             ease: 'linear'
//         }
//     },
//     initialPose: 'closed'
// });
// const Note = posed.h3({
//     open: { 
//         y: 0, 
//         delay: 1300,
//         opacity: 1, 
//         transition: {
//             duration: 400,
//             ease: 'linear'
//           }

//     },
//     closed: { 
//         y: -700, 
//         opacity: 1,
//         transition: {
//             duration: 400,
//             ease: 'linear'
//         }
//     },
//     initialPose: 'closed'
// });
// const SmallTitle = posed.h2({
//     open: { 
//         x: 0, 
//         opacity: 1, 
//         delay: 1500,
//         transition: {
//             duration: 800,
//             ease: 'linear'
//           }

//     },
//     closed: { 
//         x: 900, 
//         opacity: 1,
//         transition: {
//             duration: 800,
//             ease: 'linear'
//         }
//     },
//     initialPose: 'closed'
// });





class Hero1 extends Component {

    constructor(props) {
        super(props);
        //     this.state = {
        //         isOpen: false
        //     }
        // }
        // componentDidMount() {
        //     setTimeout(() => {
        //         this.setState({isOpen: true});
        //     }, 1000);
        // }
        // componentWillUpdate() {
        //     setTimeout(() => {
        //         this.setState({isOpen: true});
        //     }, 1000);
    }


    render() {
        return (
            <section className="hero flex items-center justify-center flex-col">
                <div className="max-w-6xl mt-32 mx-auto lg:ml-56 xl:mx-56 w-full flex-col items-end">
                    <section className="flex justify-center lg:justify-start" style={{ marginBottom: "-80px", marginTop: "80px", paddingLeft: "60px" }}>
                        <div className="mr-3 mt-3">
                            <img src={googlePartner} alt="Référencement Toulouse" style={{ width: '200px' }} />
                        </div>
                        <div className=" flex flex-col items-center " /*data-aos="fade-in" data-aos-delay="2200"*/>
                            <h3 className=" text-3xl text-center font-bold text-white century">4,5/5</h3>
                            <p className=" text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                            <div className=" -mt-8">
                                <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                                    <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                    <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                    <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                    <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                    <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z" />
                                </svg>
                            </div>
                        </div>
                    </section>

                    <div className="orbs flex flex-1 justify-center lg:justify-start" /*pose={this.state.isOpen ? 'open' : 'closed'}*/>
                        <span className="top text-white century" >l</span>
                        <span className="top text-white century" >i</span>
                        <span className="top text-white century" >n</span>
                        <span className="top text-white century" >k</span>
                        <span className="blue text-bleu" >/</span>
                        <span className="top text-white century" >w</span>
                        <span className="top text-white century" >e</span>
                        <span className="top text-white century" >b</span>
                    </div>
                    <h1 className="flex flex-1 bigtitle text-white justify-center lg:justify-start century text-center p-2 uppercase -mt-12" /*pose={this.state.isOpen ? 'open' : 'closed'}*/>Agence web Toulouse <span className="text-bleu">/</span> Agen</h1>
                    {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                    <div className="w-full lg:w-2/3 lg:mx-0 flex flex-col md:flex-row justify-center lg:justify-start" /*data-aos="fade-in"*/>
                        <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30" />
                        <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                    </div>
                </div>
                <div className="w-full flex items-end justify-center mx-auto block pt-32">
                    <img src={Test} alt="Scroll" width="60px" />
                </div>
            </section>
        )
    }
}

export default Hero1;