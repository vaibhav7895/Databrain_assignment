
import React from 'react';

const FormDataDisplay = ({ formData }) => {
  return (
    <div>
      <h2>Submitted Data</h2>
      <table>
        <tbody>
          {Object.entries(formData).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormDataDisplay;
