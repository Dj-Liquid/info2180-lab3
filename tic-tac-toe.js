"use strict";

let turn = 0;
var gameState = [[null, null, null], [null, null, null], [null, null, null]];
var play = true;

function CreateGrid()
{
	let squares = document.querySelectorAll('#board div');
	squares.forEach(function(elem, index){
		elem.classList.add('square');
		elem.addEventListener('click', function() {
            Play(elem, index);
        });
		elem.addEventListener('mouseover',function()  {
			elem.classList.add('hover');
		});
		elem.addEventListener('mouseout',function()  {
			elem.classList.remove('hover');
		});
	});
}

function Play(elem, index)
{
	const row = Math.floor(index / 3);
    const col = index % 3;
	
	
	if (gameState[row][col] == null && play) {
        if (turn % 2 == 0) {
            elem.classList.add('X');
			elem.innerHTML = "X";
            gameState[row][col] = 'X'; 
        } else {
            elem.classList.add('O');
			elem.innerHTML = "O";
            gameState[row][col] = 'O'; 
        }
		Check();
        turn++;
		
    }
	
}

function Check()
{
	let statusdiv = document.querySelector('#status');
	var letter = 'X';
		if (turn % 2 == 1)
		{
			letter = 'O';
		}
	if (CheckWinner(gameState, letter)) 
	{
		play = false;
		statusdiv.classList.add('you-won')
		statusdiv.innerHTML = 'Congratulations! '+letter+' is the winner!';
	}
	if (turn == 8)
	{
		statusdiv.innerHTML = 'The Game is a Draw';
	}
}

function CheckWinner(gameState, letter) {
    const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]], 
        [[1, 0], [1, 1], [1, 2]], 
        [[2, 0], [2, 1], [2, 2]], 
        [[0, 0], [1, 0], [2, 0]], 
        [[0, 1], [1, 1], [2, 1]], 
        [[0, 2], [1, 2], [2, 2]], 
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
    ];

    return winningCombinations.some(combination => 
        combination.every(([row, col]) => gameState[row][col] === letter)
    );
}

function Reset()
{
	turn = 0
	gameState = [[null, null, null], [null, null, null], [null, null, null]];
	play = true;
	let statusdiv = document.querySelector('#status');
	statusdiv.classList.remove('you-won')
	statusdiv.innerHTML = 'Move your mouse over a square and click to play an X or an O.';
	
	let squares = document.querySelectorAll('#board div');
    squares.forEach(function(elem) {
        elem.classList.remove('X', 'O', 'square'); 
		elem.innerHTML = "";
    });
	CreateGrid();
}


document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.btn');
	btn.addEventListener('click', Reset);
    Reset();

	
	
	
});
