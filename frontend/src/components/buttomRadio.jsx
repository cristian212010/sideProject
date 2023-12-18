import React, { useState } from 'react';
import '../assets/css/buttonRadio.css'; // Archivo de estilos CSS

const MultiSelectCheckbox = () => {
  const opciones = ['NodeJs', 'AWS', 'Php'];

  // Estado local para realizar un seguimiento de las opciones seleccionadas
  const [seleccionados, setSeleccionados] = useState([]);

  // Función para manejar cambios en la selección
  const handleSelect = (opcion) => {
    // Si la opción ya está seleccionada, quítala; de lo contrario, agrégala
    if (seleccionados.includes(opcion)) {
      setSeleccionados(seleccionados.filter((item) => item !== opcion));
    } else {
      setSeleccionados([...seleccionados, opcion]);
    }
  };

  return (
    <div className='button_radio_container'>
      {opciones.map((opcion) => (
        <label key={opcion} className="custom-checkbox-label-radio">
          <input
            type="checkbox"
            checked={seleccionados.includes(opcion)}
            onChange={() => handleSelect(opcion)}
            className="custom-checkbox-radio"
          />
          <div className="custom-checkbox-square-radio"></div>
          {opcion}
        </label>
      ))}
    </div>
  );
};

export default MultiSelectCheckbox;