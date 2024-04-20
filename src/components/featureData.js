import house1 from "../assets/image 5.png";
import house2 from "../assets/image 9.png";
import house3 from "../assets/image 11.png";
import house4 from "../assets/image 5.png";
import camera from "../assets/camera-icon.png";
import like from "../assets/like-icon.png";

const featureData = [
  {
    image: house1,
    title: "#500,000 per annum",
    description: "3 bedroom Duplex in Ketu for rent.",
    feature: camera,
    likes: like,
    houseFeatures: [
      "Ketu Kosofe",
      "450sqm",
      "furnished",
      "3bathrooms",
      "3bedrooms",
    ],
  },
  {
    image: house2,
    title: "#400,000 per annum",
    description: "3 bedroom duplex in Ikotun for rent.",
    feature: camera,
    likes: like,
    houseFeatures: ["Ikotun", "450sqm", "furnished", "3bathrooms", "3bedrooms"],
  },
  {
    image: house3,
    title: "#350,000 per annum",
    description: "4 bedroom in ikoyi for rent.",
    feature: camera,
    likes: like,
    houseFeatures: ["ikoyi", "300sqm", "furnished", "4bathrooms", "4bedrooms"],
  },
  {
    image: house4,
    title: "#600,000 per annum",
    description: "2 bedroom in lekki for rent.",
    feature: camera,
    likes: like,
    houseFeatures: ["lekki", "350sqm", "furnished", "2bathrooms", "2bedrooms"],
  },
];

export default featureData;
