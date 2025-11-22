import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "relative",
  justifyContent: "center",
});

export const backgroundImg = style({
  position: "absolute",
  width: "100%",
  objectFit: "contain",
});

export const logoImg = style({
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "26.6rem",
  zIndex: 2,
});
