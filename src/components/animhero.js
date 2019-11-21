import React from "react";
import posed from "react-pose";

const Orbs = posed.div({
    open: { 
        staggerChildren: 150, 
    },
    closed: {}
});
const Blue = posed.span({
    open: { 
        y: 0, 
        opacity: 1,
        transition: {
            duration: 300,
            ease: 'linear'
        }
    },
    closed: { 
        y: 700, 
        opacity: 1,
        transition: {
            duration: 300,
            ease: 'linear'
        }
    },
    initialPose: 'closed'
});

const Top = posed.span({
    open: { 
        y: 0, 
        opacity: 1, 
        transition: {
            duration: 400,
            ease: 'linear'
          }
        
    },
    closed: { 
        y: -600, 
        opacity: 1,
        transition: {
            duration: 400,
            ease: 'linear'
        }
    },
    initialPose: 'closed'
});

const BigTitle = posed.h1({
    open: { 
        y: 0, 
        delay: 1300,
        opacity: 1, 
        transition: {
            duration: 400,
            ease: 'linear'
          }
        
    },
    closed: { 
        y: -700, 
        opacity: 1,
        transition: {
            duration: 400,
            ease: 'linear'
        }
    },
    initialPose: 'closed'
});
const SmallTitle = posed.h2({
    open: { 
        x: 0, 
        opacity: 1, 
        delay: 1500,
        transition: {
            duration: 800,
            ease: 'linear'
          }
        
    },
    closed: { 
        x: 900, 
        opacity: 1,
        transition: {
            duration: 800,
            ease: 'linear'
        }
    },
    initialPose: 'closed'
});




class Hero extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({isOpen: true});
        }, 1000);
    }
    componentWillUpdate() {
        setTimeout(() => {
            this.setState({isOpen: true});
        }, 1000);
    }
    

    render() {
        return (
        <section className="hero flex items-center justify-end">
            <div className="max-w-6xl w-full mx-auto flex-col items-end">
                <Orbs className="orbs flex flex-1 justify-center md:justify-end" pose={this.state.isOpen ? 'open' : 'closed'}> 
                    <Top className="top text-white century" >l</Top> 
                    <Top className="top text-white century" >i</Top> 
                    <Top className="top text-white century" >n</Top> 
                    <Top className="top text-white century" >k</Top> 
                    <Blue className="blue text-bleu" >/</Blue> 
                    <Top className="top text-white century" >w</Top> 
                    <Top className="top text-white century" >e</Top> 
                    <Top className="top text-white century" >b</Top> 
                </Orbs>
                <BigTitle className="flex flex-1 bigtitle text-white justify-center lg:justify-end century text-center p-2" pose={this.state.isOpen ? 'open' : 'closed'}>Agence web Toulouse et Agen</BigTitle>
                <SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-end century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>
            </div>
        </section>
        )
    }
}

  export default Hero;