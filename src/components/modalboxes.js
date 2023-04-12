import React, { Component } from "react";

import ModalFormationSEO from "./modal-list/modalformationseo";
import ModalAgenceSEO from "./modal-list/modalagenceseo";
import ModalContenuToulouse from "./modal-list/modalcontenutoulouse";
import ModalNetlinkingToulouse from "./modal-list/modalnetlinkingtoulouse";
import ModalOptimisationToulouse from "./modal-list/modaloptimisationtoulouse";
import ModalConcurrenceToulouse from "./modal-list/modalconcurrence";
import ModalProductionToulouse from "./modal-list/modalproductiontoulouse";
import ModalPopulariteToulouse from "./modal-list/modalpopularite";
class Modalboxes extends Component {

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
                
                {/* <ModalAgenceSEO/> */}
                <ModalContenuToulouse/>
                <ModalOptimisationToulouse/>
                <ModalNetlinkingToulouse/>
                <ModalConcurrenceToulouse/>
                <ModalProductionToulouse/>
                <ModalPopulariteToulouse/>

                    
            </div>

        );
    }

}

export default Modalboxes;