import React from 'react'
import {Link} from 'gatsby'
import '../scss/categorieslist.scss'

class CategoriesList extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        const list = this.props.list;
        
        return(
            <section className="flex flex-col justify-center items-start pl-3">
                {
                    list.map(( {node} ) => (
                        <a className="hover:text-bleu" href={node.link}><span> {node.name} </span></a>
                    ))
                }
            </section>
        );
    }

}

export default CategoriesList;