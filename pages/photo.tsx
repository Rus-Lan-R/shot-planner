import { OrientationSwitch } from "@/components/OrientationSwitch";
import { SharedStyled } from "@/helpers/styled/Shared.styled";
import Page from "@/layouts/Page";

export default function Photo() {
  return (
    <Page footerCentred={<OrientationSwitch />}>
      <SharedStyled.StyledCenter>
        <>photo</>
      </SharedStyled.StyledCenter>
    </Page>
  );
}
