import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component'
import '../assets/css/table.css'; 
import * as XLSX from 'xlsx';
import { Button } from '@chakra-ui/react';

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

import {
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react'

const Table = () => {
        const [APIData, setAPIData] = useState([]);
        const [filteredData, setFilteredData] = useState([]);
        const { isOpen, onOpen, onClose } = useDisclosure();
        const [excelData, setExcelData] = useState(null);
        const [excelFile, setExcelFile] = useState(null);
        const [excelFileError, setExcelFileError] = useState(null);
        const [tipo_documento, setTipoDocumento] = useState([]);
        const [formData, setFormData] = useState({
          nombre: '',
          apellido: '',
          correo: '',
          tipoDocumento: '',
          numeroDocumento: '',
        });

        console.log(excelData);

        useEffect(() => {
          const token = localStorage.getItem('token');
          axios.get('http://localhost:6996/api/usuario', {
            headers: {
              'x-api-token-jwt': token,
            },
          })
          .then((response) => {
            setAPIData(response.data);
            setFilteredData(response.data);
          })

          axios.get('http://localhost:6996/api/tipo_documento')
          .then((response) => {
            setTipoDocumento(response.data);
          })

        },[])

        const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
        const handleFile = (e) =>{
          let selectFile = e.target.files[0];
          if (selectFile) {
            console.log(selectFile.type);
            if (selectFile&&fileType.includes(selectFile.type)) {
              let reader = new FileReader();
              reader.readAsArrayBuffer(selectFile);
              reader.onload=(e)=>{
                setExcelFileError(null);
                setExcelFile(e.target.result);
              }
            }
            else{
              setExcelFileError('Por favor seleccione solo un archivo tipo excel');
              setExcelFile(null);
            }
          }
          else{
            console.log('Seleccione el archivo');
          }
        }

        const handleSubmit = (e) =>{
          e.preventDefault();
          if (excelFile!==null) {
            const wrokbook = XLSX.read(excelFile, {type: 'buffer'});
            const worksheetName = wrokbook.SheetNames[0];
            const workSheet = wrokbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(workSheet);
            setExcelData(data);
            const token = localStorage.getItem('token');
            data.map((datas) => {
              const documentoString = datas.documento.toString();
              console.log(datas);
              axios.post('http://localhost:6996/api/usuario', { ...datas, documento: documentoString }, {
                headers: {
                  'x-api-token-jwt': token,
                }
              });
            });
          }
          else{

          }
        }

        const columns = [
        {
            "name": "Nombres",
            selector: (row) => row.nombres,
            sortable: true
        },
        {
            "name": "Apellidos",
            selector: (row) => row.apellidos,
            sortable: true
        },
        {
            "name": "Rol",
            selector: (row) => row.rol_usuario,
            sortable: true
        },
        {
            "name" : "Documento",
            selector: (row) => row.documento,
            sortable: true
        },
        {
            "name": "tipo_documento_usuario",
            selector: (row) => row.tipo_documento_usuario,
            sortable: true
        }
            ]

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
      
          const handleSearch = (e) => {
          const searchTerm  = e.target.value.toLowerCase();
          const filteredResults = APIData.filter(row =>
            row.nombres.toLowerCase().includes(searchTerm) ||
            row.apellidos.toLowerCase().includes(searchTerm) ||
            row.rol_usuario.toLowerCase().includes(searchTerm) ||
            row.documento.toLowerCase().includes(searchTerm) ||
            row.tipo_documento_usuario.toLowerCase().includes(searchTerm)
          );
    
        
          setFilteredData(filteredResults);
          };
  return (
    <div>
    <div className='todooooo'>
      <div className='Table_Container'>
        <div className='buscador_usuarios'>
            <input  type="text"
                    placeholder="Buscar..."
                    onChange={handleSearch}
            />
            
            <form className='form-file' onSubmit={handleSubmit}>
              <label>
                <input type="file" accept=".xlsx" onChange={handleFile} className='input-file'/>
              </label>
              <button className='btn-file'>Enviar</button>
            </form>

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
                  {
                    tipo_documento.map((data, index)=>{
                      return(
                        <option key={index} value={data.id_tipo_documento}>{data.tipo_documento}</option>
                      )
                    })
                  }
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
