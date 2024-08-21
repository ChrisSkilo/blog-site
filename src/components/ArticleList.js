import React from "react"
import Article from "./Article"

function ArticleList( {posts} ){
    const articleItem = posts.map(post => 
        <Article
            key={post.id}
            {...post}

        />
    )
    return (
        <main>
            {articleItem}
        </main>
    )
}

export default ArticleList;