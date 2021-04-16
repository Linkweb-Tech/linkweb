import React, { Component } from "react";
import { Link } from 'gatsby';

class BlogMenu extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (

            <section className="w-full flex flex-row justify-end h-4 mb-10 font-medium">
                <section className="w-full century md:w-4/5 lg:w-3/5 xl:w-2/5 flex bg-bleu text-white text-center text-xs sm:text-sm md:text-md" style={{ borderBottomLeftRadius: '27px', minHeight: '48px' }}>
                    <ul className="flex flex-row w-full text-xs md:text-base font-bold mx-auto items-center text-center">
                        <li className=" w-full itemblog h-full flex items-center justify-center md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/actus/">Actualités</Link></li>
                        <li className=" w-full itemblog h-full flex items-center justify-center md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/agence/">Agence</Link></li>
                        <li className=" w-full itemblog h-full flex items-center justify-center md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/referencement/">Référencement</Link></li>
                        <li className=" w-full itemblog h-full flex items-center justify-center md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/tendances/">Tendances</Link></li>
                    </ul>
                </section>
            </section>
        );
    }
}

export default BlogMenu;


