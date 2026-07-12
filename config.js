/* Public Apps Script endpoint used by the GitHub Pages viewer. */
window.VET_TX_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbxgXG-bhNG3Td3oJzdnmorqvx1fRM5daWD_QDagHzqQeSVTC0GGXaDS0xNJIiiz_U8IdA/exec'
};

/* Load the new multi-route poster directory interface. */
(function () {
  var script = document.createElement('script');
  script.src = 'directory-app.js?v=20260712-1';
  script.async = false;
  document.head.appendChild(script);
})();