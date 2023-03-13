function initLocationSlideshow() {
  const locationService = new JsonLocationService("/src/locations.json");
  const slideshow = new LocationSlideshow(locationService);
}

initLocationSlideshow();
