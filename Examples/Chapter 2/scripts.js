
function load_csv() {
    d3.csv("./cities.csv", data => console.log(data));
}

function load_json() {
    d3.json("./tweets.json", data => console.log(data));
}

