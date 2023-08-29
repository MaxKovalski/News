import { useContext, useEffect } from "react";
import { useState } from "react";
import "../Css/News.css";
import { generalContext } from "../App";
import Card from "../Components/Card";
export default function GetNews() {
  const [news, setNews] = useState([]);
  const { setLoader } = useContext(generalContext);
  useEffect(() => {
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/articles?token=d2988c4d-3431-11ee-b3e9-14dda9d4a5f0`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className="articles">
      {news.map((art) => (
        <div className="Cards" key={art.id}>
          <Card key={art.id} article={art} />
        </div>
      ))}
    </div>
  );
}
