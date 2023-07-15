/*
import React, { useState } from "react";
import Table from "./components/table/table";
import History from "./components/history/history";

import "./main.scss";



const App = () => {
  const [tableData, setTableData] = useState({
    gameBoard: Array(9).fill(null),
    currentPlayer: "X",
    winner: null,
    moveHistory: [],
  });

  const handleTableReset = () => {
    setTableData({
      gameBoard: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
      moveHistory: [],
    });
  };

  const handleTableDataUpdate = (updatedData) => {
    setTableData(updatedData);
  };

  return (
    <div className="container">
      <div className="box">
        <Table
          data={tableData}
          onReset={handleTableReset}
          onUpdate={handleTableDataUpdate}
        />
        <History />
      </div>

    </div>

  );
};

export default App;
*/
import React, { useState } from "react";
import "./main.scss";
import Table from "./components/table/table";
import History from "./components/history/history";

const App = () => {
  const [tableData, setTableData] = useState({
    gameBoard: Array(9).fill(null),
    currentPlayer: "X",
    winner: null,
    moveHistory: [],
  });

  const handleTableReset = () => {
    setTableData({
      gameBoard: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
      moveHistory: [],
    });
  };

  const handleTableUpdate = (updatedData) => {
    setTableData(updatedData);
  };

  const handleHistory = (history) => {
    setTableData((prevState) => ({
      ...prevState,
      moveHistory: history,
    }));
  };

  return (
    <div className="container">
      <div className="box">
        <Table
          data={tableData}
          onReset={handleTableReset}
          onUpdate={handleTableUpdate}
          onHistory={handleHistory}
        />
        <History historyData={tableData.moveHistory} />
      </div>
    </div>
  );
};

export default App;
