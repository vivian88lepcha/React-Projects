import { socialLinks, pageLinks } from "../data";

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(({ id, url, text }) => {
          return (
            <li key={id}>
              <a href={url} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(({ id, url, icon }) => {
          return (
            <li key={id}>
              <a href={url} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}
export default Footer;
