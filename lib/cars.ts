export interface Car {
  id: number;
  model: string;
  specs: string; // e.g., "4.0L V8 twin-turbo"
  price: string;
  image: string; // Path to image in public/cars/
}

export const CAR_COLLECTION: Car[] = [
  {
    id: 1,
    model: "Aston Martin DBS",
    specs: "5.2L V12 twin-turbo",
    price: "$316,300",
    image: "/cars/aston.webp",
  },
  {
    id: 2,
    model: "Porsche 911 GT3 RS",
    specs: "4.0L Flat-6 NA",
    price: "$241,300",
    image: "/cars/porsche.webp",
  },
  {
    id: 3,
    model: "Lamborghini Revuelto",
    specs: "6.5L V12 Hybrid",
    price: "$608,358",
    image: "/cars/lambo.webp",
  },
];

/**
 * Generates a pre-filled WhatsApp message link for a specific car model.
 */
export const getWhatsAppLink = (carModel: string): string => {
  const phoneNumber = "YOUR_NUMBER"; // <-- REPLACE WITH YOUR REAL NUMBER
  const message = `Hello VividForge Motors, I am interested in acquiring the ${carModel}. Please provide details.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};