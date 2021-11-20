import React from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <React.Fragment>
      <h1>news page</h1>
      <ul>
        <li>
          <Link href="/news/n1">NextJS = Framework</Link>
        </li>
        <li>
          <Link href="/news/n2">React = Library</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default NewsPage;
