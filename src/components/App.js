import React, {useState, useEffect} from 'react'

function App(){
    const [isLoading, setIsLoading] = useState(true)
    const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then( result => {
            setImgUrl(result.message)
            setIsLoading(false)
        })
    })

    return (
        <div>
            {isLoading ? <p>Loading...</p> : <img src={imgUrl} alt="A Random Dog"/>}
        </div>
    )
}

export default App

