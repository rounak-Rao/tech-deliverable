import { useState, useEffect } from "react";
import Quote from "./components/Quote";
import Logo from "./components/Logo";
import "./App.css";

function App() {
	const [quotes, setQuotes] = useState([]);
	const [maxAge, setMaxAge] = useState("all");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const fetchQuotes = async () => {
		try {
			const response = await fetch(`/api/quotes?max_age=${maxAge}`);
			if (response.ok) {
				const data = await response.json();
				setQuotes(data);
			}
		} catch (error) {
			console.error("Error fetching quotes:", error);
		}
	};

	useEffect(() => {
		fetchQuotes();
	}, [maxAge]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("message", message);

		try {
			const response = await fetch("/api/quote", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				// Clear form
				setName("");
				setMessage("");
				// Refetch quotes to get the new one with server-generated timestamp
				await fetchQuotes();
			}
		} catch (error) {
			console.error("Error submitting quote:", error);
		}
	};

	return (
		<div className="App">
			<Logo />
			<h1>Hack at UCI Tech Deliverable</h1>

			<h2>Submit a quote</h2>
			<form onSubmit={handleSubmit} className="quote-form">
				<div className="form-group">
					<label htmlFor="input-name">Name</label>
					<input
						type="text"
						name="name"
						id="input-name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="input-message">Quote</label>
					<input
						type="text"
						name="message"
						id="input-message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Submit</button>
			</form>

			<h2>Previous Quotes</h2>
			<div className="filter-section">
				<label htmlFor="time-filter">Show quotes from: </label>
				<select
					id="time-filter"
					value={maxAge}
					onChange={(e) => setMaxAge(e.target.value)}
				>
					<option value="week">Last Week</option>
					<option value="month">Last Month</option>
					<option value="year">Last Year</option>
					<option value="all">All Time</option>
				</select>
			</div>

			<div className="quotes-container">
				{quotes.length === 0 ? (
					<p className="no-quotes">No quotes found for the selected time period.</p>
				) : (
					quotes.map((quote, index) => (
						<Quote
							key={`${quote.time}-${index}`}
							name={quote.name}
							message={quote.message}
							time={quote.time}
						/>
					))
				)}
			</div>
		</div>
	);
}

export default App;
