import "./Item.styles.css";

const Item = ({title, price, imgurl}) => {
  return (
    <div className="item-listed">
    <img src={imgurl} alt={title} />
    <br></br>
    <br></br>
    <h2>{title}</h2>
    <p>${price}.-</p>
    </div>
  )
}

export default Item