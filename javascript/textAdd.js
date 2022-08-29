export default function AddText(text) {
  for (const key of document.body.children) {
    key.textContent = key.textContent.concat(text);
  }
}
