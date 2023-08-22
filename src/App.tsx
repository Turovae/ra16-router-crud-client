import moment from "moment";

import Root from "./routes/Root";
import NewPost from "./routes/NewPost";
import ViewPost from "./routes/ViewPost";
import EditPost from "./routes/EditPost";
import { Route, Routes } from "react-router-dom";

moment.locale("ru", {
  months: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ],
});

const getDate = (): string => {
  const date = new Date();
  return moment(date).format("HH:mm DD MMMM YYYY");
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="posts/new" element={<NewPost />} />
        <Route
          path="posts/:id"
          element={<ViewPost created={getDate()} body="Третий пост" />}
        />
        <Route
          path="posts/:id/edit"
          element={<EditPost body="Редактируемый пост" />}
        />
      </Routes>
    </div>
  );
}

export default App;
