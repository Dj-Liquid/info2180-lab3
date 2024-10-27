"use strict";

function CreateGrid()
{
	let squares = document.querySelectorAll('#board div');
	squares.forEach(function(elem, index){
		elem.classList.add('square');
		elem.addEventListener('click', Play);
	});
}

function Play()
{
	const turn = 0;
	console.log('Play');
}

function Reset()
{
	CreateGrid();
}


document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', Reset);
    Reset();

	
	
	
});
