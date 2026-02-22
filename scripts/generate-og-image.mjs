import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "..", "public", "og-image.png");

const WIDTH = 1200;
const HEIGHT = 630;

const stats = [
  { value: "400", label: "HACKERS" },
  { value: "48", label: "HOURS" },
  { value: "$30K+", label: "IN PRIZES" },
  { value: "100%", label: "FREE" },
];

const markup = {
  type: "div",
  props: {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(145deg, #5a8abf 0%, #6B9BD2 35%, #7BA4D9 65%, #8BB0E0 100%)",
      position: "relative",
      overflow: "hidden",
    },
    children: [
      // Radial glow top-right
      {
        type: "div",
        props: {
          style: {
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,200,100,0.15) 0%, transparent 70%)",
            display: "flex",
          },
        },
      },
      // Radial glow bottom-left
      {
        type: "div",
        props: {
          style: {
            position: "absolute",
            bottom: "-200px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
            display: "flex",
          },
        },
      },
      // Main content block
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          },
          children: [
            // Tagline
            {
              type: "div",
              props: {
                style: {
                  fontSize: 16,
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: 28,
                  fontFamily: "monospace",
                },
                children: "THE WORLD'S LARGEST HIGH SCHOOL HACKATHON",
              },
            },
            // Title — COVE
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  lineHeight: 0.85,
                },
                children: [
                  {
                    type: "span",
                    props: {
                      style: {
                        fontSize: 140,
                        fontWeight: 900,
                        color: "white",
                        letterSpacing: "-0.06em",
                        fontFamily: "sans-serif",
                      },
                      children: "COVE",
                    },
                  },
                  {
                    type: "span",
                    props: {
                      style: {
                        fontSize: 140,
                        fontWeight: 900,
                        color: "white",
                        letterSpacing: "-0.06em",
                        fontFamily: "sans-serif",
                      },
                      children: "HACKS",
                    },
                  },
                ],
              },
            },
            // Date + Location
            {
              type: "div",
              props: {
                style: {
                  fontSize: 18,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.55)",
                  marginTop: 32,
                  letterSpacing: "0.08em",
                  fontFamily: "monospace",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                },
                children: [
                  {
                    type: "span",
                    props: { children: "June 19\u201321, 2026" },
                  },
                  {
                    type: "span",
                    props: {
                      style: { color: "rgba(255,255,255,0.3)" },
                      children: "\u00B7",
                    },
                  },
                  {
                    type: "span",
                    props: { children: "Bay Area, CA" },
                  },
                ],
              },
            },
          ],
        },
      },
      // Bottom stats bar
      {
        type: "div",
        props: {
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "28px 48px",
            gap: 48,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(0,0,0,0.08)",
          },
          children: stats.map((stat, i) => ({
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                gap: i < stats.length - 1 ? 48 : 0,
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: {
                            fontSize: 32,
                            fontWeight: 900,
                            color: "white",
                            letterSpacing: "-0.04em",
                            fontFamily: "sans-serif",
                          },
                          children: stat.value,
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            fontSize: 10,
                            fontWeight: 500,
                            letterSpacing: "0.2em",
                            color: "rgba(255,255,255,0.45)",
                            fontFamily: "monospace",
                            textTransform: "uppercase",
                          },
                          children: stat.label,
                        },
                      },
                    ],
                  },
                },
                ...(i < stats.length - 1
                  ? [
                      {
                        type: "div",
                        props: {
                          style: {
                            width: 1,
                            height: 32,
                            background: "rgba(255,255,255,0.12)",
                            display: "flex",
                          },
                        },
                      },
                    ]
                  : []),
              ],
            },
          })),
        },
      },
      // Top-left brand chip
      {
        type: "div",
        props: {
          style: {
            position: "absolute",
            top: 28,
            left: 36,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.12)",
          },
          children: {
            type: "span",
            props: {
              style: {
                fontSize: 14,
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.02em",
                fontFamily: "sans-serif",
              },
              children: "covehacks.dev",
            },
          },
        },
      },
      // Top-right apply badge
      {
        type: "div",
        props: {
          style: {
            position: "absolute",
            top: 28,
            right: 36,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.9)",
          },
          children: {
            type: "span",
            props: {
              style: {
                fontSize: 14,
                fontWeight: 700,
                color: "#5a8abf",
                letterSpacing: "-0.01em",
                fontFamily: "sans-serif",
              },
              children: "Apply Now",
            },
          },
        },
      },
    ],
  },
};

async function generate() {
  console.log("Generating OG image...");

  const svg = await satori(markup, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      {
        name: "sans-serif",
        weight: 900,
        style: "normal",
        data: await fetchFont("Inter", 900),
      },
      {
        name: "sans-serif",
        weight: 700,
        style: "normal",
        data: await fetchFont("Inter", 700),
      },
      {
        name: "sans-serif",
        weight: 400,
        style: "normal",
        data: await fetchFont("Inter", 400),
      },
      {
        name: "monospace",
        weight: 500,
        style: "normal",
        data: await fetchFont("JetBrains Mono", 500),
      },
      {
        name: "monospace",
        weight: 400,
        style: "normal",
        data: await fetchFont("JetBrains Mono", 400),
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: WIDTH },
  });

  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  writeFileSync(OUTPUT_PATH, pngBuffer);
  console.log(
    `OG image saved to ${OUTPUT_PATH} (${pngBuffer.byteLength} bytes)`,
  );
}

async function fetchFont(family, weight) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&display=swap`;

  // Use a User-Agent that triggers truetype (ttf) responses instead of woff2
  // Older IE user-agents cause Google Fonts to serve TTF format
  const cssRes = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)",
    },
  });

  const css = await cssRes.text();

  // Try truetype format first, then fall back to any url()
  const fontUrlMatch =
    css.match(/src:\s*url\(([^)]+)\)\s*format\(['"]?truetype['"]?\)/) ||
    css.match(/src:\s*url\(([^)]+)\)/);

  if (!fontUrlMatch) {
    throw new Error(`Could not find font URL for ${family} weight ${weight}`);
  }

  const fontRes = await fetch(fontUrlMatch[1]);
  return fontRes.arrayBuffer();
}

generate().catch((err) => {
  console.error("Failed to generate OG image:", err);
  process.exit(1);
});
