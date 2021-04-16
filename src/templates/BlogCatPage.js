import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LastPosts from '../components/lastposts';


const BlogCatTemplate = ({ data }) => (
    <Layout location={data.wordpressPost.title}>
        {/* <SEO title={data.wordpressPost.title} description={data.wordpressPost.excerpt} /> */}
        <LastPosts lastposts={this.props.data.allWordpressPost.edges} />
        
    </Layout>
)
export default BlogCatTemplate
export const query = graphql`
  query {
    allWordpressPost {
        edges {
            node {
            id
            title
            slug
            modified(locale: "fr", formatString: "ddd MM YYYY")
            link
            featured_media {
                source_url
            }
            }
        }
    }
  }
`