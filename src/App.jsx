import { useState } from "react";
import InfoItem from "./component/InfoItem"
import { Modal } from "./component/Modal"
import ProductItem from "./component/ProductItem"
import ModalImage from "./component/ModalImage";

function App() {
  const products = [
    {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/07/hop-chai-xb-web-1-247x247.webp',
      'title': 'THUỐC TRỊ SỎI THẬN KIM TIỀN THẢO'
    },
    {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/09/chai-va-hop-247x247.webp',
      'title': 'HOASTEX®'
    },
    {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/03/hop-2-vi-nghieng-1-247x247.webp',
      'title': 'VIÊN XÔNG EUCA – OPC'
    }
    , {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/03/avatar-5-247x247.webp',
      'title': 'DẦU KHUYNH DIỆP OPC'
    },
    {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/07/hop-va-vi-1-247x247.webp',
      'title': 'MIMOSA VIÊN AN THẦN'
    },
    {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/03/hop-va-chai-3-247x247.webp',
      'title': 'SANOLIN 20'
    },
    {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/07/hop-5-247x247.webp',
      'title': 'SÂM NGỌC LINH YẾN SÀO OPC'
    }
    , {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/07/avata-1-247x247.webp',
      'title': 'SANOLIN 20 SÂM NGỌC LINH YẾN SÀO'
    },
    {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/07/hop-100-2-247x247.webp',
      'title': 'TRÀ TÚI LỌC RUTON'
    },
    {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/03/hop-vi-247x247.webp',
      'title': 'VIÊN NGẬM DƯỠNG THANH OPC'
    },
    {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/08/hop-chai-15-247x247.webp',
      'title': 'THUỐC HO TRẺ EM OPC'
    }
    ,
    {
      'img': 'https://opcpharma.com/wp-content/uploads/2023/08/Ho-nguoi-lon-hop-90-247x247.webp',
      'title': 'THUỐC HO TRẺ EM OPC'
    }
  ]
  const [isOpen, setIsopen] = useState(false);
  const showModal = () => setIsopen((prev) => !prev);

  return (
    <>
      <header>
        <div className="top-bar">
          <div className="top-bar-menu">
            <p className="top-bar-item">Quan hệ cổ đông</p>
            <p className="top-bar-item">Cơ hội nghề nghiệp</p>
            <p className="top-bar-item">Trang liên kết</p>
            <p className="top-bar-item">Liên hệ</p>
          </div>
        </div>
        <div className="menu">
          <img src="https://opcpharma.com/wp-content/uploads/2023/03/Logo-OPC.png" alt="" />
          <div className="menu-item">
            <a href="#improve" className="pointer">Về chúng tôi</a>
            <a href="#section-intro" className="pointer">Sản phẩm</a>
            <a href="#machine" className="pointer">Phát triển bền vững</a>
            <a href="#quanlity" className="pointer">Cẩm nang sức khỏe</a>
            <a href="#section-intro" className="pointer">Tin tức</a>
            <p className="buy-button">
              Mua hàng
            </p>
          </div>
        </div>
      </header>
      <div className="banner">
      </div>
      <div className="info-page">
        <div className="info-page-container">
          <InfoItem img={"https://opcpharma.com/wp-content/uploads/2023/03/1-1.png"} text={"Hình thành và phát triển"} title={"> 45 Năm"} />
          <InfoItem img={"https://opcpharma.com/wp-content/uploads/2023/03/2-1.png"} text={"Chuyên môn và tâm huyết"} title={"Lực lượng Nhân sự"} />
          <InfoItem img={"https://opcpharma.com/wp-content/uploads/2023/03/3-1.png"} text={"Doanh thu trong năm 2021"} title={"> 1000 Tỷ"} />
          <InfoItem img={"https://opcpharma.com/wp-content/uploads/2023/03/4.png"} text={"Giá trị vốn hóa năm 2022"} title={"> 1500 Tỷ"} />
        </div>
      </div>

      <div className="section-img">
      </div>

      <div id="improve" className="improve-info-section">
        <div className="improve-info">
          <div className="improve-info-title text-blue">
            <div className="font-primary font-size-30">
              Hơn 45 năm
            </div>
            <h3 className="font-primary font-size-50 margin-left-40px font-weight-5">Nghiên cứu <br />
              & Phát triển</h3>
            <div className="improve-info-text">Biến tiềm năng dược liệu Việt Nam
              trở thành những sản phẩm chất lượng
              mang tầm quốc tế.</div>
          </div>
          <div>
            <img src="https://opcpharma.com/wp-content/uploads/2023/08/hinh-mau-nam.png" alt="" />
          </div>
        </div>
      </div>
      <div id="section-intro" className="section-intro font-primary font-size-50">
        <img className="section-img" src="https://opcpharma.com/wp-content/uploads/2023/11/banner-4.png" alt="" />
        <div className="section-intro-info" >
          <p>Làm chủ vùng nguyên liệu đạt chuẩn</p>
          <p>GACP-WHO trải rộng khắp <span>Việt Nam</span></p>
          <p className="font-size-25 margin-top-20">
            Mang lại giá trị cho cộng đồng, kinh tế địa phương từ các vùng trồng dược liệu <br />
            tạo nên chuỗi giá trị chặt chẽ cho nông sản Việt Nam.
          </p>
        </div>
      </div>

      <div id="machine" className="section-machine">
        <img className="section-img" src="https://opcpharma.com/wp-content/uploads/2023/03/st-bg-4.png" alt="" />
        <div className="section-machine-info">
          <p className="font-primary font-size-60 text-blue">Sở hữu nhà máy với <br /> công nghệ chiết xuất</p>
          <p className="section-machine-info-text">Đạt chuẩn GMP-WHO đảm bảo
            tiêu chuẩn an toàn và tối ưu
            hoạt chất trong dược liệu,
            sản xuất với công nghệ
            chiết xuất hiện đại, khép kín từ
            nguồn nguyên liệu đến thành phẩm.</p>
        </div>
      </div>

      <div id="quanlity" className="section-quanlity">
        <img className="quanlity-img" src="https://opcpharma.com/wp-content/uploads/2023/08/banner-cup-1.png" alt="" />
        <div>
          <p className="font-primary font-size-60 text-blue">Bảo chứng chất lượng</p>
          <p className="base-text">Sản phẩm chất lượng là kim chỉ nam trong mọi hoạt động của OPC.</p>
          <p className="base-text">“Hữu xạ tự nhiên hương” – OPC nhiều năm liền nhận được sự tin tưởng, công nhận <br />
            của người tiêu dùng và các tổ chức y tế uy tín.</p>
          <p className="base-text">Công ty liên tục đạt nhiều danh hiệu và giải thưởng cao quý do nhà nước và chính phủ trao tặng.</p>
        </div>
        <div className="quanlity-list-img">
          <div className="quanlity-list-img-container">
            <img src="https://opcpharma.com/wp-content/uploads/2023/10/Logo-Viet-nam-Top-10-Reputation-Award-01-300x278.webp" alt="" />
            <img src="https://opcpharma.com/wp-content/uploads/2023/08/Viet-Nam-value-01-300x300.png" alt="" />
            <img src="https://opcpharma.com/wp-content/uploads/2023/08/Mask-group-1-300x300.png" alt="" />
          </div>
        </div>
      </div>

      <div className="section-product">
        <div className="section-product-owner">
          <p className="font-primary font-size-30 text-blue">Tất cả sản phẩm</p>

          <div className="section-product-container">
            {
              products.map((p, i) => {
                return (
                  <ProductItem key={i} src={p.img} title={p.title} />
                )
              })
            }
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="company-info font-primary font-weight-2">
            <img className="company-logo" src="https://opcpharma.com/wp-content/uploads/2022/10/Logo-OPC-01-copy.png" alt="" />
            <span className="margin-bottom-text">CÔNG TY CỔ PHẦN DƯỢC PHẨM OPC</span>
            <span className="margin-bottom-text">Người chịu trách nhiệm nội dung:</span>
            <span className="margin-bottom-text">TGĐ. Phạm Thị Xuân Hương</span>
            <img onClick={() => {
              console.log('sss')
              setIsopen(true)
            }} className="pointer" style={{ width: '45%' }} src="https://opcpharma.com/wp-content/uploads/2023/03/image-5.png" alt="" />
            <img style={{ width: '30%', 'margin-top': '10px' }} src="https://images.dmca.com/Badges/dmca_protected_sml_120b.png?ID=6b902053-49ff-436e-9003-473188ffcfce" alt="" />
          </div>
          <div className="font-weight-2">
            <p>VỀ DƯỢC OPC </p>
            <div className="content">
              <p>Lịch sử phát triển</p>
              <p>Hoạt động kinh doanh</p>
              <p>Vùng trồng dược liệu</p>
              <p>Đối tác chiến lược</p>
            </div>
          </div>
          <div className="font-weight-2">
            <div className="content">
              <p>VỀ CHÍNH SÁCH</p>
              <p>Điều kiện giao dịch</p>
              <p>Chính sách bảo mật </p>
              <p>Chính sách thanh toán</p>
              <p>Chính sách đổi trả</p>
            </div>

          </div>
          <div className="font-weight-2">
            <div className="content">
              <p>SẢN PHẨM</p>
              <p>Quà tặng sức khoẻ </p>
              <p>Bổ dưỡng</p>
              <p>Sản phẩm mới</p>
              <p>Tất cả sản phẩm</p>
            </div>

          </div>
          <div className="font-weight-2">
            <div className="content">
              <p>KẾT NỐI VỚI CHÚNG TÔI</p>
              <p>Trang bán hàng</p>
              <p>Tuyển dụng</p>
              <p>Tin tức</p>
              <p>Liên hệ</p>
            </div>

          </div>
        </div>
      </footer>
      <div className="end">
        <p className="end-text-1">Copyright 2023 © All Rights Reserved</p>
        <p>Giấy chứng nhận đăng ký doanh nghiệp số 0302560110 do Sở Kế hoạch và Đầu tư Tp.HCM cấp ngày 25/03/2002</p>
      </div>
      <ModalImage imgSrc={"https://opcpharma.com/wp-content/uploads/2023/03/image-5.png"} dialog={isOpen} closeDialog={() => setIsopen(false)} />
    </>

  )
}

export default App
