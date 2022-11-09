import React, { useState } from 'react'
import './Form.css'
import { useDispatch } from 'react-redux';

function Form() {

    const [article, setArticle] = useState({
        title: "",
        body: ""
    })

    const dispatch = useDispatch();

    const handleForm = e => {
        e.preventDefault();
        dispatch({
            type: "ADDARTICLE",
            payload: article
        })

        setArticle({
            title: "",
            body: ""
        })
    }

    const handleInput = e => {
        if (e.target.classList.contains('inp-title')) {
            const newObjState = { ...article, title: e.target.value }
            setArticle(newObjState)
        } else if (e.target.classList.contains('inp-body')) {
            const newObjState = { ...article, body: e.target.value }
            setArticle(newObjState)
        }
    }

    return (
        <>
            <h1 className='title-form'> Write an article </h1>

            <form onSubmit={handleForm} className='container-form'>
                <label> Title</label>
                <input className='inp-title' onChange={handleInput} value={article.title} type="text" id="title" placeholder='Write your name' />

                <label> Your article</label>
                <textarea className='inp-body' onChange={handleInput} value={article.body} id="article" placeholder='Your article' />

                <button> Submit</button>
            </form>
        </>
    )
}

export default Form