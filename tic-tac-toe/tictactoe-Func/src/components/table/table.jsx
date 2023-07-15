
import React from "react";
import "./table.scss";

const Table = ({ data, onReset, onUpdate, onHistory }) => {
    const { gameBoard, currentPlayer, winner, moveHistory } = data;

    const handleReset = () => {
        if (typeof onReset === "function") {
            onReset();
        }
    };

    const handleClick = (index) => {
        if (!winner && !gameBoard[index]) {
            const updatedGameBoard = [...gameBoard];
            updatedGameBoard[index] = currentPlayer;
            const newMoveHistory = [...moveHistory, updatedGameBoard];

            if (typeof onUpdate === "function") {
                onUpdate({
                    currentPlayer: currentPlayer === "X" ? "O" : "X",
                    gameBoard: updatedGameBoard,

                    winner,
                    moveHistory: newMoveHistory,
                });
            }
            checkWinner(updatedGameBoard);

        }
    };

    const handleHistory = () => {
        if (typeof onHistory === "function") {
            onHistory(moveHistory);
        }
    };

    const checkWinner = (board) => {
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

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                if (typeof onUpdate === "function") {
                    onUpdate({
                        gameBoard,
                        currentPlayer,
                        winner: board[a],
                        moveHistory,
                    });
                } return;

            }
        }
    };

    return (
        <div className="table1">
            <div className="table">
                {gameBoard.map((value, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className="tableBox"
                    >
                        {value}
                    </div>
                ))}

            </div>
            <div className="tab">
                <button className="btn btn-danger" onClick={handleReset}>Restart</button>
                <p className="winner">Winner: {winner ? winner : "None"}</p>

            </div>
        </div>
    );
};

export default Table;















/*import React, { useState } from "react";
import "./table.scss";

const Table = () => {
    const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [moveHistory, setMoveHistory] = useState([]);

    const handleReset = () => {
        setGameBoard(Array(9).fill(null));
        setCurrentPlayer("X");
        setWinner(null);
        setMoveHistory([]);
    };

    const handleClick = (index) => {
        console.log(moveHistory);
        if (!winner && !gameBoard[index]) {
            const updatedGameBoard = [...gameBoard];
            updatedGameBoard[index] = currentPlayer;
            const newMoveHistory = [...moveHistory, updatedGameBoard];

            setGameBoard(updatedGameBoard);
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
            setMoveHistory(newMoveHistory);

            checkWinner(updatedGameBoard);
        }
    };

    const checkWinner = (board) => {
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

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                return;
            }
        }
    };

    return (
        <div className="big">
            <div className="table">
                {gameBoard.map((value, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className="tableBox"
                    >
                        {value}
                    </div>
                ))}

            </div><div className="tab">
                <button className="btn btn-danger" onClick={() => handleReset()}>Restart</button>
                <p className="winner">Winner: {winner ? winner : "None"}</p>
            </div></div>
    );
};

export default Table;
*/
/*
import React, { Component } from "react";
import "./table.scss";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameBoard: Array(9).fill(null),
            currentPlayer: "X",
            winner: null,
            moveHistory: [],
        };
    }

    handleReset() {
        this.setState({
            gameBoard: Array(9).fill(null),
            currentPlayer: "X",
            winner: null,
            moveHistory: [],
        });
    }

    handleClick(index) {
        const { gameBoard, currentPlayer, winner, moveHistory } = this.state;

        if (!winner && !gameBoard[index]) {
            const updatedGameBoard = [...gameBoard];
            updatedGameBoard[index] = currentPlayer;
            const newMoveHistory = [...moveHistory, updatedGameBoard];

            this.setState(
                {
                    gameBoard: updatedGameBoard,
                    currentPlayer: currentPlayer === "X" ? "O" : "X",
                    moveHistory: newMoveHistory,
                },
                () => {
                    this.checkWinner();
                }
            );
        }
    }

    checkWinner() {
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
    }

    render() {
        const { gameBoard, currentPlayer, winner } = this.state;

        return (
            <div className="table">
                {gameBoard.map((value, index) => (
                    <div
                        key={index}
                        onClick={() => this.handleClick(index)}
                        className="tableBox"
                    >
                        {value}
                    </div>
                ))}
                <div className="tab">
                    <button onClick={() => this.handleReset()}>Restart</button>
                    <p>Winner: {winner ? winner : "None"}</p>
                </div>
            </div>
        );
    }
}

export default Table;
*/


