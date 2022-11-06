///track your favorite crypto prices and news
//using cryptopanic api
//sign up
//login
//allow user to select their favorite crypto
//add preferences to user collection
//fetch news from collection and put it into api
//display news in the dom 
//button to add or remove a crypto from the watch list
//if there's time, i would like to try to make a preference value. allow the user to select what crypto is more important and display that first. maybe have an array of arrays with both crypto name and preference. 

//what do the collections look like
//user
//crypto1
//crypto2
//crypto3




fetch("https://shrouded-earth-88247.herokuapp.com/https://cryptopanic.com/api/v1/posts/?auth_token=013235c06f6bf2698e72deaad82515ba4d1156cb&currencies=BTC,ETH,DOT,DOGE,ADA,SOL&filter=hot")
.then(res => res.json()) // parse response as JSON
.then(data => {

    // Place into the DOM
    console.log(data)

})
.catch(err => {
    console.log(`error ${err}`)
});