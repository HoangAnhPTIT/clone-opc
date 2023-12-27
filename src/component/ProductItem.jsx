
export default function ProductItem({src, title}) {
  return (
    <div className="product-item">
      <img src={src} alt="" />
      <p className="text-blue font-weight-5 width-16rem">{title}</p>
      <div className="more-button">Xem thêm</div>
    </div>
  )
}
