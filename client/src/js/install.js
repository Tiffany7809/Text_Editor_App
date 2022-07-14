const butInstall = document.getElementById("buttonInstall");


window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});


butInstall.addEventListener("click", async () => {
  const elementEvent = window.deferredPrompt;
  if (!elementEvent) {
    return;
  }
  elementEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});