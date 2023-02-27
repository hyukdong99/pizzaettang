import Footer from "./Footer";
import Header from "./Header";
import { Carousel } from "react-bootstrap";

function Main() {
  return (
    <>
      <div className="wrap">
        <Header />
      </div>

      <div className="container">
        <Carousel fade>
          <Carousel.Item>
            <img style={{}} className="d-block w-100" src="https://www.pizzaetang.com/data/bbs/20220531090544.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img style={{}} className="d-block w-100" src="https://www.pizzaetang.com/data/bbs/20220520170523.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img style={{}} className="d-block w-100" src="https://www.pizzaetang.com/data/bbs/20220902110904.jpg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <div className="container2">
          <div className="container2 clearfix">
            <figure className="baener">
              <img src="https://www.pizzaetang.com/data/bbs/202208251108570.jpg"></img>
            </figure>
            <div className="fr">
              <ul className="half_box">
                <li>
                  <img src="https://www.pizzaetang.com/img/main/ico_link01.png" alt="모바일 APP 다운로드" />
                  <span>
                    모바일 APP
                    <br />
                    다운로드
                  </span>
                </li>
                <li>
                  <img src="https://www.pizzaetang.com/img/main/ico_link04.png" alt="인스타그램 바로가기" />
                  <span>
                    인스타그램
                    <br />
                    바로가기
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="container3">
          <div className="container3_1">
            <h3 className="title">
              "피자에땅"
              <strong>인기메뉴</strong>
            </h3>
            <span className="subtitle">피자에땅에서 가장 인기있는 메뉴만 모았다.</span>

            <div>
              <div id="slider-div">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Main;
