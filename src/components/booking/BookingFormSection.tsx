import FormInput from "../ui/FormInput";
import FormSelect from "../ui/FormSelect";
import FormTextarea from "../ui/FormTextarea";
import type { BookingData } from "../../types/booking";
import type { BookingErrors } from "../../utils/bookingValidation";

interface BookingFormSectionProps {
  serviceOptions: string[];
  bookingData: BookingData;
  errors: BookingErrors;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
}

const BookingFormSection = ({
  serviceOptions,
  bookingData,
  errors,
  setBookingData,
}: BookingFormSectionProps) => {
  return (
    <section className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Booking details</h2>
      <p className="mt-2 text-sm text-text-secondary">
        Choose the service, preferred time and basic appointment details.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <FormSelect
          id="service"
          label="Select service"
          value={bookingData.service}
          error={errors.service}
          onChange={(value) =>
            setBookingData((prev) => ({ ...prev, service: value }))
          }
          options={serviceOptions.map((service) => ({
            label: service,
            value: service,
          }))}
        />

        <FormInput
          id="bookingDate"
          label="Preferred date"
          type="date"
          value={bookingData.date}
          error={errors.date}
          onChange={(value) =>
            setBookingData((prev) => ({ ...prev, date: value }))
          }
        />

        <FormSelect
          id="bookingTime"
          label="Preferred time"
          value={bookingData.time}
          error={errors.time}
          onChange={(value) =>
            setBookingData((prev) => ({ ...prev, time: value }))
          }
          options={[
            { label: "Select a time", value: "" },
            { label: "09:00 AM", value: "09:00 AM" },
            { label: "11:00 AM", value: "11:00 AM" },
            { label: "01:00 PM", value: "01:00 PM" },
            { label: "03:00 PM", value: "03:00 PM" },
            { label: "05:00 PM", value: "05:00 PM" },
          ]}
        />

        <FormInput
          id="phone"
          label="Contact number"
          type="tel"
          value={bookingData.phone}
          placeholder="Enter your phone number"
          error={errors.phone}
          onChange={(value) =>
            setBookingData((prev) => ({ ...prev, phone: value }))
          }
        />

        <div className="md:col-span-2">
          <FormTextarea
            id="address"
            label="Service address"
            value={bookingData.address}
            placeholder="Enter full service address"
            error={errors.address}
            onChange={(value) =>
              setBookingData((prev) => ({ ...prev, address: value }))
            }
          />
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
