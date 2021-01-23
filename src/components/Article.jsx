import React from "react";

function Article(props) {
  return (
    <article className={"main-article " + props.getClasses()}>
      {props.children}
    </article>
  );
}

export default Article;
