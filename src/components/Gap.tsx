import { FC } from 'react'
import { IGap } from '../interfaces'

const Gap: FC<IGap> = ({ width, height }) => {
    return <div style={{width: width, height: height}}/>
}

export default Gap
