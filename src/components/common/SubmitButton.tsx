interface SubmitButtonProps {
  buttonText: string;
}

export default function SubmitButton({ buttonText }: SubmitButtonProps) {
  return (
    <button
      className="mt-4 bg-background-light text-black py-2 px-4 rounded-lg hover:bg-background-footer transition"
      type="submit"
    >
      {buttonText}
    </button>
  );
}
