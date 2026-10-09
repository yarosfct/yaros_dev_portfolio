import { createYhIconResponse } from "./lib/yh-icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return createYhIconResponse({
    size: 180,
    fontSize: 74,
    ringWidth: 6
  });
}
