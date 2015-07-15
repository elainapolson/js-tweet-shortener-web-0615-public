'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.replace(/ hello /g, " hi ").replace(/ to /g, " 2 ").replace(/ two /g, " 2 ").replace(/ too /g, " 2 ").replace(/ for /gi, " 4 ").replace(/ four /g, " 4 ").replace(/ be /g, " b ").replace(/ you /g, " u ").replace(/ at /g, " @ ").replace(/ and /g, " & ");
  },
  bulkShortener: function(tweets){
    var shortTweetArray = new Array();
    tweets.forEach(function(tweet){
      shortTweetArray.push(tweetShortener.wordSubstituter(tweet));
    })
    return shortTweetArray;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length > 140) {
      if (tweetShortener.wordSubstituter(tweet).length > 140) {
        return tweetShortener.wordSubstituter(tweet).substring(0, 137) + "..."
      } else {
        return tweetShortener.wordSubstituter(tweet)
      }
    } else {
      return tweet
    }
  },
};