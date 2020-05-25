import React from 'react';


class Question extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        // Call parent function in order to change the active question/answer
        this.props.setActive(this.props.responseId);
        // automaticly scroll to top
        window.scrollTo(0, 340);
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