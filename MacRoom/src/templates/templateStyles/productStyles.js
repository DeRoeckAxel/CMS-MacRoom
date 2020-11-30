import styled from "styled-components"
import Img from "gatsby-image"
import { COLORS, FONT_FAMILIES } from "../../constants"

export const Container = styled.div`
  background-color: ${COLORS.BLACK};
  margin-top: 100px;

  .product-container {
    display: flex;
    margin: 3rem auto;
    width: 90%;
    background-color: ${COLORS.BLACK};

    .product-image {
      position: relative;
      top: 55px;
      width: 400px;
      height: 400px;
      -webkit-box-shadow: 0px -1px 9px 3px rgba(0,0,0,0.55);
      box-shadow: 0px -1px 9px 3px rgba(0,0,0,0.55);
      }
    }

    .product-info {
      display: flex;
      flex-direction: column;
      width: 60vw;
      padding: 1.5rem 2rem;

      h2 {
        font-family: ${FONT_FAMILIES.TITLE};
        color: ${COLORS.BLACK};
        font-size: 4rem;
        margin-left: auto;
        margin-bottom: 0.5rem;
        background-color: ${COLORS.WHITE};
        padding: 20px;
        border-radius: 20px;
      }

      p {
        font-family: ${FONT_FAMILIES.TITLE};
        color: ${COLORS.WHITE};
        font-size: 1rem;
        padding-bottom: 1px;
        margin-bottom: 0.5rem;
      }
    }
  }

`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
