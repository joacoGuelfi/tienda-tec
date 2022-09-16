import fotoBlazer from "../assets/blazer.jpeg"
import fotoCamisa from "../assets/camisa.jpeg"
import fotoJean from "../assets/jean.jpeg"



export const getItem = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    producto: "Camisa",
                    name: "Camisa de Jean",
                    talle: "M",
                    precio: 2000,
                    marca: "La Josefina",
                    foto: { fotoCamisa },
                    categorie: "camisas"

                },
                {
                    id: 2,
                    producto: "Blazaer",
                    name: "Blazer negro con botones",
                    talle: "L",
                    precio: 1500,
                    marca: "La Josefina",
                    foto: { fotoBlazer },
                    categorie: "abrigo"
                },

                {
                    id: 3,
                    producto: "Jean",
                    name: "Jean color negro",
                    talle: "36",
                    precio: 5000,
                    marca: "Levis",
                    foto: { fotoJean },
                    categorie: "pantalones"
                },
            ])

        }, 2000)
    })
    return task

}

