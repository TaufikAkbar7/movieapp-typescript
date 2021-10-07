import { FC, useState, useEffect, ChangeEvent } from 'react'
import { Navbar, Title, FooterComp, Cards, Gap } from '../components'
import { Layout, Carousel, Image, Spin } from 'antd'
import axios, { AxiosResponse } from 'axios'
import { IMovie } from '../interfaces'
import Slider from 'react-slick';
import {
    getMovieCarouselAction,
    getPopularMovieAction,
    getTopRatedMovieAction
} from '../config/redux/action/movie'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../config/redux/store'
import API_KEYS from '../config/api'

const { Header, Content, Footer } = Layout

const Home: FC = () => {
    const [search, setSearch] = useState('')
    const movieCarousel = useSelector((state: RootState) => state.movieCarousel)
    const { loading, movies: carouselMovies, error } = movieCarousel
    const popularMovie = useSelector((state: RootState) => state.popularMovie)
    const { movies: popularMovies } = popularMovie
    const topRatedMovie = useSelector((state: RootState) => state.topRatedMovie)
    const { movies: topRatedMovies } = topRatedMovie
    const dispatch = useDispatch()

    const settings: object = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

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
        dispatch(getMovieCarouselAction())
        dispatch(getPopularMovieAction())
        dispatch(getTopRatedMovieAction())
    }, [])

    return (
        <>
            {carouselMovies && topRatedMovies && popularMovies ? (
                <Layout>
                    <Header>
                        <Navbar search={search} handleChange={handleChange} onSearch={onSearch} />
                    </Header>
                    <Content style={{ background: '#001529' }}>
                        <>
                            <Carousel autoplay={true} dots={false}>
                                {carouselMovies.map((movie: IMovie) => (
                                    <div style={{ position: 'relative' }} key={movie.id}>
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
                                        <Cards movie={movie} />
                                    ))}
                                </Slider>
                                <Gap width={0} height={50} />
                                <Title title="Popular movies" subtitle="This month popular movies" />
                                <Slider {...settings}>
                                    {popularMovies.map((movie: IMovie) => (
                                        <Cards movie={movie} />
                                    ))}
                                </Slider>
                            </div>
                        </>
                    </Content>
                    <Footer style={{ background: '#001529' }}>
                        <FooterComp />
                    </Footer>
                </Layout>
            ) : loading ? (
                <Spin />
            ) : (
                console.log(error)
            )}
        </>
    )
}
export default Home
