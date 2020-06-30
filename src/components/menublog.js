import React from 'react';
import {Link} from 'gatsby';

class BlogMenu extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        
        return(
        
<section className="w-full flex flex-row justify-end h-4 mb-10 font-medium">
    <section className="w-full century md:w-4/5 lg:w-3/5 xl:w-2/5 flex bg-bleu text-white text-center text-xs sm:text-sm md:text-md" style={{borderBottomLeftRadius:'27px', minHeight:'48px'}}>
        <ul className="flex flex-row w-full text-xs md:text-base font-bold mx-auto items-center text-center">
            <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/actus/">Actualités</Link></li>
            <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/agence/">Agence</Link></li>
            <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/referencement/">Référencement</Link></li>
            <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/tendances/">Tendances</Link></li>
        </ul>
    </section>
</section>
);
}
}

export default BlogMenu;

