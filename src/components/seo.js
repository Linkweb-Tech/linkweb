import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import linkwebLogo from "../images/linkweb-black.png";

function SEO({ description, lang, meta, keywords, title, url, article }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
          let json = '';
          if ( article == false ) {
            json = `
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Linkweb",
              "description": "Linkweb, agence web à Agen (47) et Toulouse (31), est spécialisée dans la création de site internet, le référencement naturel et le référencement payant.",
              "image": ${linkwebLogo},
              "logo": "https://linkweb.fr",
              "url": "https://linkweb.fr",
              "telephone": "0533950030",
              "sameAs": ["https://twitter.com/AgenceLinkweb","https://www.facebook.com/AgenceLinkweb","https://www.instagram.com/agencelinkweb"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 rue Albert Ferrasse",
                "addressLocality": "Boé",
                "postalCode": "47550",
                "addressCountry": "France"
              }
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
        "@id": "${url}"
      },
        "headline": "${title}",
        "description": "${metaDescription}",
        "image": {
            "@type": "ImageObject",
            "url": "",
            "width": ,
            "height": 
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
              "url": ${linkwebLogo},
              "width": ,
              "height": 
        }
      },
      "datePublished": ""
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
  article: false
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired, 
  url: PropTypes.string,
  article: PropTypes.bool
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
