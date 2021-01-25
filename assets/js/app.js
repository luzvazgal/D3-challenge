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
      .domain(d3.extent(states, function(state) { return parseFloat(state.age); }))
      .range([ 0, width ]);
      //.range([margin.left, width - margin.right]);

      chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x_axis));

    //Draw Y axis
    let y_axis = d3.scaleLinear()
      .domain([0, d3.max(states, function(state) { return + parseFloat(state.smokes); })])
      .range([ height, 0]);
      //.range([height - margin.bottom, margin.top])

      chartGroup.append("g")
      //.attr("transform", "translate(100,10)")
      .call(d3.axisLeft(y_axis));


      let shape = d3.scaleOrdinal(states.map(state => state.age), d3.symbolCircle)

      svg.append("g")
      //.attr("stroke-width", 1.5)
      //.attr("font-family", "sans-serif")
      //.attr("font-size", 10)
      .selectAll("path")
      .data(states)
      .enter()
      .append("path")
      .attr("transform", state => `translate(${x_axis(state.age)},${y_axis(state.smokes)})`)
      //.attr("moveTo", state=>`${state.age},${state.smokes}`)
      .attr('d', state=>shape(parseFloat(state.age) ))
      //.attr("transform", state => `translate(${state.age},${state.smokes})`)
      //.attr("d", state => moveTo(state.age,state.smokes))
      //.append(d3.symbol().type(d3.symbolCircle))
      
      //.attr("fill", d => color(d.category))*/
    
      //Draw scatter using circles 
     // let circles = d3.symbol().type(d3.symbolCircle)
    /* chartGroup.append("g")
     .selectAll("circle")
     .data(states).enter()
     .append("circle")
     .attr("cx", state=> parseFloat(state.age))
     .attr("cy", state=> parseFloat(state.smokes))
     .attr("r", 6)       */        
    


      
      
   
    
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