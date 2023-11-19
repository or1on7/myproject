"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "next/navigation"
import Header from './../../components/Header'

const ProfileID = () => {
    const params = useParams()
    const [val, setVal] = useState<JSX.Element[]>([]); // Initialize with an empty array
    const [tab, setTab] = useState([
        {
          nom: "Charline",
          age: 27
        },
        {
          nom: "Max",
          age: 28
        },
        {
          nom: "Marine",
          age: 24
        }
      ])
    
    useEffect(() => {
        const valeurs = tab.map((person, index) => {
          return (
            <li key={index}>
              {person.nom}: {person.age} ans.
            </li>
          )
        })
        setVal(valeurs)
    }, [tab])

    return (
        <>
            <Header />
            <br/>
            <div><h1>Profile {params.id}</h1></div>
            <br /><br />
            <ul>{val}</ul>
        </>
    )
}

export default ProfileID
