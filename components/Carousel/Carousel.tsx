import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  EffectCoverflow,
  FreeMode,
  Mousewheel,
  Parallax,
} from "swiper/modules";
import { ReactNode } from "react";
import styled from "styled-components";

interface ICarouselSliderProps<T>
  extends Omit<
    SwiperProps,
    "modules" | "width" | "height" | "color" | "children"
  > {
  slides: T[];

  children: (slide: T) => ReactNode;
}

const StyledSwiper = styled(Swiper)``;

export const Carousel = <T,>(props: ICarouselSliderProps<T>) => {
  const { slides, children } = props;

  return (
    <StyledSwiper
      speed={600}
      modules={[Parallax, EffectCoverflow, Mousewheel, FreeMode]}
      spaceBetween={50}
      loop={true}
      mousewheel={true}
      slidesPerView={1.5}
      centeredSlides={true}
      grabCursor={true}
      parallax={{ enabled: true }}
      freeMode={{
        sticky: true,
        // momentum: true,
        // momentumBounce: true,
        // momentumBounceRatio: 1,
        // momentumRatio: 1,
        // momentumVelocityRatio: 1,
      }}
      effect={"cowerflow"}
      {...props}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>{children(item)}</SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
