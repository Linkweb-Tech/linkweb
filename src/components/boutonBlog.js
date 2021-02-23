import React from 'react';
import {Link} from 'gatsby';

class boutonBlog extends React.Component {
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
                className={`font-light roundedButton bg-${this.props.color || 'bleu'} text-${this.props.colortext || 'white'} hover:text-white flex justify-center mt-3 items-center text-center text-sm md:text-md lg:text-xs rounded-huge px-4 py-4 mt-0`}
                style={{minWidth:'150px'}}
            >
              {this.props.text}
            </a>
            
        )
    }
}

export default boutonBlog;