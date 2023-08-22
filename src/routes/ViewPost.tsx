function ViewPost({ created, body }: { created: string; body: string }) {
  return (
    <div className="post-view">
      <div className="post">
        <div className="post-header">
          <span className="post-author">No Name</span>{" "}
          <span className="post-created">{created}</span>
        </div>
        <div className="post-content">{body}</div>
      </div>
      <form className="post-control bottom">
        <button type="submit" className="btn">
          Изменить
        </button>
        <button type="button" className="btn btn-delete">
          Удалить
        </button>
      </form>
    </div>
  );
}

export default ViewPost;
