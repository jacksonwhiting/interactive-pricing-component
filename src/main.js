const rangeSlider = document.querySelector("#range-slider")
const annualPriceSwitchEl = document.querySelector("#annual-price-switch")
const trafficPageviewsEl = document.querySelector("#traffic-pageviews")
const trafficPriceEl = document.querySelector("#traffic-price")

rangeSlider.value = 2

let pricingStructure = [
	{ pageviews: "10k", cost: 8 },

	{ pageviews: "50k", cost: 12 },

	{ pageviews: "100k", cost: 16 },

	{ pageviews: "500k", cost: 24 },

	{ pageviews: "1M", cost: 36 },
]

annualPriceSwitchEl.addEventListener("change", (e) => {
	renderPrice()
})

rangeSlider.addEventListener("change", (e) => {
	renderPrice()
})

let renderPrice = () => {
	let sliderValue = Number(rangeSlider.value)

	pricingStructure.forEach((package, i) => {
		let price = package.cost

		if (annualPriceSwitchEl.checked) {
			price = price * 0.75
		}

		if (sliderValue === i) {
			trafficPageviewsEl.textContent = package.pageviews
			trafficPriceEl.textContent = `$${price}.00`
			console.log(i, package.pageviews, package.cost)
		}
	})
}
// let pricingStructure = new Map()

// pricingStructure.set(0, { pageviews: "10k", cost: "$8" })
// pricingStructure.set(1, { pageviews: "50k", cost: "$12" })
// pricingStructure.set(2, { pageviews: "100k", cost: "$16" })
// pricingStructure.set(3, { pageviews: "500k", cost: "$24" })
// pricingStructure.set(4, { pageviews: "1M", cost: "$36" })

// rangeSlider.addEventListener("change", (e) => {
// 	let sliderValue = Number(e.target.value)

// 	pricingStructure.forEach((price, i) => {
// 		console.log(i, price.pageviews)
// 	})

// })
