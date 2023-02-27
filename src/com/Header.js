import { Link } from "react-router-dom";
import Brand from "../Story/Brand";

function Header() {
  return (
    <div className="header">
      <div className="inner">
        <h1 className="logo">
          <a href="/" />
        </h1>
        <nav className="gnb">
          <ul className="gnb_list">
            <li className="on1">
              <h2>
                <a href="https://home.pizzaetang.com:446/inquiry.fuse">1:1 문의하기</a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="https://www.pizzaetang.com/pizza/pizza01.php?code=100">피자</a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="https://www.pizzaetang.com/combo/combo03.php">세트메뉴</a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="https://www.pizzaetang.com/sidemenu/sidemenu.php">사이드&음료</a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="https://www.pizzaetang.com/sidemenu/sidemenu.php">매장안내</a>
              </h2>
            </li>
            <li>
              <h2>
                <Link to="/Story/Brand">피자에땅STORY</Link>
              </h2>
            </li>
          </ul>
          {/* <a href=""><i className="bi-grid-3x3-gap-fill"></i></a> */}
        </nav>
      </div>
    </div>
  );
}
export default Header;
