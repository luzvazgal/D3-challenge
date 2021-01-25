// @TODO: YOUR CODE HERE!

/* SVG OBJECT */
// Settting up svg canvas size
let svgWidth = 600
let svgHeight = 400

//Create SVG object
let svg = d3.select('#scatter').append('svg').attr("height", svgHeight).attr("width", svgWidth)


/* SCATTER PLOT */
//Setting up where the scatter plot (an SVG chart group object) will be located
let margin = {
    top: 10,
    right: 40,
    bottom: 40,
    left: 50
}

//Chart width and height
let width = svgWidth - margin.left - margin.right
let height = svgHeight - margin.top - margin.bottom

//Axis of Scatter plot chart
let chartGroup = svg.append("g")
    .attr("transform",`translate(${margin.left}, ${margin.top})`)


//Retrieing data from CSV file
d3.csv("assets/data/data.csv").then(function(states){
    //Creating arrays to store values from data
   //let x_poverty = []
   let x_age = []
   //let x_income = []
   
   //let y_obese = []
   let y_smokes = []
   //let y_healthcare = []

  
   console.log(states)

    //Draw X axis
    let x_axis = d3.scaleLinear()
      .domain(d3.extent(states, function(state) { return parseFloat(state.income); }))
      .range([ 0, width ]);

      chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x_axis));

    //Label for X axis
    chartGroup.append("text")
    .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
    .attr("class", "aText")
    .text("Annual Income");

    //Draw Y axis
    let y_axis = d3.scaleLinear()
      .domain([0, d3.max(states, function(state) { return + parseFloat(state.obesity); })])
      .range([ height, 0]);

      chartGroup.append("g")
      .call(d3.axisLeft(y_axis));

    //Label for Y axis
    chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .attr("class", "aText")
    .text("Obesity");


      //Adding scatter plots to chart using SVG circle'
      let scatters = chartGroup.append("g")

      scatters.selectAll("circle")
      .data(states)
      .enter()
      //.append("path")
      .append("circle")
      .attr("cx", state => x_axis(state.income))
      .attr("cy", state => y_axis(state.obesity) )
      .attr("r", 13)
      .attr('class', 'stateCircle')
      

      //Adding text to circles
      scatters.selectAll("text")
      .data(states)
      .enter()
      .append("text")
      .attr("x", state => x_axis(state.income))
      .attr("y", state => y_axis(state.obesity) )
      .text(state=>state.abbr)
      .attr("class", "stateText")

})
.catch(e=> console.log(e))

/**
 * As per lack of imagination of which variables are chosen to create scatter plot, they are divided into x and y axis values.
 * This function will choose randomly an 'x, y' couple to build a plot
 */
/*function choose_xy_variables(){
let random_x
let random_y


}*/

/**
 * Draw scatter plot Income vs Smokes
 */
function paint_plot(){
    d3.select('scatter')
    
   
}