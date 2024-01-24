function Bootcamp(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.hours}</p>
      <p>{props.format}</p>
      <p>{props.description}</p>
      <p>+ INFO</p>
    </div>
  );
}

export default Bootcamp;
