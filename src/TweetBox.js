import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from "./firebase"


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Sai Sagar Seru",
            username: "ssseru",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
          });

          setTweetMessage("")
          setTweetImage("")
    }

    return (

        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
                    <input 
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type="text"
                        onChange={e => setTweetMessage(e.target.value)}
                    />
                </div>
                <input 
                value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional:: Enter Image URL"
                    type="text"
                    onChange={e => setTweetImage(e.target.value)}
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
