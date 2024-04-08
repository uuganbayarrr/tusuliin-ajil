import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Ангилал</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>тухай</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Дэмжлэг</h2>
            <span>Тусламж, дэмжлэг</span>
             <span>Итгэл ба аюулгүй байдал</span>
             <span>ajilchinIT дээр зарж байна</span>
             <span> ajilchinIT дээр худалдан авч байна</span>
          </div>
          <div className="item">
          <h2>Нийгэмлэг</h2>
             <span>Хэрэглэгчийн амжилтын түүхүүд</span>
             <span>Олон нийтийн төв</span>
             <span>Форум</span>
             <span>Үйл явдал</span>
             <span>Блог</span>
             <span>Нөлөөлөгчид</span>
             <span>Харъяа байгууллагууд</span>
             <span>Подкаст</span>
             <span>Найзаа урих</span>
             <span>Худалдагч болох</span>
             <span>Олон нийтийн стандарт</span>
          </div>
          <div className="item">
          <h2>ajilchinIT-аас илүү их зүйл</h2>
             <span>ajilchinIT бизнес</span>
             <span>ajilchinIT Pro</span>
             <span>ajilchinIT Logo Maker</span>
             <span>ajilchinIT Guides</span>
             <span>Урам зориг аваарай</span>
             <span>ajilchinIT Select</span>
             <span>ClearVoice</span>
             <span>ajilchinIT Workspace</span>
             <span>Сурах</span>
             <span>Ажиллахгүй байна</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>ajilchinIT</h2>
            <span>© ajilchinIT төслын бүтээл. 2024</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>MN</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>MNT</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
