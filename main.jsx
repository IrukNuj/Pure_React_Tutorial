function App() {
    const [tweets, setTweets] = React.useState([
        {
          id: 0,
          icon: '33862939.jpeg',
          displayName: 'もろこし太郎',
          accountName: 'morokoshi',
          content: '今日も1日もろこしがうまい'
        },
        {
          id: 1,
          icon: '33862939.jpeg',
          displayName: 'エビデンス',
          accountName: 'evidence',
          content: 'かにみそたべたい'
        }
      ]);

    const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets])

    return (
        <div>
            <TweetInput addTweet={addTweet}/>
            <Timeline tweets={tweets}/>
        </div>
    );
}

const target = document.querySelector("#app");
ReactDOM.render(<App/>, target)