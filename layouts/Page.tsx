import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledPage = {
  Page: styled.div`
    margin: 0 auto;
    padding: 0 96px;
    max-width: 1024px;
    max-height: 100vh;
    overflow: auto;
  `,
};

const Page = (props: PropsWithChildren) => {
  return <StyledPage.Page>{props.children}</StyledPage.Page>;
};

export default Page;
