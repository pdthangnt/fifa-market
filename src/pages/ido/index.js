import { styled } from "@mui/material/styles";
import Page from "../../components/Page";
import LayoutIdo from "./LayoutIdo"

const RootStyle = styled(Page)({
  height: "100%",
});

export default function IdoPage() {
  return (
    <RootStyle title="FIFa Football" id="move_top">
      <LayoutIdo />
    </RootStyle>
  );
}
