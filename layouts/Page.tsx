import { MainMenu } from "@/components/Menu/MainMenu";
import Link from "next/link";
import { PropsWithChildren, ReactNode, useState } from "react";
import styled from "styled-components";

const StyledPage = {
  Page: styled.div`
    max-height: 100vh;
    height: 100vh;
    overflow: hidden;
    position: relative;
  `,
  Header: styled.div`
    backdrop-filter: blur(0.5rem);
    z-index: 1000;
    height: 2rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding: 0.25rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Footer: styled.div`
    z-index: 1000;
    position: fixed;
    height: 2rem;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.25rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(0.5rem);
  `,
  Text: styled.div<{ isHidden?: boolean }>`
    font-size: 1rem;
    font-weight: 700;
    visibility: ${({ isHidden }) => (isHidden ? "hidden" : "unset")};
  `,
  Body: styled.div`
    padding: 2rem;
    height: 100%;
  `,
};

const Page = (props: PropsWithChildren & { footerCentred: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <StyledPage.Page>
      {isMenuOpen && <MainMenu></MainMenu>}
      <StyledPage.Header>
        <StyledPage.Text onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? "Close" : "Open"}
        </StyledPage.Text>
        <Link href={"/"} passHref>
          <StyledPage.Text>INSPIRATION LAB</StyledPage.Text>
        </Link>
        <Link href={"/contact"} passHref>
          <StyledPage.Text>Contact us</StyledPage.Text>
        </Link>
      </StyledPage.Header>
      <StyledPage.Body>{props.children}</StyledPage.Body>
      <StyledPage.Footer>
        <Link href={"/about"} passHref>
          <StyledPage.Text>About</StyledPage.Text>
        </Link>
        {!isMenuOpen && (
          <StyledPage.Text>{props.footerCentred}</StyledPage.Text>
        )}
        <Link href={"/shot-planner"} passHref>
          <StyledPage.Text>Shot Planner</StyledPage.Text>
        </Link>
      </StyledPage.Footer>
    </StyledPage.Page>
  );
};

export default Page;
