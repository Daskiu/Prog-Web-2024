import './style.css'
import { Counter } from '../Counter/Counter'
import { Button } from '../Button/Button'
import { Facts } from '../Facts/Facts'

import { useState } from 'react'

export function Body() {
    const startValue = 0
    const [count, setCount] = useState(startValue)

    const countUp = (event) => {
        setCount(count + 1)
    }

    const countDown = (event) => {
        count > 0 ?
            setCount(count - 1)
            :
            alert("Count can't be less than 0")
    }

    const countReset = (event) => {
        setCount(startValue)
    }

    const buttonUp = {
        className: 'buttonUp',
        clickFunction: countUp,
        text: '+'
    }

    const buttonDown = {
        className: 'buttonDown',
        clickFunction: countDown,
        text: '-'
    }

    const buttonReset = {
        className: 'buttonReset',
        clickFunction: countReset,
        text: 'RESET'
    }

    return (
        <main>
            <div className='main-div'>
                <Button className={buttonDown.className} clickFunction={buttonDown.clickFunction} text={buttonDown.text} />
                <Counter count={count} />
                <Button className={buttonUp.className} clickFunction={buttonUp.clickFunction} text={buttonUp.text} />
            </div>
            <Button className={buttonReset.className} clickFunction={buttonReset.clickFunction} text={buttonReset.text} />
            <Facts count={count}/>
        </main>
    )
}
