window.ai_edge_gallery_get_result = async () => {
  try {
    return JSON.stringify({
      webview: {
        url: "https://swankwc.github.io/virtual-harpsichord-skill/v3/assets/ui.html"
      },
      result: "Success. Open the preview card to play the expressive harpsichord."
    });
  } catch (e) {
    console.error(e);
    return JSON.stringify({
      error: `Failed to load harpsichord V3: ${e.message}`
    });
  }
};
