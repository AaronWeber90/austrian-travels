import React from "react"

export default function City(props) {
    
    return (
        <div className="city-container">
            <div className="city-img">
                <img src={props.item.imageUrl} alt={props.item.title}/>
                {props.item.isSoldOut && <span className="badge">Sold out!</span>}
            </div>
            <div className="city-info">
                <h2>{props.item.title}</h2>
                <a className="city-link-maps" href={props.item.googleMapsUrl}>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>View on Google Maps</span>
                </a>
                <p className="city-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="city-description">{props.item.description}</p>
                <button disabled={props.item.isSoldOut} className="city-cta" href="">Book now</button>
            </div>
        </div>
    )
}
