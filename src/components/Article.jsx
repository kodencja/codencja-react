import React, { useEffect } from "react";

function Article(props) {
  useEffect(() => {
    console.log("Article componentDidMount");
  }, []);

  return (
    <article className={"main-article " + props.getClasses()}>
      {props.children}
    </article>
  );
}

export default Article;
