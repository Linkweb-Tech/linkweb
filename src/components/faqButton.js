import React from 'react';

import btn from '../images/faqBtn.svg';

class FaqButton extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClickNext = () => {
        this.props.setNext(this.props.responseId);
    }

    handleClickPrec = () => {
        this.props.setPrec(this.props.responseId);
    }

    render() {
        return (
            <div className="btn-section">
                <div onClick={this.handleClickPrec} className="faq-btn btn-prec"><img className="w-12" src={btn} /></div>
                <div onClick={this.handleClickNext} className="faq-btn"><img className="w-12" src={btn} /></div>
            </div>
        );
    }

}

export default FaqButton;