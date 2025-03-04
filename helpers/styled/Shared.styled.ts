import styled from "styled-components";

export const SharedStyled = {
  StyledCenter: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
};

export const StyledSlide = {
  Slide: styled.div`
    background-color: white;
    aspect-ratio: 16 / 9;
    border-radius: 1rem;
    padding: 1rem;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    img {
      inset: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  VerticalSlide: styled.div`
    background-color: white;
    aspect-ratio: 9 / 16;
    border-radius: 1rem;
    padding: 1rem;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    img {
      inset: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
};

export const StyledGrid = {
  BaseGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    gap: 1.5rem;
  `,
};
