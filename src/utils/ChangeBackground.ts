export default function backgroundEffect(e: any) {
  const options = {
    element: document.querySelector<HTMLElement>('[data-target-app]'),
  }
  if (options.element) options.element.style.backgroundImage = `url(${e})`;
}