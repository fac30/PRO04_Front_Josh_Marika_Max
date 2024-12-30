import ContactUsForm from "../components/common/ContactUsForm";

export default function ContactUsPage() {
  return (
    <div className="min-h-3.5 bg-gray-100 flex items-center justify-center px-4 my-10">
      <div className="max-w-4xl w-full bg-white shadow-sm rounded-lg p-8">
        <h1 className="text-3xl text-black font-bold text-center mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center mb-8">
          We’d love to hear from you! Whether you have a question, feedback, or 
          just want to say hello, feel free to reach out using the form below.
        </p>
        <ContactUsForm />
      </div>
    </div>
  );
}
