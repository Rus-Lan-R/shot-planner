import { CardsSelect } from "@/components/Cards/CardsSelect";
import { useState } from "react";
import styled from "styled-components";

export interface IStepTree {
  title: string;
  value: string;
  options: IStepTree[];
}

const stepsTree: IStepTree = {
  title: "Chose type",
  value: "type",
  options: [
    {
      title: "Video",
      value: "video",
      options: [
        {
          title: "Type1",
          value: "type1",
          options: [
            { title: "Subtype 1", value: "subtype1", options: [] },
            { title: "Subtype 2", value: "subtype2", options: [] },
          ],
        },
        { title: "Type2", value: "type2", options: [] },
      ],
    },
    { title: "Photo", value: "photo", options: [] },
  ],
};

const StyledCardsForm = {
  CardsForm: styled.div`
    margin-top: 120px;
  `,
};

export const CardsForm = () => {
  const [form, setForm] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState(stepsTree);

  const handleChangeForm = (value: IStepTree) => {
    setActiveStep(value);
    setForm((prev) => [...prev, value.value]);
  };

  return (
    <StyledCardsForm.CardsForm>
      <CardsSelect step={activeStep} onChange={handleChangeForm} />
    </StyledCardsForm.CardsForm>
  );
};
