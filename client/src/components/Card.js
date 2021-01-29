import "./Card.css";

const Card = ({ post }) => {
  return (
    <div className="card">
      <p className="card__title">{post.title}</p>
      <p className="card__author">{post.author}</p>
      <p className="card__body">{post.body}</p>
    </div>
  );
};

export default Card;
