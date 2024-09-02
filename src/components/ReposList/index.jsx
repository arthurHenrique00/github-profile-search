import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson)
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            <ul className={styles.list}>
            {repos.map(repositorio => (
                <li className={styles.listItem} key={repositorio.id}>
                    <div className={styles.itemName}>
                        <b className={styles.itemName}>Nome: </b> {repositorio.name} <br />
                    </div>
                    <div className={styles.itemLanguage}>
                        <b className={styles.itemLanguage} >Linguagem: </b> {repositorio.language} <br />
                    </div>
                    <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                </li>
            ))}
            <li>Repositório</li>
        </ul>
        </div>
    )
}

export default ReposList