function Tweet(props) {
    const [liked, setLike] = React.useState(false);
    const toggleLike = React.useCallback(() => setLike((prev) => !prev), [setLike]);

    return (
        <div className="tweet">
        <div className="icon-container"><img src={props.icon} alt="" width="50" height="50"/></div>
        <div className="body-container">
          <div className="status-display">
            <span className="display-name">{props.displayName}</span>
            <span className="account-name">@{props.accountName}</span>
          </div>
          <div className="content">{props.content}</div>
          <div className="status-action">
          <span onClick={toggleLike}>{liked ? '❤️' : '♡'}</span>
        </div>
        </div>
      </div>
    );
}
