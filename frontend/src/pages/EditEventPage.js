import { redirect, useRouteLoaderData, json } from "react-router-dom";
import EventForm from "../components/EventForm";

export async function action({ request, params }) {
  const method = request.method;
  const formData = await request.formData();

  const updateEventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    url += `/${params.eventId}`;
  }

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateEventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }
  return redirect("/events");
}

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return <EventForm event={event} method="PATCH" />;
}

export default EditEventPage;
