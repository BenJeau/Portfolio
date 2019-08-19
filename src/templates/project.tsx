import React from "react"
import './project.scss';
import { graphql } from "gatsby"
import { ModalRoutingContext, Link } from 'gatsby-plugin-modal-routing'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(data);

  let link = post.frontmatter.readmeLink;
  console.log(link);

  let wrapper = document.createElement('div');
  wrapper.innerHTML = post.html;
  
  if (wrapper) {
    let images = wrapper.getElementsByTagName('img');
    Array.from(images).forEach(image => {
      if (image.src.includes(window.location.hostname)) {
        let url = new URL(image.src);
        image.src = link.substr(0, link.length - 10) + url.pathname.substr(window.location.pathname.length-1);
      }
    });

    let links = wrapper.getElementsByTagName('a');
    Array.from(links).forEach(href => {
      href.target = '_blank';
      href.rel = 'noopener noreferrer';
      if (href.href.includes(window.location.hostname)) {
        let url = new URL(href.href);
        let repo = new URL(link);
        let pathname = url.pathname.substr(window.location.pathname.length-1)

        if (url.pathname.includes('png')) {
          href.href = link.substr(0, link.length - 10) + pathname;
        } else {
          href.href = 'https://www.github.com/' + repo.pathname.split('/')[1] + '/' + repo.pathname.split('/')[2] + '/blob/' + repo.pathname.split('/')[3] + pathname;
        }
      }
    });
  }


  return (
    <ModalRoutingContext.Consumer>
      {({ modal }) => (
      <div className={!!modal && 'modal'}>
        <Link to={`/projects/`}>
							<FontAwesomeIcon icon={faTimes} size='sm' />
        </Link>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: wrapper.innerHTML }} />
      </div>
    )}
  </ModalRoutingContext.Consumer>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        readmeLink
      }
    }
  }
`