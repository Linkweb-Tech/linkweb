import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";
import "../scss/global.scss";
import "../scss/info.scss";
import Bg from "../images/bg-agence-adwords-toulouse.jpg";
import scroll from "../images/motiontest.svg";
import { array } from "prop-types";

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actu: [],
            referencement: [],
            tendances: [],
            agence: [],
        }
    }

    componentDidMount() {
        // this.props.data.allWordpressPost.edges.map(({ node }) => (
        //     if(node.categories[0] === 'Agence') {
        //         agence >> node.path
        //     }
        // ))

        Object.entries(this.props.data.allWordpressPost.edges).forEach(element => {
            switch (element[1].node.categories[0].name) {
                case 'Agence':
                    this.setState(state => {
                        const agence = state.agence.concat(element[1].node)
                        return {
                            agence
                        }
                    })
                    break;
                case 'Référencement':
                    this.setState(state => {
                        const referencement = state.referencement.concat(element[1].node)
                        return {
                            referencement
                        }
                    })
                    break;
                case 'Tendances':
                    this.setState(state => {
                        const tendances = state.tendances.concat(element[1].node)
                        return {
                            tendances
                        }
                    })
                    break;
                case 'Actualités':
                    this.setState(state => {
                        const actu = state.actu.concat(element[1].node)
                        return {
                            actu
                        }
                    })
                    break;

                default:
                    break;
            }
        })
    }

    render() {

        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Adwords Toulouse - Gestion Campagne Adwords - Linkweb"
                    description="Agence Adwords à Toulouse : gestion de votre campagne Google Ads, étude des mots-clés, prévision et budgétisation."
                    keywords={[`Agence Adwords Agen`, `Agence Adwords Toulouse`, `Campagne Adwords Agen`, `Campagne Adwords Toulouse`]}
                    url="https://linkweb.fr/agence-adwords-47-31/"
                    nom="Référencement Ads"
                    slug="agence-adwords-47-31/"
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
                <section className="flex items-center w-full mx-auto pb-0 mt-40 mb-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + Bg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="max-w-6xl mx-auto lg:mx-56 pt-2 lg:w-2/5 w-full flex-col items-end">
                        <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                            <div className="w-full  text-3xl text-center font-bold text-white century">4.6/5</div>
                            <p className="w-full  text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                            <div className="w-full -mt-8">
                                <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                                    <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                    <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                    <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                    <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                    <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full lg:w-full flex justify-center lg:justify-center">
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Agence Adwords Toulouse <span className="text-bleu">/</span> Agen</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Création de campagnes Adwords à Toulouse et Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center pb-24 lg:justify-center mx-auto" style={{ maxWidth: '460px' }}>
                            <RoundButtonPages url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonPagesMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                    <div className="w-full flex items-end justify-center mx-auto block pb-16">
                        <img src={scroll} alt="Scroll" width="60px" />
                    </div>
                </section>


                <section className="max-w-4xl w-full mx-auto px-4 pt-4 pb-4 my-2">
                    <h2 /*data-aos='fade-right'*/ className="text-left text-3xl century">
                        Le blog
                    </h2>


                    <h2 /*data-aos='fade-right'*/ className="mt-3 mb-3 text-left text-xl century">
                        L'agence
                    </h2>
                    {

                        this.state.agence.map((node) => (
                            //console.log(node)
                            <a className="block hover:text-bleu" href={`/blog${node.path}`} >{node.title}</a>
                        ))

                    }
                    <h2 /*data-aos='fade-right'*/ className=" mt-5 mb-3 text-left text-xl century">
                        Actualités
                    </h2>
                    {

                        this.state.actu.map((node) => (
                            //console.log(node)
                            <a className="block hover:text-bleu" href={`/blog${node.path}`} >{node.title}</a>
                        ))

                    }
                    <h2 /*data-aos='fade-right'*/ className="mt-5 mb-3 text-left text-xl century">
                        Tendances
                    </h2>
                    {

                        this.state.tendances.map((node) => (
                            //console.log(node)
                            <a className="block hover:text-bleu" href={`/blog${node.path}`} >{node.title}</a>
                        ))

                    }
                    <h2 /*data-aos='fade-right'*/ className="mt-5 mb-3 text-left text-xl century">
                        Référencement
                    </h2>
                    {

                        this.state.referencement.map((node) => (
                            //console.log(node)
                            <a className="block hover:text-bleu" href={`/blog${node.path}`} >{node.title}</a>
                        ))

                    }
                </section>

                <section className="max-w-4xl w-full mx-auto px-4 pt-4 pb-4 my-2">
                    <h2 /*data-aos='fade-right'*/ className="text-left text-3xl century">
                        Les pages
                    </h2>


                    {

                        this.props.data.allSitePage.edges.map(({ node }) => (
                            console.log(node)
                            //<a className="block hover:text-bleu" href={`/blog${node.path}`} >{node.title}</a>
                        ))

                    }
                </section>





                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
  {
    allWordpressPost(sort: {order: ASC, fields: date}) {
      edges {
        node {
          path
          date(locale: "")
          categories {
            name
          }
          title
        }
      }
    }
    allSitePage(filter: {id: {regex: "/^((?!blog).)*$/"}}) {
        edges {
            node {
                id
            }
        }
    }
  }
`
export default Test;




