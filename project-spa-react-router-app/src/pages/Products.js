import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/p1">A Book</Link>
        </li>
        <li>
          <Link to="/p2">A Dog</Link>
        </li>
        <li>
          <Link to="/p3">A Course</Link>
        </li>
      </ul>
    </section>
  );
};
export default Products;
