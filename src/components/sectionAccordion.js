import React, { Component } from "react";
import PropTypes from "prop-types";
import "../scss/accordion.scss";

class SectionAccordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isFirst: PropTypes.bool.isRequired
  };


  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const { onClick, props: { isOpen, label, isFirst } } = this;

    return (
      <div
        className={"tab relative text-white century text-2xl tracking-wider my-6" + (isFirst?" first":"")} //ajoute une classe si il s'agit du premier block
        style={{
          background: isOpen ? "#3e3e3e" : "#3e3e3e",
          padding: "0px"
        }}
      >
        <div onClick={onClick} style={{ cursor: "pointer" }}>
          <span className={`plus pl-2 absolute ${ isOpen ? "open" : "" }`}>
            <span><svg xmlns={`http://www.w3.org/2000/svg`}  version="1.1" x="0px" y="0px" viewBox="0 0 42 42" ><polygon points="42,19 23,19 23,0 19,0 19,19 0,19 0,23 19,23 19,42 23,42 23,23 42,23 "/></svg></span>
            
          </span>
          <h3 className="w-full py-6 px-12 accordionTitle"> <span className="text-bleu">/ </span>{label}</h3>
          
        </div>
        {/* {isOpen && ( */}
          <div
            className={`content text-grey text-sm px-12 bg-white ${ isOpen ? "open" : ""}`}
          >
            {this.props.children}
          </div>
        {/* )} */}
      </div>
    );
  }
}

export default SectionAccordion;
