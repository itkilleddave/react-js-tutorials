export function fetchTweets() {
  return {
    type: "FETCH_TWEETS_FULFILLED",
    payload: [
      {
        id: 456,
        text: "this is tweet number 1",
      },
      {
        id: 457,
        text: "this is tweet number 2",
      },
      {
        id: 458,
        text: "this is tweet number 3",
      },
    ]
  }
}