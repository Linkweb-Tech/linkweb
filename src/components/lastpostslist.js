import React, { Component } from "react"
import '../scss/lastpostsmini.scss'
import { Link } from 'gatsby'
import BoutonBlog from '../components/boutonBlog'



class LastPostsList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const lastposts = this.props.lastposts;
        console.log(lastposts);
        return (
            <section className="flex flex-1 postsList flex-wrap flex-col w-full mt-4 mb-6">
                {
                    lastposts.map(({ node }) => (
                        <article className="w-full mx-0 md:px-0  flex flex-col align-center  listPosts">
                            
                                <Link
                                    to={`/blog/${node.slug}/`}
                                    className="century flex "
                                >
                                    <div className="w-full flex">
                                        <div className="imgBloc" >
                                            <img className="img" src={node.featuredImage.node.sourceUrl} />
                                        </div>
                                        <div className="flex-auto">
                                            <div className="title text-sm text-left font-bold hover:text-bleu" dangerouslySetInnerHTML={{ __html: node.title }} />{/*{ node.title }</h5>*/}
                                            <div className="meta pl-3 md:pl-5 pr-5 text-left italic" style={{ fontSize: '12px' }}>Mis à jour le {node.modified}</div>
                                            <div className="px-5" style={{ maxWidth: '100px', maxHeight: '30px', marginTop: '10px' }}><BoutonBlog color="bleu" url={`/blog/${node.slug}/`} text="Lire l'article" /></div>
                                        </div>
                                    </div>
                                </Link>
                            

                        </article>

                    ))
                }
            </section>
        );
    }
}

export default LastPostsList;



