
// var Twitter = require('twitter');



// var client = new Twitter({
//   consumer_key: process.env.consmer_key,
//   consumer_secret: process.env.consumer_secret,
//   access_token_key: process.env.access_token_key,
//   access_token_secret: process.env.access_token_secret,

//   bearer_token: process.env.bearer_token
// });

// function userCheck(screenName) {
//   // try {
//   const res = client.get('users/lookup', { screen_name: screenName })
//   console.log(res)
//   //   return true;
//   // } catch (err) {
//   //   return false
//   // }
//   // let status;
// }


// userCheck("ShawnWa29087376")




require('dotenv').config()
const axios = require("axios");
const bearer_token = process.env.bearer_token

const userName = screenName => {
  return `https://api.twitter.com/1.1/users/lookup.json?screen_name=${screenName}`
}

const getRetweetedUsers = async (screenName) => {
  const config = {
    headers: { Authorization: `Bearer ${bearer_token}` }
  };

  try {
    const { data } = await axios.get(userName(screenName), config)
    return true
  } catch (error) {
    return false
  }
  // console.log(">>>>>>>>>>>>", data)

}

async function init(userName) {
  let res = await getRetweetedUsers(userName)
  console.log(res)
  return res
}

console.log(init("ShawnWa29087376"))
