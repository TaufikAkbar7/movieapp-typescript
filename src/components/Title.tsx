import { FC } from 'react'
import { ITitle } from '../interfaces'

const Title: FC<ITitle> = ({ title, subtitle }) => {
    return (
        <div>
            <div style={{
                display: 'inline-block',
                borderLeft: '4px solid #1890FF',
                height: 30
            }}>
                <h4 style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 10,
                }}>
                    {title}</h4>
            </div>
            <p style={{
                fontSize: 16,
                marginTop: 10,
                marginLeft: 14
            }}>
                {subtitle}</p>
        </div>
    )
}

export default Title
