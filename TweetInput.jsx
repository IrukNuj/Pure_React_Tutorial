function TweetInput(props) {
    const textareaRef = React.useRef(null);
    const sendTweet = React.useCallback(() => {
        if(textareaRef.current) {
            props.addTweet({
                id: new Date().getTime(),
                icon: '33862939.jpeg',
                displayName: 'TweetKun',
                accountName: 'twetwe',
                content: textareaRef.current.value
            })
        }
    }, [textareaRef.current, props.addTweet]);

    return (
        <div>
            <div><textarea className="tweet-textarea" ref={textareaRef}></textarea></div>
            <div><button onClick={sendTweet} className="send-tweet">Tweet</button></div>
        </div>
    )
}