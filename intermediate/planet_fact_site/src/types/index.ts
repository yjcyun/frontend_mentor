export type ButtonType = "overview" | "structure" | "geology";
export type CardLabelType =
  | "rotation"
  | "revolution time"
  | "radius"
  | "average temp.";
export type CardType = { label: CardLabelType; content: string };
