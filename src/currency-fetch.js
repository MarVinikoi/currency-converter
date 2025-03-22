
import { useState, useEffect } from "react"

export default function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

        const res = fetch(url).then((res) => res.json()).then((res) => setData(res[currency]))

    }, [currency])

    return data
}

