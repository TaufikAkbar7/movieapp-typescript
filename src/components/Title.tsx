import { FC } from 'react'
import { ITitle } from '../interfaces'

const Title: FC<ITitle> = ({ title, subtitle }) => {
    return (
        <div>
            <div style={{
                display: 'inline-block',
                borderLeft: '4px solid #1890FF',
                height: 30,
            }}>
                <h4 style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    color: '#FFF'
                }}>
                    {title}</h4>
            </div>
            <p style={{
                fontSize: 16,
                marginTop: 10,
                marginLeft: 14,
                color: '#FFF'
            }}>
                {subtitle}</p>
        </div>
    )
}

export default Title
