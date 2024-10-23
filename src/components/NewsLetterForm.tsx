import UserInput from "./common/UserInput";

export default function NewsletterForm() {
  return (
    <div className="bg-white shadow-md p-4 max-w-md w-full rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">
        Subscribe to Our Newsletter
      </h2>
      <form className="flex flex-col">
        <UserInput
          label="Email Address"
          type="email"
          name="email"
          labelClass="block text-gray-700 mb-2"
          inputClass="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-background-light transition w-full"
        />
        <button className="bg-background-light text-black py-2 rounded-lg hover:bg-background-footer transition">
          Subscribe
        </button>
      </form>
      <p className="text-sm text-gray-500 text-center mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
