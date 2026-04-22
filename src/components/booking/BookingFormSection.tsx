import type { BookingData } from "../../types/booking";

interface BookingFormSectionProps {
  serviceOptions: string[];
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
}

const BookingFormSection = ({
  serviceOptions,
  bookingData,
  setBookingData,
}: BookingFormSectionProps) => {
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
            value={bookingData.service}
            onChange={(e) =>
              setBookingData((prev) => ({
                ...prev,
                service: e.target.value,
              }))
            }
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
            value={bookingData.date}
            onChange={(e) =>
              setBookingData((prev) => ({
                ...prev,
                date: e.target.value,
              }))
            }
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
            value={bookingData.time}
            onChange={(e) =>
              setBookingData((prev) => ({
                ...prev,
                time: e.target.value,
              }))
            }
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
          >
            <option value="">Select a time</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="05:00 PM">05:00 PM</option>
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
            value={bookingData.phone}
            onChange={(e) =>
              setBookingData((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
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
            value={bookingData.address}
            onChange={(e) =>
              setBookingData((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:border-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
