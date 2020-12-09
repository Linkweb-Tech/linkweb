import React from "react";

import ModalRea from './modal-list/modalRea';
import ModalRef from "./modal-list/modalRef";
import ModalSolu from "./modal-list/modalSolu";
import ModalAds from "./modal-list/modalAds";

class Modals extends React.Component {

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
                <ModalRea
                    linkTitle={"/creation-de-site-internet-a-agen/"}
                    linkLoupe={"/creation-de-site-internet-a-agen/"}
                    linkResponsive={"/creation-de-site-internet-47-31/"}
                    linkInterface={"/creation-site-internet-agen/"} />

                <ModalRef
                    linkTitle={"/referencement-toulouse/"}
                    linkRefAgence={"/referencement-toulouse/"}
                    linkRef={"/referencement-toulouse/"} />

                <ModalSolu
                    linkSolution={"/creation-de-site-internet-47-31/"} />

                <ModalAds
                    linkTitle={"/agence-adwords-47-31/"}
                    linkAds={"/agence-adwords-47-31/"} />
            </div>

        );
    }

}

export default Modals;