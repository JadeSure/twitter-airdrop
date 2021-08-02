require('dotenv').config()
const axios = require("axios");
const bearer_token = process.env.bearer_token

const url = id => {
    return `https://api.twitter.com/2/tweets/${id}/retweeted_by`
}



const getRetweetedUsers = async (tweetID, userName) => {
    const config = {
        headers: { Authorization: `Bearer ${bearer_token}` }
    };

    const { data } = await axios.get(url(tweetID), config)
    tempArray = []
    rawData = data.data
    // console.log(rawData)
    for (let i in rawData) {
        let tempName = rawData[i].name
        // console.log(">>>>>>", tempName)
        // tempArray.push(tempName)

        if (userName === tempName) {
            // console.log(userName)
            return true
        }
    }
    return false
}

async function init(tweetID, userName) {
    return await getRetweetedUsers(tweetID, userName)
    // console.log(getRetweetedUsers(tweetID, userName))
}
console.log(init("1395016666249981956", "Shawn Wang"))
// init("1395016666249981956", "Shawn Wang")