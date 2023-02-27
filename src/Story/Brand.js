import { Link } from "react-router-dom";
import Footer from "../com/Footer";
import Header from "../com/Header";

function Brand() {
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
                <li className="on">
                  <Link to="/Story/Brand">브랜드소개</Link>
                </li>
                <li>
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
                  <span>브랜드소개</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="brand_desc">
          <div className="brand_inner">
            <div className="brand_detail1">
              <div className="img_box1">
                <img src="https://www.pizzaetang.com/img/sub/brand_pizza01.jpg"></img>
              </div>
              <div className="text_box1">
                <div className="text_box1_detail">
                  <h3>
                    정직하면 통한다.
                    <br />
                    <i>피자에땅</i>
                  </h3>
                  <span>
                    1996년 영등포. 피자에땅은 "최상의 맛과 즐거움을 제공"하자는 마음으로 시작하여 지금의 모습으로 왔습니다.
                    <br />
                    특별한 날 먹는다는 피자를 언제나 즐길 수 있게 했고, 1+1을 통해 다양한 사람이 피자를 접할 수 있게 했습니다.
                    <br />
                    정직하게 꾸준하게 피자에땅은 지금까지 왔고 앞으로도 나아가겠습니다.
                  </span>
                </div>
              </div>
              <div className="brand_detail3">
                <div className="img_box3">
                  <img src="https://www.pizzaetang.com/img/sub/brand_pizza02.jpg"></img>
                </div>
                <div className="text_box3">
                  <div className="text_box3_detail">
                    <h3>
                      <i>합리적인 가격</i>으로
                      <br />
                      날개를 달다
                    </h3>
                    <span>
                      맛도 두배! 즐거움도 두배!' 라는 슬로건을 바탕으로
                      <br />
                      고객들에게 2배의 만족을 줄 수 있는 1+1 마케팅을 시작했습니다.
                      <br />
                      피자에땅의 합리적인 가격정책은 고객분들의 성원으로 돌아왔고
                      <br />
                      지금까지도 1+1 마케팅은 계속되고 있습니다.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="brand_detail2">
              <div className="text_box2">
                <div className="text_box2_detail">
                  <h3>
                    고객과 가맹점에
                    <br />
                    <i>신뢰받는 기업</i>
                  </h3>
                  <span className="on3">
                    "대한민국 NO.1 피자 브랜드가 되자"
                    <br />
                    "고객, 점주, 임직원이 행복한 회사가 되자!"
                    <br />
                    "사랑받고 신뢰받는 가치 창조를 하자!"
                  </span>
                  <br />
                  <span>
                    피자에땅은 항상 고객과 가맹점주님을 생각하는 기본을 지키고 있습니다.
                    <br />
                    정직, 창의, 인화를 모토로 철저하고 체계화된 시스템 구축을 통해
                    <br />
                    최고의 피자를 만들고자 하는 노력을 계속하겠습니다.
                  </span>
                </div>
              </div>
              <div className="img_box2">
                <img src="https://www.pizzaetang.com/img/sub/brand_pizza03.jpg"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="brand_reason">
          <div className="brand_inner2">
            <h3 className="h3">
              피자에땅 피자가
              <i>맛있는 이유</i>
            </h3>
            <div className="col5">
              <div className="col1">
                <img src="https://www.pizzaetang.com/img/sub/reason01.png"></img>
                <div className="reason_desc">
                  <div className="reason_desc_title">
                    <b>01</b>
                    <br />
                    <strong>도우</strong>
                  </div>
                  <br />

                  <span>
                    피자에땅의 도우는 아마씨드, 밀맥아, 귀리,
                    <br />
                    흑임자 퀴노아 등 15가지 곡물을 이용한 도우로 고소하면서도 쫄깃한 맛이 특징입니다.
                  </span>
                  <br />
                </div>
              </div>
              <div className="col1">
                <img src="https://www.pizzaetang.com/img/sub/reason02.png"></img>
                <div className="reason_desc">
                  <div className="reason_desc_title">
                    <b>02</b>
                    <br />
                    <strong>소스</strong>
                  </div>
                  <br />
                  <span>
                    피자에땅의 소스는 단맛과 신맛 짠맛의 밸런스를
                    <br />
                    가장 최적의 농도에서 맞추어 인위적인 맛이 아닌
                    <br />
                    순수 토마토의 맛을 잘 살렸습니다.
                  </span>
                </div>
              </div>
              <div className="col1">
                <img src="https://www.pizzaetang.com/img/sub/reason03.png"></img>
                <div className="reason_desc">
                  <div className="reason_desc_title">
                    <b>03</b>
                    <br />
                    <strong>치즈</strong>
                  </div>
                  <br />
                  <span>
                    자연산 모짜렐라 치즈와 체다치즈의 황금 배합을
                    <br />
                    우수한 R&D 인력을 통한 다년간의 연구를 통해 브랜딩 하여
                    <br />
                    피자의 맛을 더 깊고 풍부하게 합니다.
                  </span>
                </div>
              </div>
              <div className="col1">
                <img src="https://www.pizzaetang.com/img/sub/reason04.png"></img>
                <div className="reason_desc">
                  <div className="reason_desc_title">
                    <b>04</b>
                    <br />
                    <strong>토핑</strong>
                  </div>
                  <br />
                  <span>
                    좀 더 신선한 재료를 신속하게 배송하기 위해 물류 기지 및 물류시스템을 구축했고
                    <br />
                    이를 통해 보다 신선하고 건강한 토핑 재료를 공수합니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Brand;
