import FormSelect from "../ui/FormSelect";
import FormTextarea from "../ui/FormTextarea";
import type { BookingData } from "../../types/booking";

interface BookingExtrasSectionProps {
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
}

const BookingExtrasSection = ({
  bookingData,
  setBookingData,
}: BookingExtrasSectionProps) => {
  return (
    <section className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">
        Payment & preferences
      </h2>
      <p className="mt-2 text-sm text-text-secondary">
        Select how you want to pay and add any service notes for the provider.
      </p>

      <div className="mt-6 grid gap-5">
        <FormSelect
          id="paymentMethod"
          label="Payment method"
          value={bookingData.paymentMethod}
          onChange={(value) =>
            setBookingData((prev) => ({
              ...prev,
              paymentMethod: value,
            }))
          }
          options={[
            { label: "Cash after service", value: "Cash after service" },
            { label: "UPI", value: "UPI" },
            { label: "Card on delivery", value: "Card on delivery" },
          ]}
        />

        <FormTextarea
          id="notes"
          label="Additional notes"
          value={bookingData.notes}
          placeholder="Add any instructions, landmarks or preferences"
          onChange={(value) =>
            setBookingData((prev) => ({
              ...prev,
              notes: value,
            }))
          }
        />
      </div>
    </section>
  );
};

export default BookingExtrasSection;
