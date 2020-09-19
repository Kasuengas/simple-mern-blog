import React,{useState, useEffect} from 'react'

export default function Article({match}) {

    const [article, setArticle] = useState({})

        useEffect(() => {
            fetch(`/articles/${match.params.articleId}`)
            .then(response => response.json())
            .then(article => setArticle(article))
            .catch(error => alert(error))
        })

    return(
    <article> {/* this is just an HTML element 😄*/}
      <h1>{article.title}</h1>
      <p>{article.text}</p>
    </article>
  )
}
