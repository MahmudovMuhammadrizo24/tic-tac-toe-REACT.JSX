

import React from "react";
import "./history.scss";
const History = ({ historyData }) => {
    return (
        <div className="history">
            <h4 className="gameHistory">Move History</h4>
            <div className="btnBox">
                {historyData.map((data, index) => (
                    <button className="btn btn-outline-primary" key={index}>
                        Move {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default History;
