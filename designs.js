
// When size is submitted by the user, call makeGrid()
function init(){
  document.querySelector('#sizePicker').addEventListener('submit', makeGrid);
}

//this function builds the grid according to the size the user entered
function makeGrid(event) {

  event.preventDefault();

  //clear table
  var table = document.querySelector('#pixelCanvas');
  while(table.firstChild) {
    table.removeChild(table.firstChild);
  }

  //get the height and width as strings and convert them to numbers
  var height = parseInt(document.querySelector('#inputHeight').value);
  var width = parseInt(document.querySelector('#inputWidth').value);

  //nested for loop to construct the table
  for (let i = 0; i < height; i++) {
    //create the line element
    var line = document.createElement('tr');

    for (let j = 0; j < width; j++) {
      //create the pixel element
      var pixel = document.createElement('td');
      //append pixel to line
      line.appendChild(pixel);
      //add an event listner to color the pixel when clicked
      pixel.addEventListener('click', colorPixel)
    }
    //append line to table
    table.appendChild(line);
  }
}

//this function colors the pixel according to the color selected in the colorPicker
function colorPixel(event) {
 var color = document.querySelector('#colorPicker').value;
 event.target.style.backgroundColor = color;
}

document.addEventListener('DOMContentLoaded', init);
