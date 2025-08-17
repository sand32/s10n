const mermaidElementCode = "div.mermaid";

function css(name) {
  return "rgb(" + getComputedStyle(document.documentElement).getPropertyValue(name) + ")";
}

document.addEventListener("DOMContentLoaded", () => {
  const mermaidDivs = document.querySelectorAll(mermaidElementCode);

  for (const div of mermaidDivs) {
    const preElement = div.querySelector("pre");
    if (preElement) {
      div.textContent = preElement.textContent;
    }
  }
});

const updateMermaid = async (appearance) => {
  let dark = appearance === 'dark' ? true : false;
  await resetProcessedMermaids();
  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: {
      darkMode: dark,
      background: css("--color-neutral"),
      primaryColor: dark ? css("--color-neutral-800") : css("--color-primary-200"),
      primaryTextColor: dark ? css("--color-primary-100") : css("--color-primary-900"),
      secondaryColor: css("--color-secondary-200"),
      tertiaryColor: css("--color-neutral-100"),
      primaryBorderColor: css("--color-primary-400"),
      secondaryBorderColor: css("--color-secondary-400"),
      tertiaryBorderColor: css("--color-neutral-400"),
      lineColor: css("--color-neutral-600"),
      noteBorderColor: css("--color-neutral-900"),
      fontFamily:
        "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif",
      fontSize: "16px",
    },
  });
  await mermaid.run({ querySelector: mermaidElementCode });
}

const saveOriginalMermaidData = async () => {
  try {
    const elements = document.querySelectorAll(mermaidElementCode);
    const count = elements.length;
    if(count === 0) return;

    const promises = Array.from(elements).map((element) => {
      if(element.getAttribute('data-processed') != null) {
        return;
      }
      element.setAttribute('data-original-code', element.innerHTML);
    });

    await Promise.all(promises);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const resetProcessedMermaids = async () => {
  try {
    const elements = document.querySelectorAll(mermaidElementCode);
    const count = elements.length;
    if(count === 0) return;

    const promises = Array.from(elements).map((element) => {
      if(element.getAttribute('data-original-code') != null) {
        element.removeAttribute('data-processed');
        element.innerHTML = element.getAttribute('data-original-code');
      } else {
        console.error("Element already reset!");
      }
      element.setAttribute('data-original-code', element.innerHTML);
    });

    await Promise.all(promises);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
