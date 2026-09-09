import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();

  const tranId = formData.get("tran_id");
  const movieId = formData.get("value_a");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl || !tranId || !movieId) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid payment callback",
      },
      { status: 400 }
    );
  }

  return NextResponse.redirect(
    `${baseUrl}/movie/${movieId}/booking/failed?tranId=${encodeURIComponent(
      tranId
    )}`
  );
}