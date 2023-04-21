export const createDomElementForIframe = () => {
  const el = document.createElement("div");

  el.addEventListener("click", function() {
    el.remove()
  });

  el.id = "game-launch";
  el.style.position = "fixed";
  el.style.backgroundColor = "#9b9b9bd9";
  el.style.display = "flex";
  el.style.alignItems = "center";
  el.style.justifyContent = "center";
  el.style.width = "100%";
  el.style.height = "100%";
  el.style.right = "0";
  el.style.left = "0";
  el.style.top = "0";
  el.style.bottom = "0";

  const body = document.querySelector("body");
  body.appendChild(el);
};
