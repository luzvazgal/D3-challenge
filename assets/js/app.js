// @TODO: YOUR CODE HERE!

/* SVG OBJECT */
// Settting up svg canvas size
let svgWidth = 960
let svgHeight = 400

//Create SVG object
let svg = d3.select('#scatter').append('svg').attr("height", svgHeight).attr("width", svgWidth)


/* SCATTER PLOT */
//Setting up where the scatter plot (an SVG chart group object) will be located
let margin = {
    top: 20,
    right: 40,
    bottom: 60,
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

   
  
  //Storing values from data in arrays
   /* states.forEach(state =>{
        //x_poverty.push(parseInt(state.poverty));
        x_age.push(parseInt(state.age));
        //x_income.push(parseInt(state.income));
        //y_obese.push(parseInt(state.obese));
        y_smokes.push(parseInt(state.smokes));
        //y_healthcare.push(parseInt(state.healthcare));

    });*/


    //Draw x axis
    let x_axis = d3.scaleLinear()
      .domain(d3.extent(states, function(state) { return parseInt(state.age); }))
      .range([ 0, width ]);

      svg.append("g")
      .attr("transform", "translate(20," + height + ")")
      .call(d3.axisBottom(x_axis));


    /*chartGroup
        .append("path")
        .attr("d", line1(donutData))
        .attr("class","line green")*/

   
    
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