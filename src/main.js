function initLocationSlideshow() {
  const locationService = new JsonLocationService("/src/assets/locations.json");
  const slideshow = new LocationSlideshow(locationService);
}

initLocationSlideshow();
