import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import linkwebLogo from "../images/linkweb-black.png";

function SEO({ description, lang, meta, keywords, title, url, article, date, slug, modified, nom }) {
  return (
    
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
          let canonical = 'https://linkweb.fr';
          let json = '';
          if ( article == false ) {
            json = `
            {
              "@context":"https://schema.org",
              "@graph":[{"@type":"Organization",
              "@id":"https://linkweb.fr/#organization",
              "name":"Linkweb",
              "logo":"https://linkweb.fr/data/logo-linkweb.jpg",
              "url":"https://linkweb.fr/","sameAs":[]},
                {"@type":"WebSite",
                "@id":"https://linkweb.fr/#website",
                "url":"https://linkweb.fr/",
                "name":"Linkweb",
              "publisher":{
                "@id":"https://linkweb.fr/#organization"},
                "potentialAction":
                  {"@type":"SearchAction",
                  "target":"https://linkweb.fr/?s={search_term_string}",
                  "query-input":"required name=search_term_string"}
              },
              {
              "@type":"WebPage",
              "@id":"${url}#webpage",
              "url":"${url}",
              "inLanguage":"fr-FR",
              "name":"${title}",
              "isPartOf":{
                "@id":"https://linkweb.fr/#website"
              },
                "description":"${metaDescription}"	
              },
              {
                "@type":"ItemList",
                "itemListElement":[
                {
                "@type":"ListItem",
                "position":1,
                "url":"http://linkweb.fr/creation-site-internet-toulouse/"
                },
                {
                "@type":"ListItem",
                "position":2,
                "url":"http://linkweb.fr/referencement-toulouse/"
                },
                {
                "@type":"ListItem",
                "position":3,
                "url":"http://linkweb.fr/contact-agence-web-toulouse/"
                },
                {
                  "@type":"ListItem",
                  "position":4,
                  "url":"http://linkweb.fr/agence-web-toulouse/"
                  }
                ]
               },
              {"@type":"BreadcrumbList",
              "@id":"${url}/#breadcrumb",
              "itemListElement":[{"@type":"ListItem","position":1,
              "item":{"@type":"WebPage","@id":"https://linkweb.fr/","url":"https://linkweb.fr/","name":"Accueil"}},
              {"@type":"ListItem",
              "position":2,
              "item":{"@type":"WebPage",
              "@id":"https://linkweb.fr/${slug}",
              "url":"${url}",
              "name":"${nom}"}
              }
              ]
              }
              ]
              }
            `
} else {
    json = 
      `
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://linkweb.fr/blog/${slug}"
      },
        "headline": "${title}",
        "description": "${metaDescription}",
        "image": {
            "@type": "ImageObject",
            "url": "https://linkweb.fr/blog/${slug}",
            "width": "",
            "height": ""
      },
        "author": {
          "@type": "Organization",
          "name": "Linkweb"
      },  
        "publisher": {
            "@type": "Organization",
            "name": "Linkweb",
          "logo": {
              "@type": "ImageObject",
              "url": "https://linkweb.fr",
              "width": "204",
              "height": "53"
        }
      },
      "datePublished": "${date}",
      "dateModified": "${modified}"
        }
      }
      `
}


        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                property: `og:site_name`,
                content: `Linkweb`
              },
              {
                property: `og:locale`,
                content: `fr_FR`
              },
              {
                property: `og:url`,
                content: url
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          >
            <link rel="shortlink" href={url} />
            <link rel="canonical" href={url} />
            <script type="application/ld+json">
            {
              json
            }
            </script>    
            
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  keywords: [],
  url: `https://test.com`,
  article: false,
  date: ``,
  slug: ``,
  modified: ``,
  nom: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired, 
  url: PropTypes.string,
  article: PropTypes.bool, 
  date: PropTypes.string,
  modified: PropTypes.string,
  slug: PropTypes.string,
  nom: PropTypes.string
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
