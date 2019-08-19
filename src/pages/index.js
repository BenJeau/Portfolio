import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby-plugin-modal-routing"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import Home from "../components/Home";
import About from "../components/About";

export default ({ data }) => {
    return (
        <Layout>
            <div css={css`
            // background-color: white;
            `}>

            <Home/>
            <About/>

            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/profile-original.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }`