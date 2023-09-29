const rangeSlider = document.querySelector("#range-slider")
rangeSlider.value = 10

let pricingStructure = new Map(
   [
      [
         0, {
            pageviews: "10k",
            cost: "$8"
      }],
      [
         5, {
            pageviews: "50k",
		   cost: "$12"
         }
      ]
   ]
)



{
	0: {
		pageviews: "10k",
		cost: "$8",
	},
	5: {
		pageviews: "50k",
		cost: "$12",
	},
	10: {
		pageviews: "100k",
		cost: "$16",
	},
	15: {
		pageviews: "500k",
		cost: "$24",
	},
	20: {
		pageviews: "1M",
		cost: "$36",
	},
}
