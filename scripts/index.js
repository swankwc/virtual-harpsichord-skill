window.ai_edge_gallery_get_result = async () => {
  try {
    return JSON.stringify({
      webview: {
        url: "https://swankwc.github.io/virtual-harpsichord-skill/assets/ui.html"
      },
      result: "Success. Tell the user to tap the preview card to play the harpsichord."
    });
  } catch (e) {
    console.error(e);
    return JSON.stringify({
      error: `Failed to load harpsichord: ${e.message}`
    });
  }
};
