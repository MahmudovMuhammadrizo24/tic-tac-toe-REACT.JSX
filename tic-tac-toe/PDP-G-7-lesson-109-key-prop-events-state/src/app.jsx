import React from "react";
import Counter from "./components/counter";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
		}
	}

	render() {

		return (
			<div className="container">
				<Counter />
			</div>


		);
	}
}

export default App;

/*
Incriment = () => {
	this.setState(prevState => ({
		counter: prevState.counter + 1,
	}))
}*/