import { FC } from "react";
import { ICard } from "../interfaces";
import { Card } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import Stars from "react-rating";
import { useHistory } from "react-router";

const { Meta } = Card;

const Cards: FC<ICard> = ({ movie }) => {
  const history = useHistory();
  return (
    <div key={movie.id} style={{ }}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            style={{ objectFit: 'cover' }}
          />
        }
        onClick={() => history.push(`/detail/${movie.id}`)}
      >
        <Meta
          title={
            movie.original_name ? movie.original_name : movie.original_title
          }
          description={
            <Stars
              emptySymbol={<StarOutlined />}
              fullSymbol={<StarFilled style={{ color: "#000" }} />}
              initialRating={movie.vote_average / 2}
              readonly
            />
          }
        />
      </Card>
    </div>
  );
};

export default Cards;
