import { redirect } from "next/navigation";

export async function handleBookingForm(data) {
  "use server";

  const formData = {
    name: data.get("name"),
    email: data.get("email"),
    date: data.get("date"),
    people: data.get("people"),
    message: data.get("message"),
  };

  // Send form data to a backend or API
  const res = await fetch("http://localhost:3000/api/reserve", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    redirect("/blog"); // Redirect to a thank-you page after submission
  } else {
    throw new Error("Failed to submit reservation.");
  }
}
