import React, { useEffect, useState } from 'react'
import { getChar } from '../app/getChar';

export const Fetch = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {

        getChar().then(res => setCharacters(res));
    }, [])
    console.log(characters)
    return (
        <div className='characterCard' >
            {

                characters.map((character, i) => <li key={i}>
                    <h3>{character.name}</h3>
                    <p>Species: {character.species}</p>
                    <img src={character.image} alt="" />
                </li>)
            }
        </div>
    )
}


export default Fetch
