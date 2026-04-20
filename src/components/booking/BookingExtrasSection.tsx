const BookingExtrasSection = () => {
  return (
    <section className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">
        Payment & preferences
      </h2>
      <p className="mt-2 text-sm text-text-secondary">
        Select how you want to pay and add any service notes for the provider.
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label
            htmlFor="paymentMethod"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Payment method
          </label>
          <select
            id="paymentMethod"
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
          >
            <option>Cash after service</option>
            <option>UPI</option>
            <option>Card on delivery</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="notes"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Additional notes
          </label>
          <textarea
            id="notes"
            rows={4}
            placeholder="Add any instructions, landmarks or preferences"
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:border-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingExtrasSection;
