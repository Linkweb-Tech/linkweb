import React from 'react';
import {Link} from 'gatsby';
import "../scss/barre.scss";

import logo from '../images/logo-gs.png';
import logosia from '../images/logo-sia.png';
import logoatpt from '../images/logo-atpt.png';
import logosdis from '../images/logo-sdis47-real.png';
//import logofaivre from '../images/faivre-creations.png';//
import logofaivre from '../images/faivre-creation.png';
import logogabrielservices from '../images/logo-gs.png';
import logoledil from '../images/logo-ledil.png';
import logocsd from '../images/logo-csd.png';
import logoaqua from '../images/logo-aquapensezvous.png';
import logocd from '../images/logo_cd31.svg';


class Barre extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        color: 'black'
    }
    }

    render(){
        return (
                <li className="opacity-0 lg:opacity-100 z-50 toggleable">
                                <input type="checkbox" value="selected" id="toggle-one" className="toggle-input hidden"/>
                                    <label for="toggle-one" className="toogle-input block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">
                                        <div className="cursor-pointer fixed h-auto z-40 py-16 font-bold bg-white px-2 font-bold" style={{bottom:'315px', writingMode:'vertical-rl', textOrientation: 'sideways', borderTopLeftRadius:'15px', borderBottomLeftRadius:'15px'}}>
                                            <p style={{transform:'rotate(180deg'}}>Nos réalisations</p>
                                        </div>
                                    </label>
                                <div role="toggle" className={`toggle-input megamenu fixed h-auto z-40 p-2 mega-menu mb-16 sm:mb-0 shadow-xl bg-${this.props.color || 'bleu'}`} style={{/* background:'#ee8a1e94',*/ maxWidth:'100px', borderRadius:'15px'}}> 
                                    <div className="flex flex-col py-6" style={{overflow:'hidden'}}>
                                        <Link to="/realisations/sia/"><img className="zoom py-3 w-3/4 mx-auto block" src={logosia} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/atpt/"><img className="zoom py-3 w-3/4 mx-auto block" src={logoatpt} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/sdis47/"><img className="zoom py-3 w-3/4 mx-auto block" src={logosdis} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/groupe-faivre-environnement/"><img className="zoom py-3 w-3/4 mx-auto block" src={logofaivre} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/gabriel-services/"><img className="zoom py-3 w-3/4 mx-auto block" src={logogabrielservices} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/ledilimmo/"><img className="zoom py-3 w-3/4 mx-auto block" src={logoledil} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/csd-menuiserie/"><img className="zoom py-3 w-1/2 mx-auto block" src={logocsd} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/aquapensezvous/"><img className="zoom py-3 w-1/2 mx-auto block" src={logoaqua} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/conseil-departemental-haute-garonne/"><img className="zoom py-3 w-1/2 mx-auto block" src={logocd} alt="Création site internet Toulouse" /></Link>
                                    </div>
                                </div>
                            </li>
            
        )
    }
}

export default Barre;