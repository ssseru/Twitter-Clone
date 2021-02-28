import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input 
                    className="tweetBox__imageInput"
                    placeholder="Optional:: Enter Image URL"
                    type="text"
                />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
