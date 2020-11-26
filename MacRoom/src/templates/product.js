import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Image, Container } from './templateStyles/productStyles'

const ProductTemplate = (
  {
    data: {
      wpcontent: {
        mac: {
          product,
          types: {
            edges: types
          }
        }
      }
    }
  }
) => {
  return (
    <Layout>
      <SEO title="Product" />
      <Container>
        <div className="product-container">
          <div className="product-image">
            <Image fluid={product.productImage.imageFile.childImageSharp.fluid} altText={product.productImage.altText} />
          </div>
          <div className="product-info">
            <h2>{product.productName}</h2>
            <p>Processor: {product.productProcessor}</p>
            <p>RAM: {product.productRam} GB</p>
            <p>Opslagruimte: {product.productStorage} GB</p>
            <p>Schermgrootte: {product.productScreenSize} inch</p>
            {types.map(({node: type}) => (
              <p>Type: {type.name}</p>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ProductTemplate

export const pageQuery = graphql`
  query ($id: ID!) {
    wpcontent {
    mac(id: $id, idType: ID) {
      types {
        edges {
          node {
            name
          }
        }
      }
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
      id
    }
  }
  }
`
