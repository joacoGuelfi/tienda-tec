export const getChar = () => fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5")
    .then(res => res.json())