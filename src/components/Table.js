import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Table({ tableData, editButton, deleteButton }) {
  return (
    <div id="Table">
      <table>
        <tr>
          <th>Chef Name</th>
          <th>Recipe</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {tableData.map((row, id) => (
          <tr key={id}>
            {" "}
            <td>{row.chefName}</td>
            <td>{row.recipe}</td>
            <td>
              {" "}
              <FontAwesomeIcon
                icon={faEdit}
                className="edit-icon"
                onClick={() => editButton(row)}
              />
            </td>
            <td>
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="delete-icon"
                onClick={() => deleteButton(row)}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
