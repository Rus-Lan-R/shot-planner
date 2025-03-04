import { SocialLinks } from "@/components/SocilaLinks";
import { SharedStyled } from "@/helpers/styled/Shared.styled";
import Page from "@/layouts/Page";
import { CardsForm } from "@/packages/CardsForm/CardsForm";

export default function ShotPlanner() {
  return (
    <Page footerCentred={<SocialLinks />}>
      <SharedStyled.StyledCenter>
        <CardsForm></CardsForm>
      </SharedStyled.StyledCenter>
    </Page>
  );
}
