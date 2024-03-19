import { useState, useEffect } from 'react';
import styles from "./Home.module.css"

function Busqueda() {
    const [nombre, setNombre] = useState('');
    const [mostrarDatos, setMostrarDatos] = useState(null);
    const [mostrarImg, setMostrarImg] = useState(null);

    useEffect(() => {
        async function startFetching() {
            setMostrarDatos(null)
            try {
                const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
                if (respuesta.ok) {
                    const datos = await respuesta.json();

                    if (datos.name) {
                        setMostrarDatos(`Nombre ${datos.name}`)
                    }
                    if (datos.sprites) {
                        setMostrarImg("" + datos.sprites.front_default);
                    }


                } else {
                    setMostrarDatos(["Pokemon no encontrado"])
                    setMostrarImg(null)
                }
            } catch (error) {
                setMostrarDatos(["Error conexion Api" + error])
                setMostrarImg(null)
            }
        }
        startFetching();

    }, [nombre])

    const handleChange = (e) => {
        e.preventDefault();
        setNombre(e.target.value);
    };

    return (
        <>
            <h1>Buscar pokemons</h1>
            <form>
                <input type="text" placeholder="Ingresa el nombre del Pokémon" value={nombre} onChange={handleChange} />
            </form>
            <div className={styles.Home}>
                <h2>{[mostrarDatos] ?? 'Loading...'}</h2>
                <img src={[mostrarImg] ?? ''}></img>
            </div>
        </>
    )

}



export default Busqueda;



/**     */