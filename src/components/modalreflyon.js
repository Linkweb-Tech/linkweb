import React, { Component } from "react";

import ModalConcurrenceLyon from "./modal-list/modalconcurrencelyon";
import ModalPopulariteLyon from "./modal-list/modalpopularitelyon";
import ModalProductionLyon from "./modal-list/modalproductionlyon";
import ModalContenuLyon from "./modal-list/modalcontenulyon";
import ModalOptimisationLyon from "./modal-list/modaloptimisationlyon";
import ModalNetlinkingLyon from "./modal-list/modalnetlinkinglyon";

class ModalRefLyon extends Component {

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
                <ModalContenuLyon/>
                <ModalOptimisationLyon/>
                <ModalNetlinkingLyon/>
                <ModalConcurrenceLyon/>
                <ModalPopulariteLyon/>
                <ModalProductionLyon/>
            </div>

        );
    }

}

export default ModalRefLyon;