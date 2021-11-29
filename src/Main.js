import React from "react"
import City from "./City"
import data from "./data.js"

export default function Main() {
    const cityData = data.map((item, id) => <City key={id} item={item} />)
    return (
        <main className="container">
            {cityData}
        </main>
    )
}