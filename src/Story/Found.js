import Footer from "../com/Footer";
import Header from "../com/Header";
import { Link } from "react-router-dom";

function Found() {
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
                <li>
                  <Link to="/Story/Cf">CF/방송</Link>
                </li>
                <li className="on">
                  <a href="/Story/Found">창업안내</a>
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
                  <span>창업안내</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="brand_who">
          <div className="inner">
            <img src="https://www.pizzaetang.com/img/sub/guide_intro.jpg"></img>
            <div className="txt_box">
              <h3>
                오직,
                <b> 피자에땅</b>
                에서만
                <b> 가능</b>
                합니다
              </h3>
              <span>피자에땅과 함께 창업하고 제2의 전성기를 시작하세요!</span>
            </div>
          </div>
        </div>

        <div className="brand_desc2">
          <div className="brand_inner">
            <div className="brand_detail1">
              <div className="img_box3">
                <img src="https://www.pizzaetang.com/img/sub/guide_info01.jpg"></img>
              </div>
              <div className="text_box3">
                <div className="text_box3_detail">
                  <h3>
                    경험을 전하다
                    <br />
                    <i>
                      체계적인 창업
                      <br />
                      시스템
                    </i>
                  </h3>
                  <span>
                    -20년간 꾸준히 가맹점 성공을 도운 고속 성장의 경험 전수
                    <br />
                    -지속적인 마케팅 관리와 기술 지원
                    <br />
                    -전문 인력을 통한 상품, 서비스, 운영 관리
                    <br />
                    -최적의 매장 운영 환경을 위한 인테리어 노하우
                    <br />
                    -가맹본사와 가맹점주의 유기적인 커뮤니케이션
                  </span>
                </div>
              </div>
              <div className="brand_detail1">
                <div className="img_box1">
                  <img src="https://www.pizzaetang.com/img/sub/guide_info02.jpg"></img>
                </div>
                <div className="text_box1">
                  <div className="text_box1_detail">
                    <h3>
                      맛을 갖추다
                      <br />
                      <i>완벽한 제품 시스템</i>
                    </h3>
                    <span>
                      - 전국 물류 시스템 구축을 통한 신선하고 정확한 식재료 배송
                      <br />
                      - 최고 수준의 개발팀을 통한 맛있는 피자 레시피 전달
                      <br />
                      - 핫팩 시스템 도입 등 보다 나은 서비스 제공을 위한 노력
                      <br />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="brand_detail3">
              <div className="text_box3">
                <div className="text_box3_detail">
                  <h3>
                    지식을 더하다
                    <br />
                    <i>가맹 점주</i>
                    <br />
                    <i>맞춤 교육 시스템</i>
                  </h3>

                  <br />
                  <span>
                    - 본사 교육 및 직영점 파견교육 등 효율적인 가맹점 운영을 위한 경영지원 교육
                    <br />- 초보자도 가능한 1:1 교육
                  </span>
                </div>
              </div>

              <div className="img_box2">
                <img src="https://www.pizzaetang.com/img/sub/guide_info03.jpg"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="found_title">
          <h3 className="h3">
            감각적이고 모던한
            <i> 피자에땅 인테리어</i>
          </h3>
          <div className="found_img">
            <img src="https://www.pizzaetang.com/img/sub/interier01.png"></img>
            <img src="https://www.pizzaetang.com/img/sub/interier02.png" className="found_img2"></img>
            <img src="https://www.pizzaetang.com/img/sub/interier03.png" className="found_img2"></img>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Found;
