import React from 'react'
import { background } from '../../profile'

const ParticlesBackground = () => {
    return (
        <div className="particle">
            { background.type === 'Snow'}
        </div>
    )
}

export default ParticlesBackground
