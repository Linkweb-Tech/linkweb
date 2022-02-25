import React, { Component } from "react";

import ModalFormationSEO from "./modal-list/modalformationseo";
import ModalFormationWordpress from "./modal-list/modalformationwordpress";
import ModalFormationRef from "./modal-list/modalformationref";
class Modalformation extends Component {

    constructor(props) {
        super(props);
    }

    handleClick(e) {
        // id of the current popup
        var currentModal = window.location.href.split('#')[1];
        const modalBackground = document.getElementById(currentModal);
        // unresizisable background
        const modalDumpBackground = modalBackground.getElementsByClassName("popup-inner")[0];
        const close = document.getElementsByClassName('popup__close')[0];

        if(e.target === modalBackground || e.target === modalDumpBackground) {
            // Simulate click on close popup link
            close.click();
        }         
    }

    render() {
        return (
            <div id="modalContainer" onClick={(e) => this.handleClick(e)}>
                <ModalFormationSEO/>
                <ModalFormationWordpress/>
                <ModalFormationRef/>
                    
            </div>

        );
    }

}

export default Modalformation;