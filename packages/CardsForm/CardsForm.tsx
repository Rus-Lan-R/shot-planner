import { CardsSelect } from "@/components/Cards/CardsSelect";
import { useState } from "react";

const steps = [
  {
    title: "Chose type",
    value: "type",
    options: [
      { label: "Video", value: "video" },
      { label: "Photo", value: "photo" },
    ],
  },
];

export const CardsForm = () => {
  const [form, setForm] = useState();
  const [activeStep, sstActiveStep] = useState(steps[0]);

  return (
    <>
      <CardsSelect options={activeStep.options} />
    </>
  );
};
