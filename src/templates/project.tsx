import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import feather from 'feather-icons';
import moment from 'moment';
import { Link } from 'gatsby-plugin-intl';

import { Layout } from '../components';
import './project.scss';

export default ({ data }) => {
  const [wrapper, setWrapper] = useState();

  const moveToLink = () => {
    if (wrapper) {
      var div = wrapper.querySelector('div h1');
      div.style.marginBottom = '0';

      let created = document.createElement('p');
      created.innerHTML =
        'Created - ' + moment(post.frontmatter.date).format('MMMM Do YYYY');
      created.classList.add('subtitle');
      div.parentNode.insertBefore(created, div.nextSibling);

      let github = document.createElement('a');
      github.href = post.frontmatter.link;
      github.target = '_blank';
      github.rel = 'noopener roreferrer';
      github.innerHTML = feather.icons.github.toSvg();
      github.style.marginLeft = '1rem';
      github.classList.add('icon');

      var wrap = document.createElement('div');
      wrap.innerHTML = div.outerHTML + github.outerHTML;
      wrap.style.display = 'flex';
      wrap.style.flexDirection = 'row';
      wrap.style.alignItems = 'flex-end';

      div.parentNode.insertBefore(wrap, div);
      div.remove();
    }
  };

  const post = data.markdownRemark;
  let link = post.frontmatter.readmeLink;
  const hasReadme = post.html != '<p>does not exists</p>';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setWrapper(document.createElement('div'));
    }
  }, []);

  if (hasReadme && wrapper) {
    wrapper.innerHTML = post.html;

    if (wrapper) {
      let images = wrapper.getElementsByTagName('img');
      Array.from(images).forEach((image) => {
        if (image.src.includes(window.location.hostname)) {
          let url = new URL(image.src);
          image.src =
            link.substr(0, link.length - 10) +
            url.pathname.substr(window.location.pathname.length - 1);
        }
      });

      let links = wrapper.getElementsByTagName('a');
      Array.from(links).forEach((href) => {
        href.target = '_blank';
        href.rel = 'noopener noreferrer';
        if (href.href.includes(window.location.hostname)) {
          let url = new URL(href.href);
          let repo = new URL(link);
          let pathname = url.pathname.substr(
            window.location.pathname.length - 1,
          );

          if (url.pathname.includes('png')) {
            href.href = link.substr(0, link.length - 10) + pathname;
          } else {
            href.href =
              'https://www.github.com/' +
              repo.pathname.split('/')[1] +
              '/' +
              repo.pathname.split('/')[2] +
              '/blob/' +
              repo.pathname.split('/')[3] +
              pathname;
          }
        }
      });
    }

    moveToLink();
  }

  const info = {
    no_readme: 'asdf',
    no_readme_link: 'asdfasd',
  };

  return (
    <Layout title={post.frontmatter.name}>
      <div className="project">
        <div className={'content'}>
          <Link
            to={`/projects/${post.frontmatter.type}`}
            className="close"
            dangerouslySetInnerHTML={{
              __html: feather.icons.x.toSvg({ height: 50, width: 50 }),
            }}></Link>
          {hasReadme ? (
            <div
              dangerouslySetInnerHTML={{
                __html: wrapper ? wrapper.innerHTML : '',
              }}
            />
          ) : (
            <div style={{ maxWidth: '500px' }}>
              <h1>{post.frontmatter.name}</h1>
              <p className="subtitle">
                Created - {moment(post.frontmatter.date).format('MMMM Do YYYY')}
              </p>
              {info.no_readme}{' '}
              <a href={post.frontmatter.link}>{info.no_readme_link}</a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        link
        readmeLink
        date
        type
      }
    }
  }
`;
