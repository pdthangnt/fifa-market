import { Icon } from "@iconify/react";
import googleFill from "@iconify/icons-eva/google-fill";
import twitterFill from "@iconify/icons-eva/twitter-fill";
import facebookFill from "@iconify/icons-eva/facebook-fill";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
// routes
import { PATH_PAGE } from "../../routes/paths";
//
import Logo from "../../components/Logo";
import FooterComponent from "./footerComponent";

// ----------------------------------------------------------------------

const SOCIALS = [
  { name: "FaceBook", icon: facebookFill },
  { name: "Google", icon: googleFill },
  { name: "Linkedin", icon: linkedinFill },
  { name: "Twitter", icon: twitterFill },
];

const LINKS = [
  {
    headline: "Minimal",
    children: [
      { name: "About us", href: PATH_PAGE.about },
      { name: "Contact us", href: PATH_PAGE.contact },
      { name: "FAQs", href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: "Legal",
    children: [
      { name: "Terms and Condition", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    headline: "Contact",
    children: [
      { name: "support@minimals.cc", href: "#" },
      { name: "Los Angeles, 359  Hidden Valley Road", href: "#" },
    ],
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 7 }}>
        <FooterComponent />
      </Container>
    </RootStyle>
  );
}
