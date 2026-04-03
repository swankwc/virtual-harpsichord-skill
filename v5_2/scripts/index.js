window.ai_edge_gallery_get_result = async () => {
  try {
    return JSON.stringify({
      webview: { url: "https://swankwc.github.io/virtual-harpsichord-skill/v5_2/assets/ui.html" },
      result: "Success. Open the preview card to play the cleaned-up harpsichord."
    });
  } catch (e) {
    console.error(e);
    return JSON.stringify({ error: "Failed to load harpsichord V5.2: " + e.message });
  }
};
