import React from "react";

const MapSection = () => {
  const address =
    "Shree Vastu, Temghar Village, Kalyan-Bhiwandi Road, Temghar, Bhiwandi – 421302";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  const landmarks = [
    "Near ABC Petrol Pump",
    "5 mins from Temghar Railway Station",
    "Close to National Highway 160",
    "Adjacent to Municipal Office",
  ];

  return (
    <section id="map" className="map-section">
      <div className="container">
        <div className="map-header">
          <h2>Find Us</h2>
          <p>
            Located in the heart of Temghar, our construction site is easily
            accessible and well-connected to major transport routes.
          </p>
        </div>

        <div className="map-grid">
          {/* Left - Map */}
          <div className="map-embed card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104322.4991293617!2d72.95513562054299!3d19.258870659100946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bdd770e44b89%3A0x22d90b45063f09b2!2sShree%20vastu%20Building%20Temghar!5e0!3m2!1sen!2sin!4v1753718531127!5m2!1sen!2sin"
              width="800"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right - Info */}
          <div className="map-info">
            <div className="card info-card">
              <h3>📍 Our Location</h3>
              <p>{address}</p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Get Directions
              </a>
            </div>

            <div className="card landmarks-card">
              <h4>Nearby Landmarks</h4>
              <ul>
                {landmarks.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* <div className="card quick-info-card">
              <h4>Quick Info</h4>
              <div className="quick-info-row">
                <span>Distance from Mumbai:</span>
                <span>~45 km</span>
              </div>
              <div className="quick-info-row">
                <span>Nearest Airport:</span>
                <span>Mumbai (60 km)</span>
              </div>
              <div className="quick-info-row">
                <span>Public Transport:</span>
                <span>Available</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
