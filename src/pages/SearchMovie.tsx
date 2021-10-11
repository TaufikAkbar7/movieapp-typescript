import { FC, useEffect, useState, ChangeEvent } from "react";
import { IMatchParams, IMovie } from "../interfaces";
import { RouteComponentProps, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../config/redux/store";
import { getMovieBySearch } from "../config/redux/action/movie";
import { Layout, Spin, Row, Col } from "antd";
import { Navbar, FooterComp, Cards } from "../components";

const { Header, Content, Footer } = Layout;

const SearchMovie: FC<RouteComponentProps<IMatchParams>> = (props) => {
  const [search, setSearch] = useState("");
  const searchMovie = useSelector((state: RootState) => state.searchMovie);
  const { loading, movies, error } = searchMovie;
  const { name } = props.match.params;
  const dispatch = useDispatch();
  const history = useHistory();

  const onSearch = (): void => {
    history.push(`/search/${search}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(getMovieBySearch(name));
  }, [dispatch, name]);

  return (
    <>
      {searchMovie && movies ? (
        <Layout>
          <Header>
            <Navbar
              search={search}
              handleChange={handleChange}
              onSearch={onSearch}
            />
          </Header>
          <Content style={{ background: "#001529" }}>
            <div style={{ padding: "30px 50px" }}>
              <h1
                style={{
                  color: "#FFF",
                  marginLeft: 10,
                  display: "inline-block",
                }}
              >
                Search movie <span style={{ fontWeight: "bold" }}>{name}</span>
              </h1>
              <Row gutter={[16, 24]}>
                {movies.map((movie: IMovie) => (
                  <Col span={6} key={movie.id}>
                    <Cards movie={movie} />
                  </Col>
                ))}
              </Row>
            </div>
          </Content>
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

export default SearchMovie;
