import React from "react";

import "./tableStyles.css";

const Table_2xN = props => {
  const renderTableRow = rowItem => (
    <tr key={`${rowItem.name}-${rowItem.value}-${Math.random(1, 100)}`}>
      <th>{rowItem.name} :</th>
      <td>{rowItem.value}</td>
    </tr>
  );

  const renderTable = () => (
    <table>
      <tbody>{props.description.map(rowItem => renderTableRow(rowItem))}</tbody>
    </table>
  );

  if (!props.description) {
    return <div>description not availiable</div>;
  }

  return <div>{renderTable()}</div>;
};

export default Table_2xN;
