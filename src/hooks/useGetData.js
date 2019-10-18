import { useState, useEffect } from 'react';
// Importamos funciones hooks desde la libreria de react

//funcion que actualiza nuestro estado: mydata es el estado 
//y setData es la funcion que actializa nuestro estado
const useGetData = (url) => {
    const [mydata, setData] = useState([]);

    useEffect(() => {  //Se encarga de hacer la petición
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    return mydata //retornamos lo que la petición ha resuelto
}

export default useGetData;