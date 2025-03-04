import styled from "styled-components";

const StyledSocialLinks = {
  Links: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  Link: styled.div``,
};

export const SocialLinks = () => {
  return (
    <StyledSocialLinks.Links>
      <StyledSocialLinks.Link>inst</StyledSocialLinks.Link>
      <StyledSocialLinks.Link>tg</StyledSocialLinks.Link>
      <StyledSocialLinks.Link>wup</StyledSocialLinks.Link>
    </StyledSocialLinks.Links>
  );
};
