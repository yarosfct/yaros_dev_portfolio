import { createYhIconResponse } from "./lib/yh-icon";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return createYhIconResponse({
    size: 32,
    fontSize: 13,
    ringWidth: 1.5
  });
}
