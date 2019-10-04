import React from 'react'
import Tile from './tile'

import faivre1 from '../../images/faivre1.jpg'
import faivre2 from '../../images/faivre2.jpg'
import faivre3 from '../../images/faivre3.jpg'
import csd from '../../images/csd-menuiserie.jpg'
import sia from '../../images/sia.jpg'
import sdis from '../../images/sdis47.jpg'
import atpt from '../../images/atouts.jpg'
import gabriel from '../../images/gabriel-services.jpg'
import ledil from '../../images/ledilimmo.jpg'

class Tiles extends React.Component {
	render() {
        const data = [{
            id: 1,
            name: "SIA Université Toulouse 2",
            image: sia, 
            url: "https://sia.univ-toulouse.fr/"
        }, {
            id: 2,
            name: "Atouts pour Tous",
            image: atpt, 
            url: "https://atoutspourtous-toulouse.fr"
        }, {
            id: 3,
            name: "SDIS 47",
            image: sdis, 
            url: "https://www.sdis47.fr/"
        }, {
            id: 4,
            name: "Cypière Paysages Services",
            image: faivre1, 
            url: "https://services.faivre-environnement.com/"
        }, {
            id: 5,
            name: "Faivre Créations",
            image: faivre3, 
            url: "https://creations.faivre-environnement.com"
        }, {
            id: 6,
            name: "Gabriel Services",
            image: gabriel, 
            url: "https://gabrielservices.fr"
        }, {
            id: 7,
            name: "Cypière Paysages",
            image: faivre2, 
            url: "https://paysages.faivre-environnement.com"
        }, {
            id: 8,
            name: "Ledil Immo",
            image: ledil, 
            url: "https://ledil.immo"
        }, {
            id: 9,
            name: "CSD Menuiseries",
            image: csd, 
            url: "http://www.csdmenuiserie.fr/"
        }];
        
        
		// Create tile for each item in data array
		// Pass data to each tile and assign a key
		return (
            
			<div className="tiles">
				{data.map((data) => {
					return <Tile data={data} key={data.id} name={data.name} url={data.url}/>
				})}
			</div>
		);
	}
}

export default Tiles; 