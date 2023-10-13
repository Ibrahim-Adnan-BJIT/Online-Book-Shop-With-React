const Card = ({ userId, title, body, tags }) => {
  return (
    <div
      key={userId}
      style={{ margin: "10px", border: "1px solid", borderRadius: "5px" }}
    >
      <h3>UserId: {userId}</h3>
      <p>Title: {title}</p>
      <p>body: {body} </p>
      {tags &&
        tags.map((tag, index) => {
          return <h5 key={index}>{tag}</h5>;
        })}
    </div>
  );
};

export default Card;
