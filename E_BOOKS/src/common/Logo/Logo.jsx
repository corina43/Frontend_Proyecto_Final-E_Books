import React from "react";
import logo from '../../assets/images/logo2.jpg'

export const Logo = () => {
    return (
        <>
            <div className="logo">
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="LogoImg col-md-4 col-lg-4 col-xl-5 col-xxl-6 col-sm-11">
                                <a href="/"><img src={logo} className="image-header" width="240" height="90" /></a>
                            </div>
                            <div className="textoLogo col-md-7 col-lg-7 col-xl-6 col-xxl-5 d-none d-md-block"><h5>E_BOOKS_friends sumerjase en la magia de los libros de ayer y hoy entre amigos y comparte sus experiencias </h5>
                           </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}