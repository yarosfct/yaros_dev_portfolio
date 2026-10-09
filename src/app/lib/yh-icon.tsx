import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/** Nav YH blue (dark-theme primary) — reads on light and dark browser chrome */
export const YH_BLUE = "#468af6";
/** Dark theme page background */
export const YH_BG = "#050608";

export async function loadSpaceGroteskBold() {
  return readFile(join(process.cwd(), "src/app/fonts/SpaceGrotesk-Bold.ttf"));
}

type YhIconOptions = {
  size: number;
  /** Letter size relative to canvas; tuned for 32px / 180px */
  fontSize: number;
  ringWidth: number;
};

export async function createYhIconResponse({ size, fontSize, ringWidth }: YhIconOptions) {
  const fontData = await loadSpaceGroteskBold();
  const letterSpacing = fontSize * 0.14;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: YH_BG,
          borderRadius: size / 2,
          border: `${ringWidth}px solid rgba(70, 138, 246, 0.5)`,
          boxSizing: "border-box"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: YH_BLUE,
            fontSize,
            fontWeight: 700,
            fontFamily: "Space Grotesk",
            letterSpacing,
            // Optical balance: letter-spacing adds trailing space
            paddingLeft: letterSpacing,
            lineHeight: 1,
            marginTop: -size * 0.02
          }}
        >
          YH
        </div>
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [
        {
          name: "Space Grotesk",
          data: fontData,
          weight: 700,
          style: "normal"
        }
      ]
    }
  );
}
