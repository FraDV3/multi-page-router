import { useParams } from "react-router-dom";

function EventDetailsPage() {
  const { eventId } = useParams();

  return (
    <>
      <h1>Event Details Page</h1>
      <p>Event Details for Event ID: {eventId}</p>
    </>
  );
}

export default EventDetailsPage;
