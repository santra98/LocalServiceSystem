interface BookingFormSectionProps {
  serviceOptions: string[];
}

const BookingFormSection = ({ serviceOptions }: BookingFormSectionProps) => {
  return (
    <section className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Booking details</h2>
      <p className="mt-2 text-sm text-text-secondary">
        Choose the service, preferred time and basic appointment details.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Select service
          </label>
          <select
            id="service"
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
          >
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="bookingDate"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Preferred date
          </label>
          <input
            id="bookingDate"
            type="date"
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="bookingTime"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Preferred time
          </label>
          <select
            id="bookingTime"
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
          >
            <option>09:00 AM</option>
            <option>11:00 AM</option>
            <option>01:00 PM</option>
            <option>03:00 PM</option>
            <option>05:00 PM</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Contact number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:border-primary"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Service address
          </label>
          <textarea
            id="address"
            rows={4}
            placeholder="Enter full service address"
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:border-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
