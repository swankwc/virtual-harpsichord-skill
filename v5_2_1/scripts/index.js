window.ai_edge_gallery_get_result = async () => {
  try {
    return JSON.stringify({
      webview: { url: "https://swankwc.github.io/virtual-harpsichord-skill/v5_2_1/assets/ui.html" },
      result: "Success. Open the preview card to play the harpsichord with demos and fullscreen rotation."
    });
  } catch (e) {
    console.error(e);
    return JSON.stringify({ error: "Failed to load harpsichord V5.2.1: " + e.message });
  }
};
