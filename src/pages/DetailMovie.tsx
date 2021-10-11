import { FC, useEffect, useState } from "react";
import { ICastMovie, IMatchParams, IMovie } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../config/redux/store";
import { RouteComponentProps } from "react-router";
import {
  getCastMovie,
  getDetailMovie,
  getSimilarMovie,
} from "../config/redux/action/movie";
import { Layout, Image, Spin, Card, Button } from "antd";
import { StarOutlined, StarFilled, ArrowLeftOutlined } from "@ant-design/icons";
import Stars from "react-rating";
import { Cards, Gap, Title, FooterComp } from "../components";
import Slider from "@ant-design/react-slick";
import { useHistory } from "react-router";

const { Content, Footer } = Layout;
const { Meta } = Card;

const DetailMovie: FC<RouteComponentProps<IMatchParams>> = (props) => {
  const [overview, setOverview] = useState(true);
  const detailMovie = useSelector((state: RootState) => state.detailMovie);
  const { loading, movie, error } = detailMovie;
  const similarMovie = useSelector((state: RootState) => state.similarMovie);
  const { movies } = similarMovie;
  const castMovie = useSelector((state: RootState) => state.castMovie);
  const { casts } = castMovie;
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const history = useHistory();

  const settings: object = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  useEffect(() => {
    dispatch(getDetailMovie(id));
    dispatch(getSimilarMovie(id));
    dispatch(getCastMovie(id));
  }, [dispatch, id]);

  return (
    <>
      {detailMovie && movie && casts ? (
        <Layout>
          <Content style={{ background: "#001529" }}>
            <div style={{ height: "100vh", background: "red" }}>
              <Image
                style={{ objectFit: "cover", height: 663 }}
                preview={false}
                width={1344}
                src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              />
              <div
                style={{
                  width: "100%",
                  height: "100.5%",
                  top: 0,
                  position: "absolute",
                  background:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.3) 100%)",
                }}
              >
                <div
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    display: "flex",
                    flex: 1,
                    marginTop: 110,
                  }}
                >
                  <div>
                    <Image
                      style={{ objectFit: "cover", borderRadius: 15 }}
                      preview={false}
                      width={250}
                      src={`http://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                    />
                  </div>
                  <div style={{ color: "#FFF", width: 450 }}>
                    <h1
                      style={{
                        color: "#FFF",
                        fontWeight: "bold",
                        fontSize: 34,
                      }}
                    >
                      {movie.original_title
                        ? movie.original_title
                        : movie.original_name}
                    </h1>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <Stars
                          emptySymbol={<StarOutlined />}
                          fullSymbol={<StarFilled style={{ color: "#FFF" }} />}
                          initialRating={movie.vote_average / 2}
                          readonly
                        />
                        <span style={{ marginLeft: 5 }}>
                          {movie.vote_average}
                        </span>
                      </div>
                      <span>
                        {movie.runtime} min / {movie.release_date?.slice(0, 4)}
                      </span>
                    </div>
                    <Gap width={0} height={30} />
                    <h3 style={{ color: "#FFF", fontWeight: "bold" }}>
                      The Genres
                    </h3>
                    {movie.genres?.map(
                      (genre: { id: number; name: string }) => (
                        <span key={id} style={{ marginLeft: 5 }}>
                          {genre.name}
                        </span>
                      )
                    )}
                    <Gap width={0} height={30} />
                    <h3 style={{ color: "#FFF", fontWeight: "bold" }}>
                      The Synopsis
                    </h3>
                    {overview ? (
                      <>
                        <span style={{ fontSize: 18 }}>
                          {movie.overview?.slice(0, 180)}...
                        </span>
                        <button
                          onClick={() => setOverview(!overview)}
                          style={{
                            background: "transparent",
                            color: "blue",
                            cursor: "pointer",
                            border: 1,
                            borderColor: "transparent",
                            fontWeight: "bold",
                          }}
                        >
                          Read more
                        </button>
                      </>
                    ) : (
                      <>
                        <span style={{ fontSize: 18 }}>{movie.overview}</span>
                        <button
                          onClick={() => setOverview(!overview)}
                          style={{
                            background: "transparent",
                            color: "blue",
                            border: 1,
                            borderColor: "transparent",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                        >
                          Read less
                        </button>
                      </>
                    )}
                    <Gap width={0} height={30} />
                    <Button
                      icon={<ArrowLeftOutlined />}
                      onClick={() => history.push("/")}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: "30px 50px" }}>
              <Gap width={0} height={50} />
              <Title title="Cast movies" subtitle="This Cast movies" />
              <Slider {...settings}>
                {casts?.map((cast: ICastMovie) => (
                  <div style={{ marginLeft: 10 }}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src={`http://image.tmdb.org/t/p/w1280${cast.profile_path}`}
                          height={350}
                        />
                      }
                    >
                      <Meta
                        title={
                          cast.original_name ? cast.original_name : cast.name
                        }
                        description={cast.character.slice(0, 29)}
                      />
                    </Card>
                  </div>
                ))}
              </Slider>
              <Gap width={0} height={50} />
              <Title title="Similar movies" subtitle="This Similar movies" />
              <Slider {...settings}>
                {movies?.map((movie: IMovie) => (
                  <Cards movie={movie} />
                ))}
              </Slider>
            </div>
          </Content>
          <Footer style={{ background: "#001529" }}>
            <FooterComp />
          </Footer>
        </Layout>
      ) : loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <>{console.log(error)}</>
      )}
    </>
  );
};

export default DetailMovie;
