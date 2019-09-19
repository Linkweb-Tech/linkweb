import React from 'react'
import '../scss/blogposts.scss'



class LastPosts extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        const lastposts = this.props.lastposts;
        console.log(this.props.lastposts);
        return(
            <section className="flex flex-1 flex-row w-full mt-6 mb-6">
                {
                    lastposts.map(( {node} ) => (
                        <article className="w-1/3 mx-6 pb-4 flex flex-col align-center post">
                            {/* <img 
                                src={ node.featured_media.source_url }
                                className="w-full h-auto"
                            /> */}
                            
                            
                            <a
                                href={node.link}
                                className="century uppercase pb-3"
                            >
                                <div className="h-64 bg-cover bg-center" style={{backgroundImage:'url(' + node.featured_media.source_url +')'}}></div>
                                <h1 className="text-left px-3 pt-3  text-sm hover:text-bleu">{ node.title }</h1>
                            </a>
                            <div className="text-sm text-left italic pl-3">Publié le { node.modified }</div>
                        </article>
                         
                    ))
                }
            </section>
        );
    }
}

export default LastPosts;



