import { OrientationSwitch } from "@/components/OrientationSwitch";
import { SocialLinks } from "@/components/SocilaLinks";
import { SharedStyled } from "@/helpers/styled/Shared.styled";
import Page from "@/layouts/Page";

export default function About() {
  return (
    <Page footerCentred={<SocialLinks />}>
      <SharedStyled.StyledCenter>
        <>About</>
      </SharedStyled.StyledCenter>
    </Page>
  );
}
