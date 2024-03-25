import { useEffect, useState } from "react"
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(response => response.json())
            .then(data => {
                const { fact } = data
                const firstWord = fact.split(' ')[0]
                setFact(fact)
                setImageUrl(`https://cataas.com/cat/says/${firstWord}?size=50&color=red`)
            })

    }, [])


    return (
        <main>
            <h1>Kitty App</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} />}
        </main>

    )
}