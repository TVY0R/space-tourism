export interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

const destinationData: Destination[] = [
  {
    name: "Moon",
    images: {
      png: "/assets/destination/image-moon.png",
      webp: "/assets/destination/image-moon.webp",
    },
    description:
      "See our closest celestial neighbor. A perfect relaxing trip where you can gaze at Earth from a distance.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "/assets/destination/image-mars.png",
      webp: "/assets/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. With a day lasting 37 minutes longer than Earth’s, Mars offers plenty of adventure.",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "/assets/destination/image-europa.png",
      webp: "/assets/destination/image-europa.webp",
    },
    description:
      "The icy moon of Jupiter awaits. A world of subterranean oceans and breathtaking vistas beneath its frozen crust.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "/assets/destination/image-titan.png",
      webp: "/assets/destination/image-titan.webp",
    },
    description:
      "Saturn’s largest moon offers methane lakes and orange skies. A surreal experience for the adventurous traveler.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

export default destinationData;
