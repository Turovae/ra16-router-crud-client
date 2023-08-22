function NewPost() {
  return (
    <form className="post-new">
      <div className="post-control">
        <button className="btn btn-icon">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="post-input">
        <div className="post-img"></div>
        <input className="post-textarea" placeholder="Введите текст" />
      </div>
      <div className="post-control bottom">
        <button type="submit" className="btn">
          Опубликовать
        </button>
      </div>
    </form>
  );
}

export default NewPost;
