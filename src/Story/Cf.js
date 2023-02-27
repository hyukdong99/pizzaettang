import Header from "../com/Header";
import { Link } from "react-router-dom";
import Footer from "../com/Footer";

function Cf() {
  return (
    <>
      <Header />

      <section className="sub_story">
        <div className="top_inner">
          <div className="title_box">
            <h3>PizzaEtang's Story</h3>
            <strong>
              피자에땅을 찾아주시는 고객분들께
              <br />
              맛과 즐거움을 드리도록 노력하겠습니다.
            </strong>
          </div>
        </div>
        <div>
          <div className="sub_title_box">
            <div className="sub_tab_wrap">
              <ul className="sub_tab">
                <li>
                  <Link to="/Story/Brand">브랜드소개</Link>
                </li>
                <li className="on">
                  <Link to="/Story/Cf">CF/방송</Link>
                </li>
                <li>
                  <Link to="/Story/Found">창업안내</Link>
                </li>
                <li>
                  <a href="">자주하는질문</a>
                </li>
                <li>
                  <a href="">공지사항</a>
                </li>
              </ul>
              <ul className="sub_tab_detail">
                <li>
                  <span>HOME</span>
                </li>
                <li>
                  <img src="https://www.pizzaetang.com/img/ico/ico_next.png"></img>
                </li>
                <li>
                  <span>피자에땅STORY</span>
                </li>
                <li>
                  <img src="https://www.pizzaetang.com/img/ico/ico_next.png"></img>
                </li>
                <li className="on2">
                  <span>CF/방송</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cf">
          <div className="col3">
            <div className="col1">
              <a href="https://youtu.be/4jmNwsh4_Mc">
                <div className="img_box">
                  <input type="hidden" name="idx" value="489"></input>
                  <img src="https://img.youtube.com/vi/4jmNwsh4_Mc/hqdefault.jpg"></img>
                </div>
                <strong className="ttl">피자에땅x박지훈_NEW</strong>
              </a>
            </div>
            <div className="col1">
              <a href="https://youtu.be/BIqu5VaPc-g">
                <div className="img_box">
                  <input type="hidden" name="idx" value="489"></input>
                  <img src="https://img.youtube.com/vi/BIqu5VaPc-g/hqdefault.jpg"></img>
                </div>
                <strong className="ttl">피자에땅신세계피자 TV</strong>
              </a>
            </div>
            <div className="col1">
              <a href="https://youtu.be/Nxcn42JJ1Ao">
                <div className="img_box">
                  <input type="hidden" name="idx" value="489"></input>
                  <img src="https://img.youtube.com/vi/Nxcn42JJ1Ao/hqdefault.jpg"></img>
                </div>
                <strong className="ttl">눈꽃치즈피자&콜라세트 먹자</strong>
              </a>
            </div>

            <div className="col1">
              <a href="https://youtu.be/hSGmlGAitXk">
                <div className="img_box">
                  <input type="hidden" name="idx" value="489"></input>
                  <img src="https://img.youtube.com/vi/hSGmlGAitXk/hqdefault.jpg"></img>
                </div>
                <strong className="ttl">피자에땅 위너피자</strong>
              </a>
            </div>

            <div className="col1">
              <a href="https://youtu.be/VGEvqfmaQnQ">
                <div className="img_box">
                  <input type="hidden" name="idx" value="489"></input>
                  <img src="https://img.youtube.com/vi/VGEvqfmaQnQ/hqdefault.jpg"></img>
                </div>
                <strong className="ttl">피자에땅 위너피자 메이킹</strong>
              </a>
            </div>

            <div className="col1">
              <a href="https://youtu.be/VmGMxsQj6kY">
                <div className="img_box">
                  <input type="hidden" name="idx" value="489"></input>
                  <img src="https://img.youtube.com/vi/VmGMxsQj6kY/hqdefault.jpg"></img>
                </div>
                <strong className="ttl">피자에땅 CF 4</strong>
              </a>
            </div>

            <div className="col1">
              <a href="https://youtu.be/klxEKWCoA-0">
                <div className="img_box">
                  <input type="hidden" name="idx" value="489"></input>
                  <img src="https://img.youtube.com/vi/klxEKWCoA-0/hqdefault.jpg"></img>
                </div>
                <strong className="ttl">피자에땅 CF 3</strong>
              </a>
            </div>

            <div className="col1">
              <a href="https://youtu.be/75hNL8uWhNk">
                <div className="img_box">
                  <input type="hidden" name="idx" value="489"></input>
                  <img src="https://img.youtube.com/vi/75hNL8uWhNk/hqdefault.jpg"></img>
                </div>
                <strong className="ttl">피자에땅 CF 2</strong>
              </a>
            </div>

            <div className="col1">
              <a href="https://youtu.be/f-qftp0vVYA">
                <div className="img_box">
                  <input type="hidden" name="idx" value="489"></input>
                  <img src="https://img.youtube.com/vi/f-qftp0vVYA/hqdefault.jpg"></img>
                </div>
                <strong className="ttl">피자에땅 CF 1</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Cf;
