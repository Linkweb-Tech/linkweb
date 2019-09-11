import React from 'react';
import {Link} from 'gatsby';

class RoundButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            text: '',
            color: 'bleu'
        }
    }

    render(){
        return (
            <Link 
                to={ this.props.url } 
                className={`font-light roundedButton bg-${this.props.color || 'bleu'} text-white flex justify-center mt-3 items-center text-xl rounded-huge px-8 py-4 mt-12`}
            >
              {this.props.text}
            </Link>
            
        )
    }
}

export default RoundButton;