import React, { Component } from "react";
import "./table.scss";

class Table extends Component {


    constructor(props) {
        super(props);
        this.state = {
            gameBoard: Array(9).fill(null),
            currentPlayer: "X",
        };
    }

    handleClick(index) {
        const { gameBoard, currentPlayer } = this.state;

        if (gameBoard[index] === null) {
            const updatedGameBoard = [...gameBoard];
            updatedGameBoard[index] = currentPlayer;

            this.setState({
                gameBoard: updatedGameBoard,
                currentPlayer: currentPlayer === "X" ? "O" : "X",
            });
        }
    }
    render() {
        const { gameBoard } = this.state; // Removed the extra ".table" from the state destructuring

        return (
            <div className="table">
                {gameBoard.map((value, index) => (
                    <div key={index} onClick={() => this.handleClick(index)} className="tableBox">
                        {value}
                    </div>
                ))}
            </div>

        );
    }
}

export default Table;
