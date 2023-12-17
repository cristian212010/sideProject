import React, { useState } from 'react';
import DataTable from 'react-data-table-component'
import '../assets/css/table.css'; 
import { Button } from '@chakra-ui/react';
/* Modal dependencias */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

/* Formulario dependencia */

import {
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react'

const Table = () => {
        const columns = [
        {
            "name": "Nombre",
            selector: row => row.nombre,
            sortable: true
        },
        {
            "name": "Apellido",
            selector: row => row.apellido,
            sortable: true
        },
        {
            "name": "Documento",
            selector: row => row.documento,
            sortable: true
        },
        {
            "name" : "Edad",
            selector: row => row.edad,
            sortable: true
        },
        {
            "name": "email",
            selector: row => row.email,
            sortable: true
        }
            ]

        const userData = [
        {
          id: 1,
          nombre: "Juan",
          apellido: "Pérez",
          documento: "123456789",
          edad: "25",
          email: "juan.perez@example.com",
        },
        {
          id: 2,
          nombre: "María",
          apellido: "Gómez",
          documento: "987654321",
          edad: "30",
          email: "maria.gomez@example.com",
        },
        {
          id: 3,
          nombre: "Carlos",
          apellido: "Rodríguez",
          documento: "456789123",
          edad: "28",
          email: "carlos.rodriguez@example.com",
        },
        {
            id: 4,
            nombre: "Ana",
            apellido: "López",
            documento: "789123456",
            edad: 22,
            email: "ana.lopez@example.com",
          },
          {
            id: 5,
            nombre: "Luis",
            apellido: "Martínez",
            documento: "654321987",
            edad: 35,
            email: "luis.martinez@example.com",
          },
          {
            id: 6,
            nombre: "Isabel",
            apellido: "Hernández",
            documento: "321456789",
            edad: 29,
            email: "isabel.hernandez@example.com",
          },
          {
            id: 7,
            nombre: "Javier",
            apellido: "Gutiérrez",
            documento: "876543210",
            edad: 27,
            email: "javier.gutierrez@example.com",
          },
          {
            id: 8,
            nombre: "Carmen",
            apellido: "Díaz",
            documento: "234567891",
            edad: 31,
            email: "carmen.diaz@example.com",
          },
          {
            id: 9,
            nombre: "Elena",
            apellido: "Sánchez",
            documento: "109876543",
            edad: 26,
            email: "elena.sanchez@example.com",
          },
          {
            id: 10,
            nombre: "Miguel",
            apellido: "Ramírez",
            documento: "210987654",
            edad: 32,
            email: "miguel.ramirez@example.com",
          },
          {
            id: 11,
            nombre: "Laura",
            apellido: "Fernández",
            documento: "987654321",
            edad: 28,
            email: "laura.fernandez@example.com",
          },
          {
            id: 12,
            nombre: "Diego",
            apellido: "Luna",
            documento: "876543210",
            edad: 33,
            email: "diego.luna@example.com",
          },
          {
            id: 13,
            nombre: "Sofía",
            apellido: "García",
            documento: "543210987",
            edad: 29,
            email: "sofia.garcia@example.com",
          },
        
          ];

        const customStyles = {
        headRow: {
          style: {
            backgroundColor: 'lightblue',
          },
        },
        headCells: {
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            },
          },
          rows: {
            style: {
              backgroundColor: 'rgba(0, 128, 0, 0.1)',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(0, 128, 0, 0.3)',
              },
            },
          },
          cells: {
            style: {
              padding: '10px',
            },
          },
          pagination: {
            style: {
              backgroundColor: 'lightblue',
            },
          },
          };

        const [searchText, setSearchText] = useState('');
        const [filteredData, setFilteredData] = useState(userData);
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const handleChangeSearch = (e) => {
          const searchValue = e.target.value;
          setSearchText(searchValue);
      
          // Filtrar los datos localmente
          const filtered = userData.filter(
            (item) =>
              item.nombre.toLowerCase().includes(searchValue.toLowerCase()) ||
              item.apellido.toLowerCase().includes(searchValue.toLowerCase()) ||
              item.documento.includes(searchValue) ||
              item.edad.toString().includes(searchValue) ||
              item.email.toLowerCase().includes(searchValue.toLowerCase())
          );
      
          setFilteredData(filtered);
          };
  return (
    <div>
    <div className='todooooo'>
      <div className='Table_Container'>
        <div className='buscador_usuarios'>
            <input  type="text"
                    placeholder="Buscar..."
                    value={searchText}
                    onChange={handleChangeSearch}
            />
            <label class="custom-file-input">
              <input type="file"/>
            </label>

            <Button colorScheme='blue' onClick={onOpen}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" stroke="#fffffff" stroke-width="2"></path>
              <path d="M17 15V18M17 21V18M17 18H14M17 18H20" stroke="#fffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              AÑADIR
            </Button>
        </div>
        <div className='tabla'>
            <DataTable 
            columns={columns}
            data={filteredData}
            fixedHeader
            fixedHeaderScrollHeight="340px"
            pagination
            customStyles={customStyles}
            >
            </DataTable>
        </div>
    </div>
    </div>
    <>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Añadir nuevo usuario</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
                <Input type='text' required/>
              <FormLabel>Apellido</FormLabel>
                <Input type='text' required/>
              <FormLabel>Correo Electronico</FormLabel>
                <Input type='email' required/>
              <FormLabel>Correo Electronico</FormLabel>
                <Input type='email' required/>
              <FormLabel>Tipo Documento</FormLabel>
                <Select placeholder='Selecciona un tipo de Documento'>
                  <option value=''>Option</option>
                </Select>
              <FormLabel>Numero Documento</FormLabel>
                <Input type='text' required/>
            
              <div className='grupo_btn'>
              <Button className='sub_formulario' type='submit' colorScheme='purple' mr={3}>
                Crear nuevo usuario
              </Button>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cerrar
              </Button>
             </div>
            </FormControl>
            
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    </div>
  );
};

export default Table;
