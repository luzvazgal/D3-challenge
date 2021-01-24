// @TODO: YOUR CODE HERE!

// Settting up svg canvas size
let svgWidth = 960
let svgHeight = 500

//Create SVG object
d3.select('#scatter').append('svg').attr("height", svgHeight).attr("width", svgWidth)


//Setting up where the scatter plot (an SVG chart group object) will be located
let margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 50
}

let width = svgWidth - margin.left - margin.right
let height = svgHeight - margin.top - margin.bottom


   //Creating arrays to store values from data
   //let x_poverty = []
   let x_age = []
   //let x_income = []
   
   //let y_obese = []
   let y_smokes = []
   //let y_healthcare = []

//Retrieing data from CSV file
d3.csv("assets/data/data.csv").then(function(states){
  
  //Storing values from data in arrays
    states.forEach(state =>{
        //x_poverty.push(parseInt(state.poverty));
        let x_age = x_age.push(parseInt(state.age));
        //x_income.push(parseInt(state.income));
        //y_obese.push(parseInt(state.obese));
        let y_smokes = y_smokes.push(parseInt(state.smokes));
        //y_healthcare.push(parseInt(state.healthcare));

        
        

    });




    //Building Plot Income vs Smokes
    paint_plot();

    
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