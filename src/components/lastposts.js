import React, { Component } from 'react'
import { Link } from 'gatsby'
import '../scss/blogposts.scss'



class LastPosts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const lastposts = this.props.lastposts;

        const wrap = this.props.wrap ? 'flex-wrap' : 'flex-nowrap';
        return (
            <section className={`flex flex-1 ${wrap} flex-col md:flex-row w-full mt-6 mb-6`}>
                {
                    lastposts.map(({ node }) => (

                        <article className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 w-1/2 mx-0 md:px-6 pb-4 flex flex-col align-center " /*data-aos="zoom-in"*/>
                            <div className="post">
                                {/* <img 
                                    src={ node.featuredImage.featuredImage {
            node {
                sourceUrl
            }
          } }
                                    className="w-full h-auto"
                                /> */}


                                <Link
                                    to={`/blog/${node.slug}/`}
                                    className="century  pb-3"
                                >
                                    <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url(' + node.featuredImage.node.sourceUrl + ')', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}></div>
                                    <h3 className="text-left px-3 pt-3  text-md hover:text-bleu" dangerouslySetInnerHTML={{ __html: node.title }} />{/*{ node.title }</h3>*/}
                                </Link>
                                <div className=" meta text-sm text-left italic pl-3">Publié le <span className="capitalize">{node.date}</span></div>
                            </div>

                        </article>

                    ))
                }
            </section>
        );
    }
}

export default LastPosts;



;