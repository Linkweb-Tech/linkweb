import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import "../scss/global.scss";



class Layout extends React.Component {

  constructor(props) {
    super(props); 
  }

  componentDidMount() {
      setTimeout(() => {
        console.log(location.pathname);
        if(typeof location != 'undefined' ) {
          const path = location.pathname.replace(/\//g,'');
        };
      }, 1000);
  };

  render() {

    const { children } = this.props
    return(
      <div className="beforeOverlay flex flex-col font-sans min-h-screen text-gray-900 bg-white relative   pb-128" >
        <Header path={location.pathname} />
        <main className="flex flex-col flex-1 md:justify-center w-full z-20 bg-white min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    )
  }

}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

