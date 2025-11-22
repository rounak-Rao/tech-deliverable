function Logo() {
	return (
		<svg
			className="logo"
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* Book */}
			<rect
				x="15"
				y="20"
				width="70"
				height="60"
				rx="3"
				fill="#007bff"
			/>
			<rect
				x="20"
				y="25"
				width="60"
				height="50"
				rx="2"
				fill="#ffffff"
			/>
			{/* Book spine */}
			<rect
				x="15"
				y="20"
				width="8"
				height="60"
				fill="#0056b3"
			/>
			{/* Quote marks */}
			<text
				x="35"
				y="55"
				fontSize="30"
				fill="#007bff"
				fontFamily="Georgia, serif"
			>
				"
			</text>
			<text
				x="60"
				y="70"
				fontSize="30"
				fill="#007bff"
				fontFamily="Georgia, serif"
			>
				"
			</text>
		</svg>
	);
}

export default Logo;
