import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import arrowIosForwardFill from "@iconify/icons-eva/arrow-ios-forward-fill";
import arrowIosDownwardFill from "@iconify/icons-eva/arrow-ios-downward-fill";
import { useNavigate } from "react-router-dom";
// material
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Link,
  Drawer,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography,
} from "@mui/material";
// components
import Logo from "../../components/Logo";
import NavSection from "../../components/NavSection";
import Scrollbar from "../../components/Scrollbar";
import { MIconButton } from "../../components/@material-extend";
import iconContact from "../../assets/icons/contact.png";
import iconHome from "../../assets/icons/home-white.png";
import iconPlayGame from "../../assets/icons/game.png";
import iconShop from "../../assets/icons/shop.png";
import iconMarket from "../../assets/icons/market.png";
import iconIdo from "../../assets/icons/ido.png";
import iconMyNFTS from "../../assets/icons/my-nfts.png";

// ----------------------------------------------------------------------

const ICON_SIZE = 22;
const ITEM_SIZE = 48;
const PADDING = 2.5;

const MenuItemHomeStyle = styled("div")(({ theme }) => ({
  display: "flex",
  // backgroundColor: "#212B36",
  borderRadius: "9px",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 5,
  marginBottom: 10,
  background:
    "-webkit-linear-gradient(112deg, rgba(141, 198, 63, 1) 0%, rgba(57, 181, 74, 1) 100%)",
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
}));

const MenuItemStyle = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#212B36",
  borderRadius: "9px",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 5,
  marginBottom: 10,
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
}));

const MenuItemContainer = styled("div")(({ isFocus }) => ({
  display: "flex",
  backgroundColor: isFocus ? "" : "#212B36",
  borderRadius: "9px",
  background: isFocus
    ? "-webkit-linear-gradient(112deg, rgba(141, 198, 63, 1) 0%, rgba(57, 181, 74, 1) 100%)"
    : "",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 5,
  marginBottom: 10,
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
}));

const menuPage = [
  { title: "HOME", pathName: "/", icon: iconHome },
  { title: "PLAY GAME", pathName: "/play-game", icon: iconPlayGame },
  { title: "SHOP", pathName: "/shop", icon: iconShop },
  { title: "MARKETPLACE", pathName: "/market", icon: iconMarket },
  { title: "IDO", pathName: "/ido", icon: iconIdo },
  { title: "MY NFTS", pathName: "/my-nft", icon: iconMyNFTS },
  { title: "INTRODUCTION", pathName: "/intro", icon: iconContact },
];

// ----------------------------------------------------------------------

MenuMobile.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function MenuMobile({ isOffset, isHome, navConfig }) {
  const { pathname } = useLocation();
  console.log("MenuMobile====>", pathname);
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <MIconButton
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          ...(isHome && { color: "common.white" }),
          ...(isOffset && { color: "text.primary" }),
        }}
      >
        <Icon icon={menu2Fill} color="rgba(57, 181, 74, 1)" />
      </MIconButton>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <Link component={RouterLink} to="/" sx={{ display: "inline-flex" }}>
            <Logo sx={{ mx: PADDING, my: 3 }} />
          </Link>

          <List sx={{ padding: 2 }}>
            {menuPage.map(({ title, icon, pathName }) => {
              return (
                <MenuItemContainer
                  key={`menu-item-${pathName}`}
                  isFocus={pathName === pathname}
                  onClick={() =>
                    title === "INTRODUCTION" ? null : navigate(pathName)
                  }
                >
                  {title === "INTRODUCTION" ? (
                    <a
                      href="https://docs.fifafootball.io"
                      style={{
                        textDecoration: "none",
                        color: "#ffffff",
                      }}
                      className="d-flex"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={icon}
                        style={{
                          width: 14,
                          height: 12,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                        className="my-auto"
                        alt="iconContact"
                      />

                      <Typography
                        style={{ font: "normal normal bold 14px Poppins" }}
                      >
                        {title}
                      </Typography>
                    </a>
                  ) : (
                    <>
                      <img
                        src={icon}
                        style={{
                          width: 14,
                          height: 12,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                      />

                      <Typography
                        style={{ font: "normal normal bold 14px Poppins" }}
                      >
                        {title}
                      </Typography>
                    </>
                  )}
                </MenuItemContainer>
              );
            })}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
