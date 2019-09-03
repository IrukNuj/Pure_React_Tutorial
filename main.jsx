function App() {
    const [tweets, setTweets] = React.useState([
        {
          id: 0,
          icon: '33862939.jpeg',
          displayName: 'いるく',
          accountName: 'IrukNuj',
          content: '女子力'
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