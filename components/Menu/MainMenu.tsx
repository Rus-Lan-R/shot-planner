import { StyledGrid } from "@/helpers/styled/Shared.styled";
import Link from "next/link";
import styled from "styled-components";

const StyledMenu = {
  Frame: styled.div`
    position: fixed;
    inset: 0;
    background-color: black;
    z-index: 100;
    padding: 4rem 2rem;
    display: flex;
  `,
  Media: styled.div`
    aspect-ratio: 9 / 16;
    background-color: white;
    border-radius: 1rem;
  `,
  MenuItems: styled.div`
    width: 100%;
    height: fit-content;
    margin-top: auto;
    display: grid;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  `,
  MenuItem: styled(Link)`
    width: 100%;
    height: fit-content;
  `,
};

export const MainMenu = () => {
  return (
    <StyledMenu.Frame>
      <StyledMenu.MenuItems>
        <StyledMenu.MenuItem href={"/"}>Home</StyledMenu.MenuItem>
        <StyledMenu.MenuItem href={"/about"}>About</StyledMenu.MenuItem>
        <StyledMenu.MenuItem href={"/film"}>Film</StyledMenu.MenuItem>
        <StyledMenu.MenuItem href={"/shorts"}>Shorts</StyledMenu.MenuItem>
        <StyledMenu.MenuItem href={"/photo"}>Photo</StyledMenu.MenuItem>
      </StyledMenu.MenuItems>
      <StyledMenu.Media></StyledMenu.Media>
    </StyledMenu.Frame>
  );
};
