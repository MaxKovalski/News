import { useContext } from "react";
import { useState } from "react";
import "../Css/News.css";
import { generalContext } from "../App";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
export default function NewsPage() {
  const { id } = useParams();
  const [newsPage, setNewsPage] = useState();
  const [comment, SetComment] = useState({
    name: "",
    articleId: `${id}`,
    parent: 0,
    comment: "",
  });

  const { setLoader } = useContext(generalContext);

  useEffect(() => {
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/articles/${id}?token=d2988c4d-3431-11ee-b3e9-14dda9d4a5f0`
    )
      .then((res) => res.json())
      .then((data) => {
        setNewsPage(data);
        setLoader(false);
      });
  }, []);

  const publishComment = (ev) => {
    ev.preventDefault();
    fetch(
      `https://api.shipap.co.il/articles/${id}/talkbacks?token=d2988c4d-3431-11ee-b3e9-14dda9d4a5f0`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(comment),
      }
    ).then(() => {
      fetch(
        `https://api.shipap.co.il/articles/${id}/talkbacks?token=d2988c4d-3431-11ee-b3e9-14dda9d4a5f0`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  };

  const handelInput = (ev) => {
    const { name, value } = ev.target;
    const obj = {
      ...comment,
      [name]: value,
    };
    SetComment(obj);
    console.log(comment);
  };
  return (
    <div className="articles">
      {newsPage ? (
        <div className="Card">
          <div
            className="card-img"
            style={{ backgroundImage: `url('${newsPage.imgUrl}')` }}
          ></div>
          <h4>{newsPage.headline}</h4>
          <h4>{newsPage.description}</h4>
          <h4>{newsPage.publishDate}</h4>
          <form onSubmit={publishComment}>
            <label>
              name
              <input
                type="text"
                name="name"
                value={comment.name}
                onChange={handelInput}
              />
            </label>
            <label>
              comment
              <input
                type="text"
                name="comment"
                value={comment.comment}
                onChange={handelInput}
              />
            </label>
            <button>Add Comment</button>
          </form>
          <Link to={"/"}>
            <button>חזרה</button>
          </Link>
        </div>
      ) : (
        <p>טוען</p>
      )}
    </div>
  );
}
