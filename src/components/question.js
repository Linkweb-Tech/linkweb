import React, { Component } from "react";


class Question extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        // Call parent function in order to change the active question/answer
        this.props.setActive(this.props.responseId);
        this.props.scrollToElement(this.props.responseId);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <li class={this.props.active === this.props.responseId ? "active" : "" }><span className="text-bleu">> </span> { this.props.children }</li>
            </div>
        );
    }
}

export default Question;