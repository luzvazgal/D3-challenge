// @TODO: YOUR CODE HERE!

//Getting data from CSV file
d3.csv("assets/data/data.csv").then(function(state){
    console.log(state)
})
.catch(e=> console.log(e))