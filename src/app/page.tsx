'use client'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import styles from './styles/Home.module.css'
import Header from './components/Header'
//import Sidebar, {Post} from './components/Sidebar'

export default function Home(){

  const [tache, setTache] = useState("")
  const [tab, setTab] = useState<{ id: number; task: string }[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTache(event.target.value)
  }
  const addValue = () => {
    setTab(prev => {
      return [...prev, { id: prev.length+1 , task: tache }]
    })
    setTache("")
  }
  const deleteTask = (id: number) => {
    const newTab = tab.filter((item) => item.id !== id)
    setTab(newTab)
  }

  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <Header />
      <div className={styles.accueil}>
        <h1 className={styles.title}>Accueil</h1>
        <div className={styles.todolist}>
          
          <label htmlFor="task">Ajouter une activité </label>
          <input type="text" placeholder="Entrez une activité..." id="task" value={tache} onChange={handleChange} />
          {tache && (
            <button onClick={addValue}>Ajouter</button>
          )}
          
          <h3>Liste des tâches</h3>
          <br/>
          <ul>
            {tab.map((item) => {
              return <li key={item.id}>{item.task}
                <button onClick={() => deleteTask(item.id)}>Supprimer</button>
              </li>
            })}
          </ul>
        </div>
      </div>
      
    </>
  )
}