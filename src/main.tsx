import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const BASENAME = import.meta.env.VITE_PUBLIC_BASENAME || "/";

import Root, { loader as rootLoader } from "./routes/Root.tsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.tsx";
import ViewPost, {
  loader as viewPostLoader,
  action as viewPostAction,
} from "./routes/ViewPost.tsx";
import EditPost, { action as editPostAction } from "./routes/EditPost.tsx";
import ErrorPage from "./components/ErrorPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<Root />} loader={rootLoader} />
      <Route path="posts/new" element={<NewPost />} action={newPostAction} />
      <Route
        path="posts/:id"
        element={<ViewPost />}
        loader={viewPostLoader}
        action={viewPostAction}
      />
      <Route
        path="posts/:id/edit"
        element={<EditPost />}
        action={editPostAction}
      />
    </Route>
  ),
  {
    basename: BASENAME,
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="app">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
