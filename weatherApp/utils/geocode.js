//Mapbox URL for reference
// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Boston.json?access_token=pk.eyJ1Ijoicm9iZXJ0a29zemVnaSIsImEiOiJja21lNzV0b3MwZHV4MnBtcXdkdTdjMmQwIn0.ErjHpdUqaSHaTYieGs7R3Q&limit=1'

const request = require('postman-request')

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicm9iZXJ0a29zemVnaSIsImEiOiJja21lNzV0b3MwZHV4MnBtcXdkdTdjMmQwIn0.ErjHpdUqaSHaTYieGs7R3Q&limit=1'

	request({ url, json: true}, (error, {body} = {}) => {
		// const {body} = response // deconstructing body property from response object into a variable
		
		if (error) {
			callback('Unable to connect to location services', undefined)
		} else if (body.features.length === 0) {
			callback('Unable to find location. Try another search', undefined)
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name
			})
		}
	})
}

module.exports = geocode