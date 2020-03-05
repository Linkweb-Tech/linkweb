import React from "react";

import ModalRea from './modal-list/modalRea';
import ModalRef from "./modal-list/modalRef";
import ModalSolu from "./modal-list/modalSolu";
import ModalAds from "./modal-list/modalAds";

class Modals extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ModalRea
                    linkTitle={"/creation-de-site-internet-a-agen/"}
                    linkLoupe={"/creation-de-site-internet-a-agen/"}
                    linkResponsive={"/creation-de-site-internet-47-31/"}
                    linkInterface={"/creation-site-internet-agen/"} />

                <ModalRef 
                    linkTitle={"/referencement-de-site-internet-47-31/"}
                    linkRefAgence={"/agence-referencement-toulouse/"}
                    linkRef={"/referencement-de-site-internet-47-31/"}/>

                <ModalSolu 
                    linkSolution={"/creation-de-site-internet-47-31/"}/>

                <ModalAds 
                    linkTitle={"/agence-adwords-47-31/"}
                    linkAds={"/agence-adwords-47-31/" }/>
            </div>
            
        );
    }

}

export default Modals;