function ChartRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.color}</td>
      {/* <td>
        <ul>
          {props.Categories.map((category, i) => (
            <li key={`category ${i}`}>{category}</li>
          ))}
        </ul>
      </td>
      <td>{props.Awards}</td> */}
    </tr>
  );
}

export default ChartRow;
