import React from "react";
import "./counter.scss";

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPlayer: "X",
			gameBoard: Array(9).fill(""),
			winner: null,
			moveHistory: [],
		};
	}

	handleClick = (index) => {
		const { currentPlayer, gameBoard, winner } = this.state;
		if (!winner && gameBoard[index] === "") {
			const newGameBoard = [...gameBoard];
			newGameBoard[index] = currentPlayer;
			const newMoveHistory = [...this.state.moveHistory, newGameBoard];

			this.setState(
				{
					currentPlayer: currentPlayer === "X" ? "O" : "X",
					gameBoard: newGameBoard,
					moveHistory: newMoveHistory,
				},
				() => {
					this.checkWinner();
				}
			);
			console.log(newMoveHistory);
		}
	};

	checkWinner = () => {
		const { gameBoard } = this.state;
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < winningCombinations.length; i++) {
			const [a, b, c] = winningCombinations[i];
			if (
				gameBoard[a] &&
				gameBoard[a] === gameBoard[b] &&
				gameBoard[a] === gameBoard[c]
			) {
				this.setState({
					winner: gameBoard[a],
				});
				return;
			}
		}
	};
	handleRestart = () => {
		this.setState({
			currentPlayer: "X",
			gameBoard: Array(9).fill(""),
			winner: null,
		});
	};

	render() {
		const { currentPlayer, gameBoard, winner } = this.state;

		return (


			<div className="cont">
				<div className="big">
					<div className="game-board">

						<div onClick={() => this.handleClick(0)} className="box">
							{gameBoard[0]}
						</div>
						<div onClick={() => this.handleClick(1)} className="box">
							{gameBoard[1]}
						</div>
						<div onClick={() => this.handleClick(2)} className="box">
							{gameBoard[2]}
						</div>
						<div onClick={() => this.handleClick(3)} className="box">
							{gameBoard[3]}
						</div>
						<div onClick={() => this.handleClick(4)} className="box">
							{gameBoard[4]}
						</div>
						<div onClick={() => this.handleClick(5)} className="box">
							{gameBoard[5]}
						</div>
						<div onClick={() => this.handleClick(6)} className="box">
							{gameBoard[6]}
						</div>
						<div onClick={() => this.handleClick(7)} className="box">
							{gameBoard[7]}
						</div>
						<div onClick={() => this.handleClick(8)} className="box">
							{gameBoard[8]}
						</div>
					</div>
					<button onClick={this.handleRestart} className="btn btn-danger">restart</button>
				</div>



				<div className="game-info">
					{winner && <div className="winner">Winner: {winner}</div>}
				</div>



			</div>
		);
	}
}

export default Counter;
