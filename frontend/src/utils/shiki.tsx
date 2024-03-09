import { getHighlighter } from "shiki";

export const getShikiHighlighter = async () => {
  const highlighter = await getHighlighter({
    themes: [
      "vitesse-dark",
      "vitesse-light",
      "catppuccin-macchiato",
      "catppuccin-frappe",
      "tokyo-night",
      "rose-pine",
    ],
    langs: ["javascript", "typescript", "vue"],
  });

  return highlighter;
};
