const Card = (props) => {
  return (
    <div className="card">
      <img src={props.src} alt={props.alt} />
      <h3>{props.name}</h3>
      <h5>{props.category}</h5>
    </div>
  );
};
export default Card;
