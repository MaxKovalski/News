import "../Css/News.css";
import { Link } from "react-router-dom";
export default function Card({ article }) {
  return (
    <Link to={`/article/${article.id}`}>
      <div>
        <div className="Card">
          <div
            className="card-img"
            style={{ backgroundImage: `url('${article.imgUrl}')` }}
          ></div>
          <h4>{article.publishDate}</h4>
          <h4>{article.headline}</h4>
          <h4>{article.description}</h4>
        </div>
      </div>
    </Link>
  );
}
