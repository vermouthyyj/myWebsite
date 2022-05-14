import React from 'react'
import Particles from 'react-particles-js'
import { background } from '../../profile'

const ParticlesBackground = () => {
    return (
        <div className="particle">
            { background.type === 'Snow' && <Particles
            height="100vh"
            width="100%"
                params={{
                "particles": {
                    "number": {
                        "value": 40,
                        "density": {
                            "enable": false
                        }
                    },
                    "color": {
                        "value": "#000000"
                    },
                    "size": {
                        "value": 20,
                        "random": true
                    },
                    "move": {
                        "direction": "top",
                        "out_mode": "out"
                    },
                    "line_linked": {
                        "enable": false
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "remove"
                        }
                    },
                    "modes": {
                        "remove": {
                            "particles_nb": 5
                        }
                    }
                }
            }} />}
        </div>
    )
}

export default ParticlesBackground
