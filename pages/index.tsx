import { OrientationSwitch } from "@/components/OrientationSwitch";
import { SharedStyled } from "@/helpers/styled/Shared.styled";
import Page from "@/layouts/Page";

export default function Home() {
  return (
    <Page footerCentred={<OrientationSwitch />}>
      <SharedStyled.StyledCenter>
        <>main</>
      </SharedStyled.StyledCenter>
    </Page>
  );
}
