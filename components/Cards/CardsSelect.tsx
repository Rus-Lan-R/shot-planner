import styled from "styled-components";

const StyledCards = {
  Cards: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `,
  Card: styled.div`
    cursor: pointer;
  `,
};

export const CardsSelect = (props: {
  options: { label: string; value: string }[];
}) => {
  const { options } = props;
  return (
    <StyledCards.Cards>
      {options?.map((item) => (
        <StyledCards.Card key={item.value}>{item.label}</StyledCards.Card>
      ))}
    </StyledCards.Cards>
  );
};
