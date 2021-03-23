import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Notes"
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Read Notes
            </Link>
          </div>
        </div>
      </header>
      <main className="container">
        <p>
          These are my <Link to="/docs/">notes</Link> while exploring machine
          learning. Here we discuss some of the concepts and theory behind
          various models. For examples and usages, please see the jupyter
          notebooks at{" "}
          <Link to="https://github.com/pranabdas/machine-learning">GitHub</Link>
          .
        </p>
      </main>
    </Layout>
  );
}
