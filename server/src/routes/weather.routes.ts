import { Router } from 'express'
const api = require('request')
const WeatherRouter = Router()

WeatherRouter.get('/:city', async (request, response) => {
    let route = ""

    if(request.params.city == "-"){
        route = `https://api.hgbrasil.com/weather?array_limit=7&fields=only_results,temp,city_name,time,description,currently,humidity,wind_speedy,sunrise,sunset,forecast,date,min,max,weekday,description&key=3512d740`
    } else {
        const { city } = request.params
        route = `https://api.hgbrasil.com/weather?array_limit=7&fields=only_results,temp,city_name,time,description,currently,humidity,wind_speedy,sunrise,sunset,forecast,date,min,max,weekday,description&city_name=${city}&key=3512d740`
    }

    console.log(route)
	try {
        api(`${route}`, (err: any, res: object, body: string) => {
            const data = JSON.parse(body)

            return response.json(data)
        })
		
	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

export default WeatherRouter
