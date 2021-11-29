import React from "react"
import Icon from "./austria-icon.webp"

console.log(Icon)

export default function Header() {
    return (
        <header className="header">
            <div className="header-overlay">
                <img src={Icon} alt="" />
                <h1>Austrian Travels</h1>
            </div>
        </header>
    )
}