import {useEffect, useState} from "react";

export default function App() {
    const [total, setTotal] = useState(0);
    const [livros, setLivros] = useState([]);

    async function buscarLivros() {
        let busca = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        busca = await busca.json()

        setLivros(busca.livros);
        setTotal(busca.total);

        console.log("Calopsita")
    }

    useEffect(function () {
        buscarLivros(

        )
    }, [])

    return (
        <>
            <h1>Listagem de Livros</h1>
            <p>Total de livros {total}</p>

            {livros.map(function (livro, index) {
                return (
                    <div key={index}>
                        <img key={index} src={livro.imagem} />
                        <h2>{livro.titulo}</h2>
                        <h3>{livro.autor}</h3>
                        <p>{livro.categoria}</p>
                    </div>
                )
            })}
        </>
    )
}