const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const locationName = process.argv[2] // location argument from user
if (!locationName) {
	return console.log("Please provide a location.")
} else {
	geocode(locationName, (error, { latitude, longitude, location } = {} ) => {
		// { latitude, longitude, location } *destructuring the objest in the second param
		// = {} *provides a default undefined value to be destructured in case of error
		// If an error occurs and there is no data param, something still needs to be deconstructed. 
		// This default provides and empty object to be deconstructed. 
		// Otherwise there woudl be no object, which would result in a new error.

		if (error) {
			return console.log(error)
		}

		// const { latitude, longitude, location } = data // get lat, long, locaton from 'data' object into variables

		forecast( latitude, longitude, (error, forecastData) => {
			if(error) {
				return console.log(error)
			}
			
			console.log(location)
			console.log(forecastData)
		})
	})

}



// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

// const locationName = process.argv[2]
// if (!locationName) {
// 	return console.log("Please provide a location.")
// } else {
// 	geocode(locationName, (error, data) => {
// 	if (error) {
// 		return console.log(error)
// 	}

// 	forecast(data.latitude, data.longitude, (error, forecastData) => {
// 		if(error) {
// 			return console.log(error)
// 		}
		
// 		console.log(data.location)
// 		console.log(forecastData)
// 	})
// })

// }