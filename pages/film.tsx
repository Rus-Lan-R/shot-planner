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
  depth: 150,
  scale: 0.85,
  modifier: 1,
  slideShadows: true,
};

const StyledFilmSwiper = styled.div`
  .swiper {
    overflow: visible;
    width: 100vw;
  }
`;

export default function Film() {
  return (
    <Page footerCentred={<OrientationSwitch />}>
      <SharedStyled.StyledCenter>
        <StyledFilmSwiper>
          <Carousel
            slides={nodes}
            effect={"coverflow"}
            coverflowEffect={baseCoverflow}
            children={(item) => (
              <StyledSlide.Slide>
                <img src={item.img} />
              </StyledSlide.Slide>
            )}
          />
        </StyledFilmSwiper>
      </SharedStyled.StyledCenter>
    </Page>
  );
}
