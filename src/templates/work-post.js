import React from "react";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const WorkPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1>Work template</h1>

              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              {/* <PageContent className="content" content={content} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const WorkPage = ({ data }) => {

  return (
    <Layout>
      <h1>Work template</h1>
    </Layout>
  );
};



export default WorkPage;
