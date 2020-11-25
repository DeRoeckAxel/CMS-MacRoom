import Img from "gatsby-image"
import {Link} from "gatsby"
import styled from "styled-components"
import { COLORS, FONT_FAMILIES, MEDIA_QUERIES } from "../../constants.js"

export const Container = styled.div`
  .banner {
    width: 100%;
    display: flex;
    height: 700px;
    .inner-div {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      padding: 20px;
      font-weight: 100;
      font-family: ${FONT_FAMILIES.TITLE};
      border-radius: 20px;
      background-color: rgba(0,0,0,0.3);

      p {
        color: ${COLORS.WHITE};
        font-size: 1.3rem;
        text-align: center;
      }

      .header-title {
        font-family: ${FONT_FAMILIES.INFO};
        font-size: 3rem;
        font-weight: 700;
        margin: auto;
        margin-bottom: 1rem;
      }
  }
  .products {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    h1 {
      font-family: ${FONT_FAMILIES.TITLE};
      font-size: 3rem;
      margin: 0 auto;
    }

    .product-items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 5%;
    }
  }
`

export const Product = styled(Link)`
display: flex;
position: relative;
width: 300px;
height: 300px;
margin: 60px;
top: -200px;
-webkit-box-shadow: 0px -1px 9px 3px rgba(0,0,0,0.55);
box-shadow: 0px -1px 9px 3px rgba(0,0,0,0.55);
display: inline-block;
transition: transform 0.3s ease-in-out;

&:hover {
  transform: scale(1.05);

  .artist-info {
    height: 100%;
    background-color: ${COLORS.WHITE};

    p {
      color: ${COLORS.BLACK};
    }
  }
}

.product-info {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${COLORS.WHITE + "c0"};
  transition: all 0.3s ease-in-out;

  h3 {
    font-size: 1.3rem;
    font-weight: 100;
    color: ${COLORS.BLACK};
    margin: 0 auto;
    font-family: ${FONT_FAMILIES.INFO};
    text-decoration: none;
  }
}

`

export const Image = styled(Img)`
  width: 100%;
  maxWidth: auto;
  height: 100%;
`
