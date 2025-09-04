export interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

const technologyData: Technology[] = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface into outer space.",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "/assets/technology/image-spaceport-portrait.jpg",
      landscape: "/assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching or receiving spacecraft. Think of it as an airport for space travel.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "/assets/technology/image-space-capsule-portrait.jpg",
      landscape: "/assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft designed to reenter the Earth’s atmosphere and land safely, typically via parachutes.",
  },
];

export default technologyData;
