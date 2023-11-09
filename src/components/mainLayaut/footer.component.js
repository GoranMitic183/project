import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="copyr">
          <p>
            Copyrigth by Goran Mitic <Link to="/">Welcome page</Link> reserved
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
