import React from 'react'
import {Link} from 'gatsby'
import '../scss/blogposts.scss'



class Postune extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        const postune = this.props.postune;
        
        return(
            <section className="flex flex-1 flex-wrap flex-col md:flex-row w-full mt-6 mb-6">
                {
                    postune.map(( {node} ) => (
                        <article className="w-full mx-0 md:px-6 pb-4 flex flex-col align-center " /*data-aos="zoom-in"*/>
                            <div className="postune">
                                    {/* <img 
                                    src={ node.featured_media.source_url }
                                    className="w-full h-auto"
                                /> */}
                                
                                
                                <Link
                                    to={`/blog/${node.slug}/`}
                                    className="text-white century relative"
                                >
                                    <div className="bg-cover bg-center flex flex-col items-end px-10 justify-end" style={{minHeight:'350px', backgroundImage:'url(' + node.featured_media.source_url +')', borderRadius: '15px'}}>
                                        <div className="infobg">                                    
                                        <h3 className="text-left flex px-3 pt-3 text-sm hover:text-bleu" dangerouslySetInnerHTML={{ __html: node.title }}/>{/*{ node.title }</h3>*/}
                                            <div className=" meta text-sm px-3 text-left italic">Publié le { node.date }</div>
                                        </div>
                                    </div>
                                </Link>
                                
                            </div>
                           
                        </article>
                         
                    ))
                }
            </section>
        );
    }
}

export default Postune;



