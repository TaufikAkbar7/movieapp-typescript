import { FC } from 'react'
import { ICard } from '../interfaces'
import { Card } from 'antd'

const { Meta } = Card;

const Cards: FC<ICard> = ({ movie }) => {
    return (
        <div key={movie.id} style={{ background: 'red', marginLeft: 10 }}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />}
            >
                <Meta title={movie.title} description="www.instagram.com" />
            </Card>
        </div>
    )
}

export default Cards
