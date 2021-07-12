import React, { useCallback, useEffect, useState } from 'react'
import Slider from "react-slick"
import { Form, Formik } from 'formik'

import Menu from '../Menu'
import Footer from '../Footer'
import { Content, MainCard, Cards } from './styles'
import api from '../../services/api'
import { InputField } from '../../components/Input'

import WeatherIcon from '../../components/WeatherIcon'
import sunset from '../../assets/weatherIcons/sunset.svg'
import sunrise from '../../assets/weatherIcons/sunrise.svg'
import humidity from '../../assets/weatherIcons/humidity.svg'
import wind from '../../assets/weatherIcons/wind.svg'
import maxima from '../../assets/weatherIcons/maxima.svg'
import minima from '../../assets/weatherIcons/minima.svg'


interface ForecastParams {
    date: string
    weekday: string
    max: number
    min: number
    description: string
}

interface bodyParams {
    temp: string
    date: string
    time: string
    description: string
    currently: string
    humidity: number
    wind_speedy: string
    sunrise: string
    sunset: string
    city_name: string
    forecast: ForecastParams[]
}

const Weather: React.FC = () => {

    const [city, setCity] = useState<string>('-')
    const [weather, setWeather] = useState<bodyParams>()
    

    useEffect( ()=>{
        if(localStorage.getItem('@Ecoblog:user')){
            const user = JSON.parse(localStorage.getItem('@Ecoblog:user') || 'gambiarra')
            const userCity = user.city.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            setCity(userCity)
        }
    },[])

    useEffect( ()=>{
        api.get(`/weather/${city}`)
        .then(response => setWeather(response.data))
    },[city])
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1290,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true
              }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    const handleSubmit = useCallback( (data) => {

        setCity(data.city)
    }, [])
    console.log(city)
    return (
        <>
            <Menu></Menu>
                <Content>
                    <MainCard>
                        <div className="info">
                            <h2>{weather?.city_name}</h2>
                            <p>{weather?.date}</p>
                            <div className="weather">
                                <div>
                                    <span>
                                        {weather?.temp}°C
                                    </span>
                                    <p>{weather?.description}</p>
                                </div>
                                {WeatherIcon(weather?.description)}
                            </div>
                            <div className="attributes">
                                <span>
                                    <img src={sunrise} alt="Nascer do sol"/>
                                    {weather?.sunrise}
                                </span>
                                <span>
                                    <img src={sunset} alt="Pôr do sol"/>
                                    {weather?.sunset}
                                </span>
                            </div>
                            <div className="attributes">
                                <span>
                                    <img src={wind} alt="Velocidade do vento"/>
                                    {weather?.wind_speedy}
                                </span>
                                <span>
                                    <img src={humidity} alt="Humidade do ar"/>
                                    {weather?.humidity}%
                                </span>
                            </div>
                        </div>
                            <Formik
                                initialValues={{
                                    city: '',
                                }}
                                validationSchema={''}
                                onSubmit={handleSubmit}
                                
                                >
                                {() => (
                                    <Form>

                                        <h2>Alterar cidade</h2>
                                        <InputField label="Escolha uma cidade" type="text" name="city" placeholder={city} />                     

                                        <button type="submit">Alterar</button>
                                    </Form>
                                )}
                            </Formik>

                    </MainCard>
                    <Cards>
                        <Slider {...settings}>
                            {weather?.forecast.map(forecast => {
                                return (
                                    <div className="card" key={forecast.date}>
                                        <h2>{forecast.weekday} {forecast.date}</h2>

                                        {WeatherIcon(forecast?.description)}

                                        <p>{forecast.description}</p>
                                        <div className="temperature">
                                            <span>
                                                <img src={maxima} alt="Máxima" />
                                                {forecast.max}º
                                            </span>
                                            <span>
                                                <img src={minima} alt="Mínima" />
                                                {forecast.min}º
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}

                        </Slider>
                    </Cards>
                </Content>
            <Footer></Footer>
        </>
    )
}

export default Weather