
function load_csv() {
    d3.csv("./cities.csv", data => console.log(data));
}

var json_data = 0;

function load_json() {
    d3.json("./tweets.json").then(function (data) {
        var tweetData = data.tweets;
        //var nestedTweets = d3.nest().key(d => d.user).entries(tweetData);
        console.log(data.tweets);
        //console.log(nestedTweets);
    });
}

d3.json("users.json").then(function (data) {
    var tweetData = data;
    // var nestedTweets = d3.nest().key(d => d.user).entries(tweetData);
    console.log(data);
    // console.log(nestedTweets)
});

// d3.csv("./cities.csv", data => console.log(data));

// load_csv();