import { style } from "@vanilla-extract/css";
import { color } from "./../../styles/token/color";
import { typography } from "./../../styles/token/typography";

export const container = style({
  position: "relative",
  width: "100%",
  height: "100vh",
});

export const header = style({
  display: "flex",
  justifyContent: "center",
  padding: "1.55rem",
  backgroundColor: color.white,
});

export const title = style({
  ...typography.sub_title1,
});

export const form = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",

  padding: "2rem",
});

export const iconBox = style({
  margin: "5rem auto",
});

export const inputBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.4rem",
  marginBottom: "2.4rem",
});

export const error = style({
  marginTop: "-0.8rem",
  marginLeft: "1rem",
  color: color.brand["red"],
  ...typography.caption2,
});
