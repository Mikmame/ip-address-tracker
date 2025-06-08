# IP Address Tracker

A responsive IP address tracker that displays geolocation data and visualizes it on a map using Leaflet.js. Built as a solution to a [Frontend Mentor](https://www.frontendmentor.io) challenge.

## 🌐 Live Demo

▶️ [View the live site](https://ip-address-tracker-nu-gules.vercel.app/)

## ✨ Features

- Detects and displays user's IP address on page load
- Fetches IP data (location, timezone, ISP) from the [IPify Geolocation API](https://geo.ipify.org/)
- Allows manual search of any IP address or domain
- Renders map using [Leaflet.js](https://leafletjs.com/)
- Responsive design for mobile and desktop screens
- Animated map positioning based on search
- Custom marker icons

## 🛠 Tech Stack

- **HTML5**, **CSS3**
- **JavaScript (ES6+)**
- **[Leaflet.js](https://leafletjs.com/)** – interactive map library
- **[Parcel](https://parceljs.org/)** – blazing fast bundler
- **[IPify API](https://geo.ipify.org/)** – to retrieve geolocation data
- **Vercel** – for deployment

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Mikmame/ip-address-tracker.git
cd ip-address-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run start
```

This will start the app at `http://localhost:1234`

4. Build for production:

```bash
npm run build
```

Output will be placed in the `/build` folder.

## 📂 Project Structure

```
.
├── src/                # Source files
│   ├── index.js        # App logic
│   ├── style.css       # Styling
│   └── images/         # Icons and assets
├── index.html          # Main HTML file
├── package.json        # Scripts and dependencies
├── .gitignore
├── README.md
└── build/              # Output folder (generated after build)
```

## 🧪 API Used

- **IPify** (https://geo.ipify.org) – for IP geolocation data

## 📦 Deployment

This project is deployed using **[Vercel](https://vercel.com/)**.  
Each push to the `main` branch automatically triggers a production deployment.

🔗 Live:  
[https://ip-address-tracker-nu-gules.vercel.app/](https://ip-address-tracker-nu-gules.vercel.app/)

---

## 🙌 Acknowledgements

- Challenge from [Frontend Mentor](https://www.frontendmentor.io)
- Geolocation data via [IPify API](https://geo.ipify.org)
- Maps powered by [Leaflet.js](https://leafletjs.com)
- Built and maintained by [Mikmame](https://github.com/Mikmame)

---

## 📄 License

This project is licensed under the MIT License.
