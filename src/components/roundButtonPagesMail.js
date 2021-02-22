import React, { Component } from 'react';
import { Link } from 'gatsby';

class RoundButtonPagesMail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            text: '',
            color: 'bleu',
            colortext: 'white'
        }
    }

    render() {
        return (
            <a
                href={this.props.url}
                /*to={ this.props.url } */
                className={`font-light roundedButton bg-${this.props.color || 'bleu'} text-${this.props.colortext || 'white'} hover:text-white century flex justify-center font-normal mt-3 mx-auto block lg:mx-auto items-center text-center text-md lg:text-md rounded-huge px-4 py-4 mt-12`}
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
            >
                <svg width="20px" className="mx-auto block mt-1 mr-2" viewBox="0 0 100 125"><path fill="#FFFFFF" d="M91.462,32.483c-2.267-5.358-5.511-10.17-9.644-14.303c-4.132-4.132-8.943-7.376-14.303-9.643  C61.967,6.191,56.074,5.001,50,5.001s-11.968,1.19-17.516,3.537c-5.358,2.267-10.171,5.511-14.303,9.643  c-4.133,4.132-7.377,8.944-9.644,14.303C6.191,38.032,5.002,43.925,5.002,50c0,6.075,1.189,11.967,3.536,17.516  c2.267,5.357,5.511,10.17,9.644,14.303c4.132,4.131,8.944,7.375,14.303,9.643c5.548,2.346,11.441,3.537,17.516,3.537  s11.967-1.191,17.516-3.537c5.359-2.268,10.171-5.512,14.303-9.643c4.133-4.133,7.377-8.945,9.644-14.303  c2.347-5.549,3.536-11.441,3.536-17.516C94.998,43.925,93.809,38.032,91.462,32.483z M77.414,66.063  c0,0.201-0.164,0.363-0.365,0.363H22.951c-0.201,0-0.364-0.162-0.364-0.363v-20.91c0-0.131,0.069-0.25,0.182-0.316  c0.112-0.064,0.251-0.064,0.364,0L50,60.295l26.867-15.458c0.113-0.064,0.252-0.064,0.364,0c0.112,0.066,0.183,0.186,0.183,0.316  V66.063z M77.414,38.708c0,0.13-0.07,0.251-0.184,0.315L50.182,54.588c-0.057,0.031-0.119,0.049-0.182,0.049  s-0.125-0.018-0.182-0.049L22.77,39.023c-0.113-0.064-0.183-0.186-0.183-0.315v-4.771c0-0.201,0.163-0.364,0.364-0.364h54.098  c0.201,0,0.365,0.163,0.365,0.364V38.708z" /></svg>
                {this.props.text}
            </a>

        )
    }
}

export default RoundButtonPagesMail;