import React from "react"

export default function FeaturedArticleSingle(props) {
    console.log(props)

    return (
        <div className="featured-article">
            <img className="featured-article-image" src={props.ArticleImage} />
            <h6 className="featured-article-title">{props.ArticleTitle}</h6>
        </div>
    )
}