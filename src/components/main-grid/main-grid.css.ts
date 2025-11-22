import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "0",
  position: "relative",
});

export const item = style({
  width: "58%", // 카드가 전체의 절반만 차지하도록
});

// 왼쪽 정렬 아이템
export const itemLeft = style({
  alignSelf: "flex-start",
});

// 오른쪽 정렬 아이템
export const itemRight = style({
  alignSelf: "flex-end",
});

// 위로 당겨서 행이 겹치도록 (값은 카드 높이에 맞게 조절)
export const itemOverlap = style({
  marginTop: "-120px", // TODO: 카드 크기의 절반으로 수정해야됨
});
