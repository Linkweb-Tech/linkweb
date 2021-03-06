import React, { Component } from "react";
import PropTypes from "prop-types";

import SectionAccordion from "./sectionAccordion";

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
  };

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);

    const openSections = {};
    
    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });


    
    this.state = { openSections };
  }

  onClick = label => {
    const { props: { allowMultipleOpen }, state: { openSections } } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const { 
      onClick,
      props: { children },
      state: { openSections },
    } = this;
    console.log(children)
    return (
      <div className="w-full pl-12 accordion">
        {children.map((child,key) => (
          <SectionAccordion
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
            isFirst={key === 0} //Signale qu'il s'agit du premier conteneur (plus grande hauteur pour le responsive)
          >
            {child.props.children}
          </SectionAccordion>
        ))}
      </div>
    );
  }
}

export default Accordion;