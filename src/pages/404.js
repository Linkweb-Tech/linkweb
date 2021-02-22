import React, { Component } from 'react';
import { Link, graphql } from "gatsby";;
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";

import '../scss/tiles.scss';


import Bg from "../images/background-404.jpg";
import fbIcon from "../images/facebook-logo.svg";
import twitterIcon from "../images/twitter-logo.svg";
import instaIcon from "../images/instagram-logo.svg";


class Error404 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Erreur 404 - Linkweb"
                    description="La page que vous recherchez n'existe pas ou plus."
                    url="https://linkweb.fr/404"
                />
                {/* <PageTransition
                    defaultStyle={{
                        transition: 'left 200ms cubic-bezier(0.47, 0, 0.75, 0.72)',
                        transitionDuration: '0.5s',
                        transitionDelay: '0.1s',
                        //left: '100%',
                        position: 'relative',
                        width: '100%',
                        zIndex: 20,
                        minHeight: '100vh',
                    }}
                    transitionStyles={{
                        entering: { left: '-100%' },
                        entered: { left: '0' },
                        exiting: { left: '-100%' },

                    }}
                    transitionTime={200}
                > */}
                <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-white flex flex-col justify-center items-center mt-24" style={{ background: '#00000094 url(' + Bg + ')', backgroundBlendMode: 'multiply', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h1 data-aos="fade-down" className="text-6xl text-white text-white font-black">ERREUR 404</h1>
                    <h2 data-aos="fade-down" data-aos-delay="500" className="mt-10 century text-4xl sm:text-4xl text-center text-white">
                        DÉSOLÉ...
                        </h2>
                    <h3 className=" text-center text-lg font-normal sm:text-2xl text-white mt-3 text-center">Il semble que la page à laquelle vous souhaitez accéder se soit perdue dans un trou noir.</h3>
                    <RoundButton data-aos="fade-up" color="darkgrey" url="/" text="Revenir à l'accueil du site" />
                    <div data-aos="fade-up" className="flex mx-auto block my-24">
                        <div className="w-1/3">
                            <a href="https://www.facebook.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex no-underline text-white">
                                <img
                                    src={fbIcon}
                                    alt="Réseaux sociaux"
                                    className="w-10 fill-current mx-auto block"
                                />
                            </a>
                        </div>
                        <div className="w-1/3 mx-6">
                            <a href="https://twitter.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex no-underline text-white">
                                <img
                                    src={twitterIcon}
                                    alt="Réseaux sociaux"
                                    className="w-10 fill-current mx-auto block"
                                />
                            </a>
                        </div>
                        <div className="w-1/3">
                            <a href="https://www.instagram.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex no-underline text-white">
                                <img
                                    src={instaIcon}
                                    alt="Réseaux sociaux"
                                    className="w-10 fill-current mx-auto block"
                                />
                            </a>
                        </div>
                    </div>
                </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};

export default Error404;



