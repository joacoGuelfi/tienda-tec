import { useEffect } from "react"
import { useState } from "react"
import { getItem } from "../app/getItem"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [iDetail, setIDetail] = useState([])

    useEffect(() => {
        getItem().then((articulos) => {
            setIDetail(articulos)
        })
    }, [])
    return (
        <div className="prductDetails">
            {
                iDetail.map((articulos, iDetail) =>
                    <div key={iDetail}>
                        <ItemDetail item={articulos} />
                    </div>)
            }
        </div>
    )
}

export default ItemDetailContainer