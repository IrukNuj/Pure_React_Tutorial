function App() {
    return (
        <div>
            <Tweet 
                icon="33862939.jpeg"
                displayName="いるく"
                accountName="iruk"
                content="hogehoge"
            />
            <Tweet 
                icon="33862939.jpeg"
                displayName="エビデンス"
                accountName="evidence"
                content="かにみそたべたい"
            />
        </div>
    );
}

const target = document.querySelector("#app");
ReactDOM.render(<App/>, target)