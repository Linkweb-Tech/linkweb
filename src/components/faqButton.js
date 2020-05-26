import React from 'react';


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
                <div onClick={this.handleClickPrec} style={{transform:'scaleX(-1)'}} className="faq-btn btn-prec"><svg fill="#37cfee" width="30px" viewBox="0 0 512 640"><g><g><path d="M256,16C123.36,16,16,123.34,16,256c0,132.641,107.34,240,240,240c132.645,0,240-107.343,240-240    C496,123.36,388.661,16,256,16z M256,476c-121.309,0-220-98.691-220-220S134.691,36,256,36s220,98.691,220,220    S377.309,476,256,476z"/><path d="M203.071,128.929c-3.905-3.905-10.237-3.905-14.143,0s-3.905,10.237,0,14.143L301.858,256l-112.93,112.929    c-3.905,3.905-3.905,10.237,0,14.143c3.906,3.905,10.237,3.904,14.143,0l120.001-120c3.904-3.905,3.904-10.237,0-14.143    L203.071,128.929z"/></g></g></svg></div>
                <div onClick={this.handleClickNext} className="faq-btn"><svg fill="#37cfee" width="30px" viewBox="0 0 512 640" ><g><g><path d="M256,16C123.36,16,16,123.34,16,256c0,132.641,107.34,240,240,240c132.645,0,240-107.343,240-240    C496,123.36,388.661,16,256,16z M256,476c-121.309,0-220-98.691-220-220S134.691,36,256,36s220,98.691,220,220    S377.309,476,256,476z"/><path d="M203.071,128.929c-3.905-3.905-10.237-3.905-14.143,0s-3.905,10.237,0,14.143L301.858,256l-112.93,112.929    c-3.905,3.905-3.905,10.237,0,14.143c3.906,3.905,10.237,3.904,14.143,0l120.001-120c3.904-3.905,3.904-10.237,0-14.143    L203.071,128.929z"/></g></g></svg></div>
            </div>
        );
    }

}

export default FaqButton;