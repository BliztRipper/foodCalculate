import { useState } from 'react'
import './App.scss'

function App() {
	const [red, setRed] = useState(0)
	const [green, setGreen] = useState(0)
	const [blue, setBlue] = useState(0)
	const [yellow, setYellow] = useState(0)
	const [pink, setPink] = useState(0)
	const [purple, setPurple] = useState(0)
	const [orange, setOrange] = useState(0)
	const [isMember, setIsMember] = useState(false)

	const clearAll = () => {
		setRed(0)
		setGreen(0)
		setBlue(0)
		setYellow(0)
		setPink(0)
		setPurple(0)
		setOrange(0)
	}

	const calculatePrice = () => {
		const basePrice = {
			redSet: 50,
			greenSet: 40,
			blueSet: 30,
			yellowSet: 50,
			pinkSet: 80,
			purpleSet: 90,
			orangeSet: 120,
		}

		const discounts = {
			orangeSet: 0.05,
			pinkSet: 0.05,
			greenSet: 0.05,
		}

		let totalPrice = 0

		totalPrice +=
			red * basePrice.redSet +
			green * basePrice.greenSet +
			blue * basePrice.blueSet +
			yellow * basePrice.yellowSet +
			pink * basePrice.pinkSet +
			purple * basePrice.purpleSet +
			orange * basePrice.orangeSet

		if (isMember) {
			totalPrice *= 0.9 // Apply 10% discount for members
		}

		if (orange >= 2 || pink >= 2 || green >= 2) {
			totalPrice -=
				(orange * basePrice.orangeSet +
					pink * basePrice.pinkSet +
					green * basePrice.greenSet) *
				discounts.orangeSet // Apply 5% discount for doubles order
		}

		return totalPrice
	}

	return (
		<>
			<main className="contentWrapepr">
				<h1>Food store</h1>
				<h3>TOTAL : {calculatePrice()}</h3>
				<div>
					<label>
						Member Card:
						<input
							type="checkbox"
							checked={isMember}
							onChange={() => setIsMember(!isMember)}
						/>
					</label>
				</div>
				<section className="menuWrapper">
					<div className="card">
						Red Set : 50 <br />
						THB
						<button
							className="redCard"
							onClick={() => setRed((red) => red + 1)}
						>
							You have ordered <p>{red}</p> Red set
						</button>
					</div>
					<div className="card">
						Green Set : 40 <br />
						THB
						<button
							className="greenCard"
							onClick={() => setGreen((green) => green + 1)}
						>
							You have ordered <p>{green}</p> Green set
						</button>
					</div>
					<div className="card">
						Blue Set : 30 <br />
						THB
						<button
							className="blueCard"
							onClick={() => setBlue((blue) => blue + 1)}
						>
							You have ordered <p>{blue}</p> Blue set
						</button>
					</div>
					<div className="card">
						Yellow Set : 50 <br />
						THB
						<button
							className="yellowCard"
							onClick={() => setYellow((yellow) => yellow + 1)}
						>
							You have ordered <p>{yellow}</p> Yellow set
						</button>
					</div>
					<div className="card">
						Pink Set : 80 <br />
						THB
						<button
							className="pinkCard"
							onClick={() => setPink((pink) => pink + 1)}
						>
							You have ordered <p>{pink}</p> Pink set
						</button>
					</div>
					<div className="card">
						Purple Set : 90 <br />
						THB
						<button
							className="purpleCard"
							onClick={() => setPurple((purple) => purple + 1)}
						>
							You have ordered <p>{purple}</p> Purple set
						</button>
					</div>
					<div className="card">
						Orange Set : 120 <br />
						THB
						<button
							className="orangeCard"
							onClick={() => setOrange((orange) => orange + 1)}
						>
							You have ordered <p>{orange}</p> Orange set
						</button>
					</div>
				</section>
				<section>
					<div className="sumWrapper">
						<div className="card">
							<button
								onClick={() => alert(`Total Price: ${calculatePrice()} THB`)}
							>
								Summary Orders
							</button>
						</div>
						<div className="card">
							<button onClick={clearAll}>Clear All Orders</button>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default App
