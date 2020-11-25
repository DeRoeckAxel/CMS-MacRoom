import Img from "gatsby-image"
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

`
export const Image = styled(Img)`
  width: 100%;
  maxWidth: auto;
  height: 100%;
`
