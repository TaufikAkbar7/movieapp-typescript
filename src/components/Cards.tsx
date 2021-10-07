import { FC } from 'react'
import { ICard } from '../interfaces'
import { Card } from 'antd'
import { StarOutlined, StarFilled } from '@ant-design/icons'
import Stars from 'react-rating'

const { Meta } = Card;

const Cards: FC<ICard> = ({ movie }) => {
    return (
        <div key={movie.id} style={{ background: 'red', marginLeft: 10 }}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />}
            >
                <Meta
                    title={movie.title}
                    description={
                        <Stars 
                        emptySymbol={<StarOutlined/>} 
                        fullSymbol={<StarFilled style={{color: '#000'}}/>} 
                        initialRating={movie.vote_average / 2} 
                        readonly />
                    }
                />
            </Card>
        </div>
    )
}

export default Cards
