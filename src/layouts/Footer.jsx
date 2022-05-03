import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
import { orange } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(1),
  padding: theme.spacing(1),
  justifyContent: "left",
  textAlign: "left",
  flexDirection: "column",
}));

const TitleWrap = styled("h6")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "bold",
  margin: theme.spacing(1),
}));

const Item = styled("p")(({ theme }) => ({
  fontSize: "0.8rem",
  marginLeft: theme.spacing(1),
  marginTop: "0.2rem",
  marginBottom: "0.2rem",
}));

export default function Footer() {
  return (
    <Box
      component="footer"
      mt={3}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      paddingX={5}
      sx={{ borderTop: "5px solid " + orange[900], fontSize: "0.8rem" }}
      justifyContent="space-between"
    >
      <StyledDiv>
        <TitleWrap>CHĂM SÓC KHÁCH HÀNG</TitleWrap>
        <Item>Trung tâm trợ giúp</Item>
        <Item>F8-Shop</Item>
        <Item>Hướng dẫn mua hàng</Item>
      </StyledDiv>

      <StyledDiv>
        <TitleWrap>GIỚI THIỆU</TitleWrap>
        <Item>Giới thiệu</Item>
        <Item>Tuyển dụng</Item>
        <Item>Điều khoản</Item>
      </StyledDiv>

      <StyledDiv>
        <TitleWrap>DANH MỤC</TitleWrap>
        <Item>Trang điểm</Item>
        <Item>Tuyển dụng</Item>
        <Item>Điều khoản</Item>
      </StyledDiv>

      <StyledDiv>
        <TitleWrap>THEO DÕI</TitleWrap>
        <Item>
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          &nbsp;Facebook
        </Item>
        <Item>
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          &nbsp;Intagram
        </Item>
        <Item>
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          &nbsp;Linkedin
        </Item>
      </StyledDiv>

      <StyledDiv>
        <TitleWrap>VÀO CỬA HÀNG TRÊN ỨNG DỤNG</TitleWrap>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TitleWrap>
            <img
              src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/googleQRcodes.png?itok=cVevzFXs"
              style={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
              }}
              alt="qrcode"
            />
          </TitleWrap>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TitleWrap>
              <Item>
                <FontAwesomeIcon icon={["fab", "google-play"]} />
                &nbsp;Google Play
              </Item>
              <Item>
                <FontAwesomeIcon icon={["fab", "app-store"]} />
                &nbsp;App Store
              </Item>
            </TitleWrap>
          </div>
        </div>
      </StyledDiv>
    </Box>
  );
}
