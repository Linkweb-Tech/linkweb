import React, { Component } from "react";

import ModalContenu from "./modal-list/modalcontenu";
import ModalOptimisation from "./modal-list/modaloptimisation";
import ModalNetlinking from "./modal-list/modalnetlinking";

class ModalRefAgen extends Component {

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
                <ModalContenu/>
                <ModalOptimisation/>
                <ModalNetlinking/>
                    
            </div>

        );
    }

}

export default ModalRefAgen;