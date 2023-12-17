import React from "react";
import Navbar from "../components/navbar";
import '../assets/css/usuarios.css';
import Table from "../components/table";
import { ChakraProvider } from '@chakra-ui/react'

const Usuarios = () => {
    return(
        <div className="padre">
            <Navbar></Navbar>
            <ChakraProvider>
            <Table></Table>
            </ChakraProvider>
        </div>
    )
}


export default Usuarios;