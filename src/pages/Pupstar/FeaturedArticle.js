import React from "react"
import FeaturedArticleSingles from "./FeaturedArticleSingle"
import PupstarArticleList from "./PupstarArticleList"

export default function FeaturedArticle() {
    const FeaturedArticleComponent = PupstarArticleList.map((articleItems) => {
        return (
            <FeaturedArticleSingles
                key={articleItems.id}
                ArticleImage={articleItems.image}
                ArticleTitle={articleItems.title}
                ArticleLink={articleItems.link}
            />
        )
    })

    return (
        <>
            {FeaturedArticleComponent}
        </>
    )
}