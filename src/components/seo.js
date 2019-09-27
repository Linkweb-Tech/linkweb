import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title, url }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
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
            <script type="application/ld+json">{`
            {
              "@context": "http://schema.org",
              "@type": "Corporation",
              "name": "Linkweb",
              "description": "Linkweb, agence web à Agen (47) et Toulouse (31), est spécialisée dans la création de site internet, le référencement naturel et le référencement payant.",
              "image": "https://linkweb.fr/wp-content/uploads/2018/09/linkweb-v3-e1555401920623.png",
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
            `}
              {/*{
                "@context":"https://schema.org","@graph":[{"@type":"Organization",
                "@id":"https://linkweb.fr/#organization",
                "name":"${title}",
                "url":"https://linkweb.fr/",
                "sameAs":[]},
                {"@type":"WebSite",
                "@id":"https://linkweb.fr/#website",
                "url":"https://linkweb.fr/",
                "name":"Linkweb",
                "publisher":
                  {"@id":"https://linkweb.fr/#organization"},
                "potentialAction":
                  {"@type":"SearchAction",
                  "target":"https://linkweb.fr/?s={search_term_string}",
                  "query-input":"required name=search_term_string"}},						
                  {"@type":"WebPage",
                "@id":"${url}#webpage",
                "url":"${url}",
                "inLanguage":"fr-FR",
                "name":"${title}",
                "isPartOf":{"@id":"https://linkweb.fr/#website"},
                "datePublished":"2019-06-18T12:32:14+00:00",
                "dateModified":"2019-07-23T09:12:21+00:00",
                "description": "${metaDescription}",
                "breadcrumb":{"@id":"${url}#breadcrumb"}},
              {"@type":"BreadcrumbList",
                "@id":"${url}",
                "itemListElement":[]}]
              }*/}
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
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired, 
  url: PropTypes.string,
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
