import { handleBookingForm } from "@/actions/bookingForm";
import BackGroundImage from "@/assets/images/form-background.jpeg";
import SectionTitle from "../molicules/SectionTitle";
import Text from "../atoms/Text";
import PrimaryBtn from "../atoms/PrimaryBtn";

export const BookingForm = async () => {
  return (
    <section
      style={{ backgroundImage: `url(${BackGroundImage.src})` }}
      className="bg-cover bg-center flex items-center justify-start py-[140px] overflow-hidden"
    >
      <div className="container mx-auto sm:px-10 px-5 ">
        <form
          action={handleBookingForm}
          className="text-white shadow-lg sm:w-[635px]"
        >
          <SectionTitle titleHeadint="Book Now" title="Book Your Table" />
          <Text className="max-w-[540px] text-white mb-[40px] mt-5">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </Text>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name * "
              className="w-full h-[46px] p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white placeholder:text-white"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email "
              className="w-full h-[46px] p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white placeholder:text-white"
            />
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Reservation Date"
              className="w-full h-[46px] p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white placeholder:text-white"
            />
            <input
              type="number"
              id="people"
              name="people"
              placeholder="Total People"
              className="w-full h-[46px] p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white placeholder:text-white"
            />
          </div>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white placeholder:text-white h-[140px]"
          />
          <PrimaryBtn type="submit" className="text-black font-bold mt-8">
            Book Now
          </PrimaryBtn>
        </form>
      </div>
    </section>
  );
};
