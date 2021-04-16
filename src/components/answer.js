import React, { Component } from "react";

class Answer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={"q" + this.props.id} className={this.props.activeId === this.props.id ? "mx-auto question-section" : "mx-auto question-section hidden-question"}>
                {this.props.children}
            </div>
        );
    }

}

export default Answer;