import React, { useState } from 'react'

import Headers from '../components/Headers'
//localStorage
import { getItem, setItem } from '../services/LocalStorageFuncs'

//icons
import { BsFillCartDashFill } from 'react-icons/bs'

//styles
import { ProductArea } from '../styles/styles'

const Cart = () => {
    const [data, setData] = useState(getItem("carrinhoYt") || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem("carrinhoYt", arrFilter)
    }

    const SubTotal = data.reduce((acc,cur)=> acc + cur.price ,0)

    return (
        <div>
            <Headers/>
            <h3>{`SubTotal: R$ ${SubTotal}`}</h3>
            <ProductArea>
                {
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt={e.title} />
                            <h4>R${e.price}</h4>
                            <button onClick={() => removeItem(e)}>
                                <BsFillCartDashFill />
                            </button>
                        </div>
                    ))
                }
            </ProductArea>
        </div>
    )
}

export default Cart