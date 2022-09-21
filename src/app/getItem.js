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
                    foto: "https://cf.shopee.com.ar/file/a65e43c590efcbd11ac2fe1986ccfc4a",
                    categorie: "camisas"

                },
                {
                    id: 5,
                    producto: "Camisa",
                    name: "Camisa Marron",
                    talle: "M",
                    precio: 2000,
                    marca: "Levis",
                    foto: "https://cf.shopee.com.ar/file/a65e43c590efcbd11ac2fe1986ccfc4a",
                    categorie: "camisas"

                },
                {
                    id: 2,
                    producto: "Blazaer",
                    name: "Blazer negro con botones",
                    talle: "L",
                    precio: 1500,
                    marca: "La Josefina",
                    foto: "https://i.pinimg.com/236x/cd/29/c5/cd29c5a2a33d4c874293e699176abce7.jpg",
                    categorie: "abrigos"
                },

                {
                    id: 3,
                    producto: "Jean",
                    name: "Jean color negro",
                    talle: "36",
                    precio: 5000,
                    marca: "Levis",
                    foto: "https://cf.shopee.com.ar/file/2f48f37ece57c3b2afcf4ac8e94fa86f_tn",
                    categorie: "pantalones"
                },
            ])

        }, 2000)
    })
    return task

}

