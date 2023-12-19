import React from "react";
import Navbar from "../components/navbar";
import Home from "../components/home";
import InfoInicio from "../components/infoInicio";
import Footer from "../components/footer";

const Inicio = () =>{
    return(
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <InfoInicio></InfoInicio>
            <Footer></Footer>
        </div>
    )
}

export default Inicio;