import moment from "moment";

import Root from "./routes/Root";
import NewPost from "./routes/NewPost";
import ViewPost from "./routes/ViewPost";
import EditPost from "./routes/EditPost";

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
      <Root />
      <NewPost />
      <ViewPost
        created={getDate()}
        body="Третий пост, относящийся к курсу по React"
      />
      <EditPost body="Редактируемый пост" />
    </div>
  );
}

export default App;
