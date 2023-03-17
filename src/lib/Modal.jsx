import React from "react"
import './Modal.css'

export const Modal = () => {


    return (
        <div className="modal">
            <div className="modal__top">
                <h3 className="modal__top--title">Tire de la Modal</h3>
                <button className="modal__top--btn modal__btn">X</button>
            </div>
            <p className="modal__text">Texte de la Modal</p>
            <button className="modal__btn modal__buttom--btn">fermer la Modal</button>
        </div>
    )
}