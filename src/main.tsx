import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// import moment from "moment";

// moment.locale("ru", {
//   months: [
//     "января",
//     "февраля",
//     "марта",
//     "апреля",
//     "мая",
//     "июня",
//     "июля",
//     "августа",
//     "сентября",
//     "октября",
//     "ноября",
//     "декабря",
//   ],
// });

// const getDate = (): string => {
//   const date = new Date();
//   return moment(date).format("HH:mm DD MMMM YYYY");
// };

import Root, { loader as rootLoader } from "./routes/Root.tsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.tsx";
import ViewPost, { loader as viewPostLoader } from "./routes/ViewPost.tsx";
import EditPost from "./routes/EditPost.tsx";
import ErrorPage from "./components/ErrorPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<Root />} loader={rootLoader} />
      <Route path="posts/new" element={<NewPost />} action={newPostAction} />
      <Route path="posts/:id" element={<ViewPost />} loader={viewPostLoader} />
      <Route
        path="posts/:id/edit"
        element={<EditPost body="Редактируемый пост" />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  <React.StrictMode>
    <div className="app">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
