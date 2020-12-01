import React from 'react';
import {Link} from 'gatsby';

class ButtonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            text: '',
            color: 'bleu',
            colortext:'white'
        }
    }

    render(){
        return (
            <a 
            href={ this.props.url }     
            /*to={ this.props.url } */
                className={`font-light pageButton bg-${this.props.color || 'bleu'} text-${this.props.colortext || 'black'} hover:text-bleu flex justify-center my-3 items-center hover:bg-white text-center text-sm md:text-md lg:text-md rounded-huge px-4 py-4 mt-0`}
                style={{minWidth:'150px'}}
            >
              {this.props.text}
            </a>
            
        )
    }
}

export default ButtonPage;