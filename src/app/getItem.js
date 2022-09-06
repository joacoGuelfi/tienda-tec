import fotoBlazer from "../assets/blazer.jpeg"
import fotoCamisa from "../assets/camisa.jpeg"
import fotoJean from "../assets/jean.jpeg"



export const getItem = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    producto: "Camisa",
                    precio: 2000,
                    marca: "La Josefina",
                    foto: { fotoCamisa }

                },
                {
                    producto: "Blazaer",
                    precio: 1500,
                    marca: "La Josefina",
                    foto: { fotoBlazer }
                },

                {
                    producto: "Jean",
                    precio: 5000,
                    marca: "Levis",
                    foto: { fotoJean }
                },
            ])

        }, 2000)
    })
    return task

}

