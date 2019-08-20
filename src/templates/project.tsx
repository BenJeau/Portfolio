import React from "react"
import './project.scss';
import { graphql } from "gatsby"
import { ModalRoutingContext, Link } from 'gatsby-plugin-modal-routing'
import feather from 'feather-icons';
import Layout from "../components/layout";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "@emotion/css";

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
        image.src = link.substr(0, link.length - 10) + url.pathname.substr(window.location.pathname.length - 1);
      }
    });

    let links = wrapper.getElementsByTagName('a');
    Array.from(links).forEach(href => {
      href.target = '_blank';
      href.rel = 'noopener noreferrer';
      if (href.href.includes(window.location.hostname)) {
        let url = new URL(href.href);
        let repo = new URL(link);
        let pathname = url.pathname.substr(window.location.pathname.length - 1)

        if (url.pathname.includes('png')) {
          href.href = link.substr(0, link.length - 10) + pathname;
        } else {
          href.href = 'https://www.github.com/' + repo.pathname.split('/')[1] + '/' + repo.pathname.split('/')[2] + '/blob/' + repo.pathname.split('/')[3] + pathname;
        }
      }
    });
  }

  wrapper.getElementsByTagName('h1')[0].appendChild(document.createTextNode(`<p>asdfasdf</p>`))

  const content = (modal) => (
    <div className='project'>
    <div className={(!!modal && 'modal') + ' content'}>
      <Link to={`/projects/`} className='close' dangerouslySetInnerHTML={{ __html: feather.icons.x.toSvg({ height: 50, width: 50 }) }}>
      </Link>

      <a href={post.frontmatter.link} target='_blank' rel='noopener noreferrer'>
										<FontAwesomeIcon icon={faGithub} size='lg' className='icon' />
									</a>
      <div dangerouslySetInnerHTML={{ __html: wrapper.innerHTML }}>
      
      </div>
    </div>
  </div>
  )

  return (
    <ModalRoutingContext.Consumer>
      {({ modal }) => (
        <React.Fragment>
          {modal ? content(modal) : 
            <Layout>
              {content(modal)}
            </Layout>}
        </React.Fragment>
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
        link
        readmeLink
      }
    }
  }
`