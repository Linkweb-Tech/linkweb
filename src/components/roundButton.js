import React from 'react';
import {Link} from 'gatsby';

class RoundButton extends React.Component {
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
                className={`font-light roundedButton bg-${this.props.color || 'bleu'} text-${this.props.colortext || 'white'} hover:text-white flex justify-center mt-3 items-center text-center text-md lg:text-xl rounded-huge px-8 py-4 mt-12`}
            >
              {this.props.text}
            </a>
            
        )
    }
}

export default RoundButton;