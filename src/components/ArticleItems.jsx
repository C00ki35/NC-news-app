import React from "react";
import { Link } from "@reach/router";
import "../App.css";

const ArticleItems = props => {
  return (
    <section>
      <header className="article-items">
        <Link to={`/articles/${props.topic}/${props.article_id}`}>
          {props.title}
        </Link>
      </header>
      <div>
        {props.topic}
        <br />
        author: {props.author}
        <br />
        {sessionStorage.getItem("user") === props.author ? (
          <button onClick={() => props.deleteArticle(props.article_id)}>
            Delete
          </button>
        ) : null}
        date: {props.created_at}
        <br />
        votes: {props.votes} - comments: {props.comment_count}
      </div>
    </section>
  );
};

export default ArticleItems;
