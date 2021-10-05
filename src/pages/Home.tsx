import { FC, useState, useEffect } from 'react'
import { Navbar, Title, FooterComp } from '../components'
import { Layout, Carousel, Image, Card, Spin, Row, Col } from 'antd'
import axios, { AxiosResponse } from 'axios'
import { IMovie } from '../interfaces'

const { Header, Content, Footer } = Layout
const { Meta } = Card;

const Home: FC = () => {
    const [movieCarousel, setMovieCarousel] = useState([])
    const [popularMovie, setPopularMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const API_KEYS: string = 'f9dd5df9725e62f424981dc7b38f6183'

    const getMovieCarousel = async (): Promise<void> => {
        await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEYS}&language=en-US&page=1`)
            .then((res: AxiosResponse) => {
                setIsLoading(false)
                setMovieCarousel(res['data']['results'])
            })
            .catch(err => console.log(err))
    }

    const getPopularMovies = async (): Promise<void> => {
        await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEYS}&language=en-US&page=1`)
            .then((res: AxiosResponse) => {
                setIsLoading(false)
                setPopularMovie(res['data']['results'])
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMovieCarousel();
        getPopularMovies();
    }, [])

    console.log(movieCarousel)
    return (
        <Layout>
            <Header>
                <Navbar />
            </Header>
            <Content>
                <>
                    {movieCarousel && popularMovie ? (
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
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                {popularMovie.map((movie: IMovie, i) => (
                                    <Col 
                                        key={i} 
                                        span={6}
                                        style={{
                                            padding: '8px 25px'
                                        }}
                                    >
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />}
                                    >
                                        <Meta title={movie.title} description="www.instagram.com" />
                                    </Card>
                                    </Col>
                                ))}
                                </Row>
                            </div>
                        </>
                    ) : isLoading ? (
                        <Spin />
                    ) : (
                        console.log('error')
                    )}
                </>
            </Content>
            <Footer>
                <FooterComp />
            </Footer>
        </Layout>
    )
}

export default Home
