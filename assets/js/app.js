// @TODO: YOUR CODE HERE!

   //Creating arrays to store values from data
   let x_poverty = []
   let x_age = []
   let x_income = []
   
   let y_obese = []
   let y_smokes = []
   let y_healthcare = []

//Retrieing data from CSV file
d3.csv("assets/data/data.csv").then(function(states){
   // console.log(states)
  //Storing values from data in arrays
    states.forEach(state =>{
        x_poverty.push(parseInt(state.poverty));
        x_age.push(parseInt(state.age));
        x_income.push(parseInt(state.income));
        y_obese.push(parseInt(state.obese));
        y_smokes.push(parseInt(state.smokes));
        y_healthcare.push(parseInt(state.healthcare));
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

    console.log(x_income)
    console.log(y_smokes)
    var trace1 = {
        x: x_income,
        y: y_smokes,
        mode: 'markers',
        type: 'scatter',
        /*text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
        textposition: 'top center',
        textfont: {
          family:  'Raleway, sans-serif'
        },
        marker: { size: 12 }*/
      };

      var data = [ trace1 ];

      /*var layout = {
        xaxis: {
          domain: [0, Math.max(x_income)],
          range: [ 0, 25 ]
        },
        yaxis: {
          domain: [0, Math.max(y_smokes)],
          range: [0, 10]
        },
        /*legend: {
          y: 0.5,
          yref: 'paper',
          font: {
            family: 'Arial, sans-serif',
            size: 20,
            color: 'grey',
          }
        },
        title:'Data Labels on the Plot'
      };*/
      
      Plotly.newPlot('scatter', data);
}