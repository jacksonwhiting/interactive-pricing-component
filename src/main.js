const rangeSlider = document.querySelector("#range-slider")
rangeSlider.value = 10

let pricingStructure = new Map()

pricingStructure.set(0, { pageviews: "10k", cost: "$8" })
pricingStructure.set(5, { pageviews: "50k", cost: "$12" })
pricingStructure.set(10, { pageviews: "100k", cost: "$16" })
pricingStructure.set(15, { pageviews: "500k", cost: "$24" })
pricingStructure.set(20, { pageviews: "1M", cost: "$36" })

console.log(pricingStructure)
let basePrice = pricingStructure.get(0)
// console.log(basePrice.cost)

rangeSlider.addEventListener("change", (e) => {
	let sliderValue = e.target.value

	for (const [key, value] of pricingStructure) {
		if (sliderValue === key) {
			console.log(value)
		} else {
			console.log(typeof key)
		}
	}
})
