import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="contact-details-container">
      <div className="contact-details">
        <a href="https://www.linkedin.com/in/sumedha1308/" target="_blank">
          <img className="linkedin-img" src={`${process.env.PUBLIC_URL} /linkedin.png`} alt="heart"></img>
        </a>
      </div>
      <div className="contact-details">
        <a href="https://github.com/sumedha1308/activityspace/" target="_blank">
          <img className="github-img" src={`${process.env.PUBLIC_URL} /github.png`} alt="heart"></img>
        </a>
      </div>
    </div>
    <div className="footer-line">
      Made with <img src={`${process.env.PUBLIC_URL} /heart.png`} alt="heart"></img> by Sumedha
    </div>
  </footer>
);

export default Footer;
