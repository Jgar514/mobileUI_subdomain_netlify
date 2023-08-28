import React from "react";
import { BiRefresh } from "react-icons/bi";

const quotes = [
	{
		author: "Josh Garvey",
		quote: "I enjoy making web applications, challenging myself, and learning from others",
	},
	{
		author: "Josh Garvey",
		quote: "I live in Annapolis Maryland",
	},
	{
		author: "Josh Garvey",
		quote: "I'm a brother to 4 and an uncle to 6",
	},
	{
		author: "Josh Garvey",
		quote: "Most likely to be famous - 5th grade superlative",
	},
	{
		author: "Josh Garvey",
		quote: "2004 County Basketball Champion",
	},
];

export default class Quote extends React.Component {
	constructor(props) {
		super(props);
		this.sayHello = this.sayHello.bind(this);
		this.state = {
			quoteIdx: 0,
		};
	}
	sayHello() {
		this.setState({
			quoteIdx: Math.floor(Math.random() * quotes.length),
		});
	}

	render() {
		return (
			<div className="p-0 h-full flex   text-base">
				<div className="quote relative h-fit pt-2">
					<p>“{quotes[this.state.quoteIdx].quote}“</p>
				</div>
				<div className="flex justify-end">
					<button className="bg-transparent  text-red-600  text-2xl absolute right-2 bottom-0 h-fit" type="button" onClick={this.sayHello}>
						<BiRefresh className="" />
					</button>
				</div>
			</div>
		);
	}
}
