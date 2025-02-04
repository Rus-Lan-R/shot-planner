import { IStepTree } from "@/packages/CardsForm/CardsForm";
import styled from "styled-components";

const StyledCards = {
  Cards: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 16px;
  `,
  CardsList: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    width: 100%;
  `,
  Card: styled.div`
    position: relative;
    cursor: pointer;
    box-shadow: 0 0 6px 2px gray;
    border-radius: 8px;
    padding: 12px;
    aspect-ratio: 16 / 9;
    &:hover {
      box-shadow: 0 0 6px 4px gray;
    }
    background-color: blanchedalmond;
    overflow: hidden;
  `,
  Text: styled.div`
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 4px;

    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(10px);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    color: white;
  `,
  Image: styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  `,
};

export const CardsSelect = (props: {
  step: IStepTree;
  onChange: (value: IStepTree) => void;
}) => {
  const { step, onChange } = props;
  return (
    <StyledCards.Cards>
      {step.title}
      <StyledCards.CardsList>
        {step?.options?.map((item) => (
          <StyledCards.Card key={item.value} onClick={() => onChange(item)}>
            <StyledCards.Image src="/assets/image/sample.jpg"></StyledCards.Image>
            <StyledCards.Text>{item.title}</StyledCards.Text>
          </StyledCards.Card>
        ))}
      </StyledCards.CardsList>
    </StyledCards.Cards>
  );
};
