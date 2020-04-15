import React from 'react'
import '../scss/lastpostsmini.scss'
import {Link} from 'gatsby'



class LastPosts extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        const lastposts = this.props.lastposts;
        
        return(
            <section className="flex flex-1 flex-wrap flex-col w-full mt-4 mb-6">
                {
                    lastposts.map(( {node} ) => (
                        <article className="w-full mx-0 md:px-0 pb-1 flex flex-col align-center  sidebarPosts">
                            <div className="pb-3">
                                <Link
                                    to={`/blog/${node.slug}/`}
                                    className="century uppercase  flex "
                                >
                                    <div className="imgBloc" >
                                        <img className="img" src={node.featured_media.source_url} />
                                    </div>
                                    <div>  
                                        <h5 className="text-xs text-left px-3 hover:text-bleu" dangerouslySetInnerHTML={{ __html: node.title }}/>{/*{ node.title }</h5>*/}
                                       
                                    </div>                                    
                                </Link>
                                <div className=" meta text-xs text-left italic">Mis à jour le { node.modified }</div>
                            </div>
                           
                        </article>
                         
                    ))
                }
            </section>
        );
    }
}

export default LastPosts;



