import React, { useEffect, useState } from 'react'
import Card from "../../Components/Card/Card"
import './Home.css'
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../../redux/articles/articleReducer';
import { v4 as uuidv4 } from "uuid"
import { Link } from 'react-router-dom'

function Home() {

    const { article } = useSelector(state => ({
        ...state.articleReducer
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (article.length === 0) {
            dispatch(getArticles())
        }
    }, [])


    return (
        <>
            <h1 className='home-title'> Tous les articles</h1>
            <div className="container-cards">
                {article.map(item => {
                    return (
                        <Card>
                            <h2>{item.title}</h2>
                            <Link to={`articles/${item.title.replace(/\s+/g, '-').trim()}`}
                                state={{
                                    title: item.title,
                                    body: item.body
                                }}>
                                Lire l'article
                            </Link>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

export default Home