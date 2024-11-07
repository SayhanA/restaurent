import { BookingForm } from "@/components/organisms/BookingForm";
import FoodItems from "@/components/organisms/FoodItems";
import HomeHero from "@/components/organisms/HomeHero";
import Review from "@/components/organisms/Review";
import Services from "@/components/organisms/Services";

export default function Home() {
  return (
    <main className="w-full ">
      <HomeHero />
      <Services />
      <FoodItems />
      <BookingForm />
      <Review />
    </main>
  );
}
