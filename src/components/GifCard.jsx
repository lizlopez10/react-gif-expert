
import PropTypes from "prop-types";

const GifCard = ({title, url}) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
GifCard.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
  }
export default GifCard
