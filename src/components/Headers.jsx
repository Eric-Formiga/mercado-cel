import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderArea } from '../styles/styles'

const Headers = () => {
    return (
        <div>
            <HeaderArea>
                <Link to='/'>Loja</Link>
                <Link to='/cart'>Carrinho</Link>
            </HeaderArea>
        </div>
    )
}

export default Headers
