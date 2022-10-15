"use strict";
onload = function()
{
	let board = document.getElementById("board");
    let gameboard = board.querySelectorAll("div");
    const newGame = document.querySelector(".btn");
    let play = true;
	let turn = 0;
	newGame.addEventListener("click", e =>
	{
		location.reload();
	}
	);
	
	let grid=[["","",""],["","",""],["","",""]];
	
	function check(letter)
	{
		let count=0;
		if((grid[0][0]==grid[0][1] && grid[0][1]==grid[0][2] && grid[0][0]===letter) || (grid[1][0]==grid[1][1] && grid[1][1]==grid[1][2] && grid[1][1]===letter) || (grid[2][0]==grid[2][1] && grid[2][1]==grid[2][2] && grid[2][2]===letter) || (grid[0][0]==grid[1][0] && grid[1][0]==grid[2][0] && grid[0][0]===letter) || (grid[0][1]==grid[1][1] && grid[1][1]==grid[2][1] && grid[1][1]===letter) || (grid[0][2]==grid[1][2] && grid[1][2]==grid[2][2] && grid[2][2]===letter) || (grid[0][0]==grid[1][1] && grid[1][1]==grid[2][2] && grid[0][0]===letter) || (grid[0][2]==grid[1][1] && grid[1][1]==grid[2][0] && grid[1][1]===letter))
		{
			let sttus = document.getElementById("status");
			sttus.innerHTML = "Congratulations! "+letter+" is the winner!"; 
			sttus.classList.add("status", "you-won");
			play=false;
		}
		for(let i=0;i<3;i++)
		{
			for(let j=0;j<3;j++)
			{
				if(grid[i][j]==="")
				{
					count++;
				}
			}
		}
		if (count==0)
		{
			play=false;
		}
	}

	gameboard.forEach(function(elem, index) 
	{
		elem.setAttribute("class", "square");
		let row = Math.floor(index/3);
		let col = index % 3;
		elem.addEventListener("click", function()
		{
			if(turn%2==0 )
			{
				if(play==true)
				{
					elem.innerHTML="X";
					elem.classList.add("square", "X");
					turn++;
					grid[row][col]="X";
					check("X");
				}
			}
			else if(turn%2==1 )
			{
				if(play==true)
				{
					elem.innerHTML="O";
					elem.classList.add("square", "O");
					turn++;
					grid[row][col]="O";
					check("O");
				}
			}
		}); 
        
        elem.addEventListener("mouseover", function()
		{
            this.classList.add("hover");
        });

        elem.addEventListener("mouseout", function()
		{
            this.classList.remove("hover");
        });
    });
}