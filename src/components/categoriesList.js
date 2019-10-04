import React from 'react'
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
                        <span> {node.name} </span>
                    ))
                }
            </section>
        );
    }

}

export default CategoriesList;