import React from 'react';
import {Link} from 'gatsby';

class ButtonBlog extends React.Component {
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
                className={`font-light roundedButton bg-${this.props.color || 'bleu'} text-white font-bold flex justify-center items-center text-xlpx-8 py-4 mt-12`}
            >
              {this.props.text || 'skew'}
            </Link>
            
        )
    }
}

export default ButtonBlog;