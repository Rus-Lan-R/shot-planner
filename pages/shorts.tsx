import { Carousel } from "@/components/Carousel/Carousel";
import { OrientationSwitch } from "@/components/OrientationSwitch";
import { SharedStyled, StyledSlide } from "@/helpers/styled/Shared.styled";
import Page from "@/layouts/Page";
import styled from "styled-components";

const nodes = [
  { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
  { img: "https://swiperjs.com/demos/images/nature-2.jpg" },
  { img: "https://swiperjs.com/demos/images/nature-3.jpg" },
  { img: "https://swiperjs.com/demos/images/nature-4.jpg" },
  { img: "https://swiperjs.com/demos/images/nature-5.jpg" },
  { img: "https://swiperjs.com/demos/images/nature-6.jpg" },
  { img: "https://swiperjs.com/demos/images/nature-7.jpg" },
  { img: "https://swiperjs.com/demos/images/nature-8.jpg" },
  { img: "https://swiperjs.com/demos/images/nature-9.jpg" },
];

const baseCoverflow = {
  rotate: 0,
  stretch: 0,
  depth: 200,
  scale: 1,
  modifier: 2.3,
  slideShadows: true,
};

const StyledSwiper = styled.div`
  .swiper {
    height: 100vh;
  }
  .swiper-slide {
    aspect-ratio: 9 / 16;
  }
`;

export default function Shorts() {
  return (
    <Page footerCentred={<OrientationSwitch />}>
      <SharedStyled.StyledCenter>
        <StyledSwiper>
          <Carousel
            direction={"vertical"}
            slides={nodes}
            centeredSlides={true}
            effect={"cowerflow"}
            coverflowEffect={baseCoverflow}
            children={(item) => (
              <StyledSlide.VerticalSlide>
                <img src={item.img} />
              </StyledSlide.VerticalSlide>
            )}
          />
        </StyledSwiper>
      </SharedStyled.StyledCenter>
    </Page>
  );
}
