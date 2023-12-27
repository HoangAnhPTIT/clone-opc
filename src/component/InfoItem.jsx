
export default function InfoItem({img, title, text}) {
  return (
    <div className="info-item">
      <img className="info-item-img" src={img} alt="" />
      <p className="info-item-title">{title}</p>
      <h4 className="info-item-text">{text}</h4>
    </div>
  )
}
