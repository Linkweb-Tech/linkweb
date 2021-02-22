import React, { Component } from 'react';
import { Link } from 'gatsby';

class ButtonBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            text: '',
            color: 'bleu'
        }
    }

    render() {
        return (
            <Link
                to={this.props.url}
                className={`font-normal roundedButton bg-${this.props.color || 'bleu'} text-white flex justify-center items-center text-xs md:text-sm px-3 lg:px-4 py-4`}
            >
                {this.props.text || 'skew'}
            </Link>

        )
    }
}

export default ButtonBlog;