import React from 'react';
import {Link} from 'gatsby';

class Button extends React.Component {
    constructor(props) {
    super(props);
    }

    render(){
        return (
            <Link 
                to={ this.props.url } 
                className={`link flex justify-${ this.props.position } mt-3 items-center text-xl`}
            >
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>
              {this.props.text}
            </Link>
            
        )
    }
}

export default Button;