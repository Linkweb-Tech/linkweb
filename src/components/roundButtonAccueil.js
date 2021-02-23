import React from 'react';
import {Link} from 'gatsby';

class RoundButtonAccueil extends React.Component {
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
                className={`font-light roundedButton bg-${this.props.color || 'bleu'} text-${this.props.colortext || 'white'} hover:text-white century flex justify-center font-normal mt-3 mx-auto block lg:ml-0 lg:mr-6 items-center text-center text-md lg:text-md rounded-huge px-8 py-4 mt-12`}
            >
            <svg width="20px" className="mx-auto block mt-1 mr-2" viewBox="0 0 333 416.25"><g><path fill="#FFFFFF" class="fil0" d="M167 33c73,0 133,60 133,134 0,73 -60,133 -133,133 -74,0 -134,-60 -134,-133 0,-74 60,-134 134,-134zm58 212l22 -22c0,0 3,-7 -2,-13 -5,-5 -32,-19 -32,-19 0,0 -6,-4 -13,4 -8,7 -7,7 -7,7 0,0 -4,3 -9,1 -19,-10 -44,-35 -54,-54 -2,-4 1,-8 1,-8 0,0 0,0 8,-7 7,-8 3,-14 3,-14 0,0 -13,-27 -19,-32 -6,-5 -13,-1 -13,-1l-21 21c-24,49 88,161 136,137z"/></g></svg>
              {this.props.text}
            </a>
            
        )
    }
}

export default RoundButtonAccueil;