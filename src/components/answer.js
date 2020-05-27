import React from 'react';

class Answer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={"q" + this.props.id} className={this.props.activeId === this.props.id ? "question-section" : "m-10 opacity-25 question-section"}>
                {this.props.children}
            </div>
        );
    }

}

export default Answer;