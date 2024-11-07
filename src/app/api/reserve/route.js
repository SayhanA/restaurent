// app/api/reserve/route.js

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // Process the reservation data (e.g., store it in a database)
    console.log("Reservation Data:", data);

    // Return a success response
    return NextResponse.json({
      message: "Reservation successfully submitted!",
    });
  } catch (error) {
    console.error("Error processing reservation:", error);
    return NextResponse.json(
      { error: "Failed to submit reservation" },
      { status: 500 }
    );
  }
}
