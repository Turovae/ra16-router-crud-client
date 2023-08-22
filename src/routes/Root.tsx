import Posts from "../components/Posts";

function Root() {
  return (
    <>
      <form className="menu">
        <button className="btn" type="submit">
          Создать пост
        </button>
      </form>
      <Posts />
    </>
  );
}

export default Root;
