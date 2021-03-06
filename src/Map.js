import { useEffect, useRef, memo } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function Map({ response }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    const firstLocation = response.data.find(
      (event) => event.location?.location?.latitude
    )?.location?.location || { longitude: 0, latitude: 0 };

    if (!map.current) {
      map.current = new mapboxgl.Map({
        center: [firstLocation.longitude, firstLocation.latitude],
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 12,
      });
    } else {
      map.current.flyTo({
        center: [firstLocation.longitude, firstLocation.latitude],
      });
    }

    response.data.forEach((event) => {
      if (event.location?.location?.longitude) {
        const el = document.createElement("div");
        el.className = "marker";

        new mapboxgl.Marker(el)
          .setLngLat([
            event.location?.location?.longitude,
            event.location?.location?.latitude,
          ])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<a href="${event.browser_url}" target="_blank" rel="noopener noreferrer">
                <h3>${event.title}</h3>
              </a>
              <p>${event.summary}</p>`
            )
          )
          .addTo(map.current);
      }
    });
  }, [response]);

  return <div ref={mapContainer} style={{ height: "400px" }} />;
}

export default memo(Map);
