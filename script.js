//reference the container
const container = document.getElementById("container")
//create array of colors
const colors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]

//how many squares do i want?
const SQUARES = 500

//now we create the squares using for loop

for(let i = 0; i < SQUARES; i++){
	//reference the squares & make a DIV
	const square = document.createElement("div")
	//add the class to the DIV
	square.classList.add("square")

	//event listener so when you hover it changes color
	square.addEventListener("mouseover", () => setColor(square))
	//event listener for when we leave a square
	square.addEventListener("mouseout", () => removeColor(square))

	//append it to the container
	container.appendChild(square)

}

function setColor(element){
	//we need to have a function to get random color
	const color = getRandomColor()
	//now we set it to the square
	element.style.background = color

}

function removeColor(element){
	element.style.background = "#1d1d1d"
}

function getRandomColor(){
		//picks random colors from the array 
	return colors [Math.floor(Math.random() * colors.length)]
}