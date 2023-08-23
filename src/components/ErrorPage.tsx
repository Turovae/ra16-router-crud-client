import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as { statusText: string; message: string };

  return (
    <div id="error-page">
      <h1>Ой!!!</h1>
      <p>Что-то пошло не так!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
