const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // event.preventDefault();

  // console.log('in before prompt');
  // Store the event
  window.deferredPrompt = event;
  // console.log(window.deferredPrompt);

  // Remove the hidden class from the button
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  console.log("clicked!");
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    console.log("no event");
    return;
  }

  // Display the prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable, as it can only be used once
  window.deferredPrompt = null;

  // Re-hide the install button
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
