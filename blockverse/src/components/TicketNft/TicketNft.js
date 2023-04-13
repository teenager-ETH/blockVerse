export default function TicketNft() {
  return (
    <div>
      <div className="container items-center p-3 text-center mx-auto">
        <h3 className="rounded fs-2">Create Tickets</h3>
      </div>
      <form className="container">
        <div class="mb-3">
          <label for="eventName" class="form-label">
            Event Name
          </label>
          <input
            type="eventName"
            class="form-control"
            id="eventName"
            aria-describedby="eventName"
          />
          <div id="eventName" class="form-text">
            Enter complete name of event, we will add prefix as 'event'
          </div>
        </div>
        <div class="mb-3">
          <label for="eventDescription" class="form-label">
            Event Description
          </label>
          <textarea
            type="eventDescription"
            class="form-control"
            id="eventDescription"
            aria-describedby="eventDescription"
          />
          <div id="eventDescription" class="form-text">
            Enter complete event description
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
