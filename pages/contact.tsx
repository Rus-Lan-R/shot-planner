import { SocialLinks } from "@/components/SocilaLinks";
import { SharedStyled } from "@/helpers/styled/Shared.styled";
import Page from "@/layouts/Page";

export default function Contanct() {
  return (
    <Page footerCentred={<SocialLinks />}>
      <SharedStyled.StyledCenter>
        <>Contact</>
      </SharedStyled.StyledCenter>
    </Page>
  );
}
