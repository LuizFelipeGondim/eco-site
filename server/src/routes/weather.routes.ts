import { Router } from 'express'
import { verify } from 'jsonwebtoken'
import { getRepository } from 'typeorm'
const api = require('request')

import authConfig from '../config/auth'
import User from '../models/User'

interface TokenPayload {
	iat: number
	exp: number
	sub: string
}

const WeatherRouter = Router()

WeatherRouter.get('/:city', async (request, response) => {
    let route = ""
    const authHeader = request.headers.authorization

    if (request.params.city !== "-"){

        const { city } = request.params
        route = `https://api.hgbrasil.com/weather?array_limit=7&fields=only_results,temp,city_name,time,description,currently,humidity,wind_speedy,sunrise,sunset,forecast,date,min,max,weekday,description&city_name=${city}&key=3512d740`

    } else if (authHeader) {
        
        const [, token] = authHeader.split(' ')
        const decoded = verify(token, authConfig.jwt.secret)
		const { sub } = decoded as TokenPayload

		request.user = {
			id:sub
		}

        const usersRepository = getRepository(User)

		const user = await usersRepository.findOne({
			id: request.user.id,
		})
        const city = user.city.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        route = `https://api.hgbrasil.com/weather?array_limit=7&fields=only_results,temp,city_name,time,description,currently,humidity,wind_speedy,sunrise,sunset,forecast,date,min,max,weekday,description&city_name=${city}&key=3512d740`
        
    } else if(request.params.city == "-"){
        route = `https://api.hgbrasil.com/weather?array_limit=7&fields=only_results,temp,city_name,time,description,currently,humidity,wind_speedy,sunrise,sunset,forecast,date,min,max,weekday,description&key=3512d740`
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
