import "./Quote.css";

function Quote({ name, message, time }) {
	const formatDate = (isoString) => {
		const date = new Date(isoString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	return (
		<div className="quote">
			<p className="quote-message">"{message}"</p>
			<p className="quote-author">— {name}</p>
			<p className="quote-date">{formatDate(time)}</p>
		</div>
	);
}

export default Quote;
