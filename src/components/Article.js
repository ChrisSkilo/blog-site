import React from "react"

function Article( {
    title,
    date = "January 1, 1970",
    preview,
    minutes
} ){
    const displayReadingTime = minutes => {
        if (minutes < 30){
            const cups = Math.ceil(minutes / 5)
            return "☕️".repeat(cups) + `${minutes} min to read`
        } else {
            const bentobox = Math.ceil(minutes / 10)
            return "🍱".repeat(bentobox) + `${minutes} min to read`
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <small>{displayReadingTime(minutes)}</small>
        </article>
    )
    }

export default Article;