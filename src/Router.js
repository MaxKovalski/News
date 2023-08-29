import GetNews from "./News/GetNews";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./News/NewsPage";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<GetNews />}></Route>
      <Route path="/article/:id" element={<NewsPage />}></Route>
    </Routes>
  );
}
