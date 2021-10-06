import { FC, useState, useEffect, ChangeEvent } from 'react'
import { Navbar, Title, FooterComp, Cards, Gap } from '../components'
import { Layout, Carousel, Image, Spin } from 'antd'
import axios, { AxiosResponse } from 'axios'
import { IMovie } from '../interfaces'
import Slider from "react-slick";

const { Header, Content, Footer } = Layout

const Home: FC = () => {
    const [movieCarousel, setMovieCarousel] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState('')
    const API_KEYS: string = 'f9dd5df9725e62f424981dc7b38f6183'

    const settings: object = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    const getMovieCarousel = async (): Promise<void> => {
        await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEYS}&language=en-US&page=1`)
            .then((res: AxiosResponse) => {
                setIsLoading(false)
                setMovieCarousel(res['data']['results'])
            })
            .catch(err => console.log(err))
    }

    const getTopRatedMovies = async (): Promise<void> => {
        await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEYS}&language=en-US&page=1`)
            .then((res: AxiosResponse) => {
                setIsLoading(false)
                setTopRatedMovies(res['data']['results'])
            })
            .catch(err => console.log(err))
    }

    const getPopularMovies = async (): Promise<void> => {
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEYS}&language=en-US&page=1`)
            .then((res: AxiosResponse) => {
                setIsLoading(false)
                setPopularMovies(res['data']['results'])
            })
            .catch(err => console.log(err))
    }

    const onSearch = (): void => {
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEYS}&language=en-US&page=1&query=${search}&include_adult=true`)
            .then((res: AxiosResponse) => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        getMovieCarousel();
        getTopRatedMovies();
        getPopularMovies();
    }, [])

    return (
        <Layout>
            <Header>
                <Navbar search={search} handleChange={handleChange} onSearch={onSearch} />
            </Header>
            <Content style={{background: '#001529'}}>
                <>
                    {movieCarousel && topRatedMovies && popularMovies ? (
                        <>
                            <Carousel autoplay={true} dots={false}>
                                {movieCarousel.map((movie: IMovie, i) => (
                                    <div style={{ position: 'relative' }} key={i}>
                                        <Image style={{ objectFit: 'cover' }} width={1350} src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 100%)'
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'left',
                                                width: '100%',
                                                height: '100%',
                                                alignItems: 'center'
                                            }}>
                                                <h1 style={{
                                                    color: '#FFF',
                                                    fontWeight: 'bold',
                                                    fontSize: 34
                                                }}>
                                                    {movie.title}</h1>
                                                <p style={{
                                                    color: '#FFF',
                                                    fontSize: 20,
                                                    marginTop: 8,
                                                    marginLeft: 10
                                                }}> | {movie.vote_average}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                            <div style={{ padding: '30px 50px' }}>
                                <Title title="Top Rated movies" subtitle="This month top rated movies" />
                                <Slider {...settings}>
                                    {topRatedMovies.map((movie: IMovie) => (
                                        <Cards movie={movie}/>
                                    ))}
                                </Slider>
                                <Gap width={0} height={50}/>
                                <Title title="Popular movies" subtitle="This month popular movies" />
                                <Slider {...settings}>
                                    {popularMovies.map((movie: IMovie) => (
                                        <Cards movie={movie}/>
                                    ))}
                                </Slider>
                            </div>
                        </>
                    ) : isLoading ? (
                        <Spin />
                    ) : (
                        console.log('error')
                    )}
                </>
            </Content>
            <Footer style={{background: '#001529'}}>
                <FooterComp />
            </Footer>
        </Layout>
    )
}

export default Home
