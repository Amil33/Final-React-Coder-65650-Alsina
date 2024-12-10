import React, { useState, useEffect } from 'react';
import products from "../../products";

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]); // Estado para los productos

    useEffect(() => {
        // Simulación de una promesa para obtener productos
        const getProducts = new Promise((resolve, reject) => {
            let isLogged = true;
            if (isLogged) {
                resolve(products); // Simulamos productos como ejemplo
            } else {
                reject({ message: "Ocurrió un error" });
            }
        });

        // Manejo de la promesa
        getProducts
            .then((res) => {
                setItems(res); // Actualiza el estado con los productos
            })
            .catch((error) => {
                console.error(error.message); // Loguea el error
            });
    }, []); // Dependencias vacías para que se ejecute solo una vez

    return (
        <div className="bienvenida">
            <h2>{greeting}</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="product-card">

                        <img src={item.imgUrl} alt="a"></img>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>

                    </li> // Renderiza los productos
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;


