import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Guides",
    Svg: require("@site/static/img/guides_illustration.svg").default,
    description: (
      <>
        We seek to develop simple to understand and interesting study guides
        according to the IB Computer Science syllabus.
      </>
    ),
  },
  {
    title: "Videos",
    Svg: require("@site/static/img/videos_illustration.svg").default,
    description: (
      <>
        How can it be that this is the first thing that catches your attention?
        But yes, along with our guides we also offer explanation videos.
      </>
    ),
  },
  {
    title: "Exercises",
    Svg: require("@site/static/img/exercises_illustration.svg").default,
    description: (
      <>
        In Computer Science the theory might sound very abstract, but when mixed
        with some useful exercises its easily understandable.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md ">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
