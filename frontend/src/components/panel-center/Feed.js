import React, { useState, useEffect } from 'react';
import Tweet from './Tweet';

const Feed = () => {
    const [tweets, setTweets] = useState([]);

    // get tweets from server; will move this to a utils/actions file if we need to reuse
    const getAllTweets = () => {
        return fetch('/api/list-tweets')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setTweets(data);
        })
    };

    useEffect(() => {
        getAllTweets()
    }, []);

    const renderAllTweets = () => {
        if (tweets.length){
          return (
            tweets.map((tweet) => {
              return <Tweet {...tweet} />
            })
          );
        } else {
          return <h1>Loading tweets...</h1>;
        }
    }

    return (
        <div id="feed"> 
        {renderAllTweets()}
        </div>
    );
}

export default Feed;

