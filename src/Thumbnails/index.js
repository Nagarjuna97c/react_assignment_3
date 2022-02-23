import './index.css'

const Thumbnails = props => {
  const {imgDetails, checkId} = props
  const {id, thumbnailUrl} = imgDetails

  const sendId = () => {
    checkId(id)
  }

  return (
    <li>
      <button type="button" className="button4">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail"
          onClick={sendId}
        />
      </button>
    </li>
  )
}

export default Thumbnails
