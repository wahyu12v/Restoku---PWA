async function swRegister() {
  if (!('serviceWorker' in navigator)) {
    // eslint-disable-next-line no-console
    console.log('Service Worker not supported in the browser');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    // eslint-disable-next-line no-console
    console.log('Service worker registered');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Failed to register service worker', error);
  }
}

export default swRegister;
