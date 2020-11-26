import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Image, ProductList } from "./pageStyles/pageStyles"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const ProductsPage = () => {
  const {
    wpcontent: {
      page: {
        products: {
          productsDescription,
          productsHeaderImage,
        }
      },
      macs: {
        edges: products
      },
    }
  } = useStaticQuery(graphql`
    query {
      wpcontent {
        page(id: "products", idType: URI) {
          products {
            productsDescription
            productsHeaderImage {
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
        macs {
          edges {
            node {
              product {
                productName
                productRam
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
              slug
            }
          }
        }
      }
    }
    `)
  return (
    <Layout>
      <SEO title="Products" />
      <Container>
        <div className="banner">
          <Image fluid={productsHeaderImage.imageFile.childImageSharp.fluid} altText={productsHeaderImage.altText} />
          <div className="inner-div">
            <p className="header-title">Our Products.</p>
          </div>
        </div>
        <div className="products">
        <h1>{productsDescription}</h1>
          <div className="product-items">
            {products.map(({node: {product, slug}}) => (
              <ProductList to={`/${slug}`} key={slug}>
                <Image fluid={product.productImage.imageFile.childImageSharp.fluid} altText={product.productImage.altText} />
                <div className="product-info">
                  <h3>{product.productName}</h3>
                </div>
              </ProductList>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ProductsPage
