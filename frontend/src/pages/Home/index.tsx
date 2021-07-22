import React, { useCallback, useState, useEffect } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import api from "../../services/api"
import { 
    Container, 
    Main, 
    Cards, 
    Image, 
    Doubt, 
    MainContent,
    Fade 
} from './styles'

interface Category {
    id: string,
    category_name: string
}

interface PublicationResponse {
    title: string
    id: string
    created_at: string
    slug: string
    main_image: string
    subtitle: string
    categories: Category[]
}

interface Response {
    latest_publications: Response[]
    first_publications: Response[]
    more_viewed: Response[]
}
    
const Home: React.FC = () => {
    const [latestPublications, setLatestPublications] = useState<PublicationResponse[]>([])
    const [firstPublication, setFirstPublication] = useState<PublicationResponse[]>([])
    const [mostViewedPublications, setMostViewedPublications] = useState<PublicationResponse[]>([])

    useEffect(() => {
        api.get<Response>("/")
            .then(response => {

                const responseData = Object.values(response.data)
                const latest = responseData[0]
                const first = responseData[1]
                const most = responseData[2]
                
                setLatestPublications(latest)
                setFirstPublication(first)
                setMostViewedPublications(most)
        })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
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

    const settingsFade = {
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    const formatDate = useCallback((date: string) => {
        const [dateFormated, ] = date.split('T')
        const firstDate = parseISO(dateFormated)
        
        return format(
            firstDate,
            "dd'/'MM'/'yyyy",
        )
    }, [])
    
    return (
        <>
            <Menu></Menu>
            <Main>
                <Container>
                    <MainContent>
                        <div className="fade">
                            <Slider {...settingsFade}>
                                {mostViewedPublications.map(publication => {
                                    return (
                                        <>
                                            <Link to={`/publication/${publication.slug}`} key={publication.id}>
                                            <Fade image={publication.main_image} ></Fade>
                                                <div className="info">
                                                    <div className="categories">
                                                        {publication.categories.map(category => 
                                                            <span key={category.id} className="category">
                                                                {category.category_name} 
                                                            </span> 
                                                        )}
                                                    </div>
                                                    <h1>{publication.title}</h1>
                                                    <p>{publication.subtitle}</p>
                                                </div>
                                            </Link>
                                        </>
                                    )
                                })}
                            </Slider>
                        </div>
                    </MainContent>
                    <Cards>
                        <h1>Últimas publicações</h1>
                        <Slider {...settings}>
                            {latestPublications.map(publication => {
                                return (
                                    <div className="card" key={publication.id}>
                                        <Image image={publication.main_image}></Image>
                                        <div className="info">
                                            <div className="categories">
                                                {publication.categories.map(category => 
                                                    <span key={category.id} className="category">
                                                        {category.category_name} 
                                                    </span> 
                                                )}
                                            </div>
                                            <h3>{publication.title}</h3>
                                            <p>{publication.subtitle}</p>
                                            <div>
                                                <span>
                                                    {formatDate(publication.created_at)}
                                                </span>
                                                <Link to={`/publication/${publication.slug}`}>Leia mais 🡢</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </Cards>
                    <Cards>
                        <h1>Publicações mais vistas</h1>
                        <Slider {...settings}>
                            {firstPublication.map(publication => {
                                return (
                                    <div className="card" key={publication.id}>
                                        <Image image={publication.main_image}></Image>
                                        <div className="info">
                                            <div className="categories">
                                                {publication.categories.map(category => 
                                                    <span key={category.id} className="category">
                                                        {category.category_name} 
                                                    </span> 
                                                )}
                                            </div>
                                            <h3>{publication.title}</h3>
                                            <p>{publication.subtitle}</p>
                                            <div>
                                                <span>
                                                    {formatDate(publication.created_at)}
                                                </span>
                                                <Link to={`/publication/${publication.slug}`}>Leia mais 🡢</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </Cards>

                </Container>
            </Main>
            <Doubt>
                <h1>Tire sua dúvida!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis ex sem, non ullamcorper 
                    ipsum hendrerit vel. Vivamus volutpat, lacus id ultrices fermentum, urna ante.
                </p>
                <Link to="/forum">Consultar outros usuários</Link>
            </Doubt>
            <Footer></Footer>
        </>
    )
}

export default Home