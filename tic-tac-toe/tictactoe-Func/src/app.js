import React from "react";
import Table from "./components/table/table";
import History from "./components/history/history";

import "./main.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="box">
          <Table />
          <History />
        </div>
      </div>
    );
  }
}
