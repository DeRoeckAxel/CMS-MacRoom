import Img from "gatsby-image"
import styled from "styled-components"
import { COLORS, FONT_FAMILIES, MEDIA_QUERIES } from "../../../constants.js"

export const Image = styled(Img)`
  margin: auto 0;
`

export const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  background-color: ${COLORS.WHITE};
  opacity: 0.85;
  a {
    display: flex;
    text-align: center;
    justify-content: center;
  }
`


export const MenuList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    a {
      text-decoration: none;
      padding: 1rem;
      font-family: ${FONT_FAMILIES.TITLE};
      font-size: 30px;
      white-space: nowrap;
      color: ${COLORS.BLACK};
      animation-duration: 3s;
    }
    a:hover {
      color: ${COLORS.HOVERBLACK};
      animation-duration: 3s;
    }
  }
`
