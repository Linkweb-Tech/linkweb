import React from 'react';

class Answer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={this.props.activeId === this.props.id ? "" : "opacity-0 absolute"}>
                {this.props.children}
            </div>
        );
    }

}

export default Answer;