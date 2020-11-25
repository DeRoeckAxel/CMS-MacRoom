import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Image } from "./pageStyles/pageStyles"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => {
  const {
    wpcontent: {
      page: {
        homePage: {
          homePageDescription,
          homePageHeaderImage,
          homePageFeaturedProducts,
          homePageTitle,
        }
      }
    }
  } = useStaticQuery(graphql`
      query {
        wpcontent {
    page(id: "home", idType: URI) {
      homePage {
        homePageTitle
        homePageDescription
        homePageFeaturedProducts {
          ... on WPGraphql_Mac {
            id
            product {
              productName
              productProcessor
              productRam
              productScreenSize
              productStorage
              productImage {
                altText
                sourceUrl
                imageFile {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
        homePageHeaderImage {
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
      }
    `)
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
      <div className="banner">
        <Image fluid={homePageHeaderImage.imageFile.childImageSharp.fluid} alt={homePageHeaderImage.altText} />
        <div className="inner-div">
          <p className="header-title">{homePageTitle}</p>
          <p className="header-description">{homePageDescription}</p>
        </div>
      </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
