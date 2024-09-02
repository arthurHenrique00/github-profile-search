import { useState, useEffect } from "react"

const Form = () => {
    const [notaA, setNotaA] = useState(0);
    const [notaB, setNotaB] = useState(0);
    const [notaC, setNotaC] = useState(0);

    useEffect(() => {
        console.log("ACORDA!!")
    }, [notaA])

    useEffect(() => {
        console.log(`Nota B mudou para: ${notaB}`)
    })

    useEffect(() => {
        console.log(`Nota C mudou para: ${notaC}`)
    })

    const renderizaResult = () => {
        const soma = notaA + notaB + notaC;
        const media = soma / 3;

        if (media >= 7) {
            return(
                <p>Você foi aprovado! :)</p>
            )
        } else {
            return(
                <p>Você foi reprovado!:(</p>
            )
        }
    }

    return(
        <form>
            <ul>
                {[1, 2, 3, 4].map(item => (
                    <>
                        <li key={item}>{item}</li>
                    </>
                ))}
            </ul>
            <input type="number" placeholder="Nota matéria A" onChange={event => setNotaA(parseInt(event.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={event => setNotaB(parseInt(event.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={event => setNotaC(parseInt(event.target.value))}/>
            {renderizaResult()}
        </form>
    )
}

export default Form