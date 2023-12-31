import rulesImg from '../imgs/image-rules.svg'
import iconClose from '../imgs/icon-close.svg'
import { useState } from 'react'
export default function Relues() {
    const [clicked, setClicked] = useState()
    const show = () => {
        setClicked(true)
    }
    const hidd = () => {
        setClicked(false)
    }

    return <>
        <button onClick={show} className="rules-btn" tabIndex="1">
            rules
        </button>
        <div className={clicked ? 'modal show-modal' : 'modal'}>
            <div className="modal__container">
                <header className="modal__header">
                    <h2 className="modal__heading">rules</h2>
                    <button onClick={hidd} className="close-btn">
                        <img src={iconClose} alt="Close Button" />
                    </button>
                </header>
                <img src={rulesImg} alt={rulesImg} className="rules-img" />
            </div>
        </div>
    </>
}