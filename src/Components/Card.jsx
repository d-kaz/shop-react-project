export const Card = ({name, img, rating, price}) => {
  return (
    <div>
      <div className="card">
        <img width={250} height={250} src={img} alt="картинка техники" />
        <div>{name}</div>
        <div>рейтинг: {rating}*</div>
        <h3>${price}</h3>
      </div>
    </div>
  );
};
