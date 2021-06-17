
//The Weatherstack URL for reference:
// const url =  'http://api.weatherstack.com/current?access_key=b609cb5f8491ffdbe3715b76d2d44d4e&query=37.8267,-122.4233&units=m'


const request = require('postman-request')

const forecast = (lattitude, longitude, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=b609cb5f8491ffdbe3715b76d2d44d4e&query=' + encodeURIComponent(lattitude) + ',' + encodeURIComponent(longitude) + '&units=m'

	request({ url, json: true}, (error, {body} = {}) => {
		// const {body} = response

		if (error) {
			callback('Unable to connect to weather services', undefined)
		} else if (body.error) {
			callback('Unable to find location. Try another search', undefined)
		} else {
			callback(
				undefined, 
				body.current.weather_descriptions+". The current temperature is "+body.current.temperature+" degrees, but it feels like "+body.current.feelslike+"."
			)
		}
	})
}

module.exports = forecast