function App() {
    const tweets = [
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
      ];
    return (
        <div>
            <Timeline tweets={tweets}/>
        </div>
    );
}

const target = document.querySelector("#app");
ReactDOM.render(<App/>, target)