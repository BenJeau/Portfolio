import React, { Fragment } from "react"
import { css } from "@emotion/core"
import feather from 'feather-icons';

import { Link } from "gatsby-plugin-modal-routing"
import Project from "./Project";

import './projects.scss';

export default ({ edges }) => (
        <Fragment>
            <div className='projects' css={css`padding: 50px 0; display:flex; align-items:center; width: 100%; max-width: 800px; min-height: calc(100vh - 100px); justify-content:center; flex-direction: column`}>
                {
                    edges.map(({node}, key) => {
                        return (
                            <Link key={key}
                                to={node.fields.slug}
                                css={css`width: 100%;
                            text-decoration: none;
                            color: inherit;
                        `}
                                asModal
                            ><Project {...node.frontmatter}/> </Link>);
                    })
                }
            </div>

            <div css={css`background-color: #14141490; height: 100px; position: absolute; top: 0; width: 100%;left: 0`} />
            <Link to={`/projects`} className='back-arrow' dangerouslySetInnerHTML={{ __html: feather.icons['arrow-left'].toSvg({ height: 50, width: 50 }) }}/>
    </Fragment>
)
