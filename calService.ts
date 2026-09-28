export interface BookingData {
  name: string;
  email: string;
  start: string;
}

export async function createCalBooking(data: BookingData) {
  try {
    const apiKey = import.meta.env.VITE_CAL_API_KEY || "cal_live_48dba1ce5f05647bf09676eb68a5fbac";
    const eventTypeId = Number(import.meta.env.VITE_CAL_EVENT_TYPE_ID) || 7177712;

    const res = await fetch(`/api-cal/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "cal-api-version": "2024-08-13"
      },
      body: JSON.stringify({
        start: data.start,
        eventTypeId: eventTypeId,
        attendee: {
          name: data.name,
          email: data.email,
          timeZone: "Europe/Lisbon",
          language: "pt"
        }
      })
    });

    const result: any = await res.json();

    if (!res.ok) {
      const errorMsg = result?.error?.message || result?.message || "Erro ao efetuar a reserva no Cal.com";
      throw new Error(errorMsg);
    }

    return { success: true, booking: result.data || result };
  } catch (error: any) {
    console.error("Erro Cal.com:", error);
    return { success: false, error: error?.message || "Erro ao efetuar a reserva" };
  }
}