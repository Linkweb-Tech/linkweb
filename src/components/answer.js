import React from 'react';

class Answer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={this.props.activeId === this.props.id ? "question-section" : "opacity-0 absolute bottom-0 question-section"}>
                {this.props.children}
            </div>
        );
    }

}

export default Answer;