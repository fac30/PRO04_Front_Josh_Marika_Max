interface SubmitButtonProps {
  buttonText: string;
}

export default function SubmitButton({ buttonText }: SubmitButtonProps) {
  return (
    <button
      className="mt-4 btn-primary"
      type="submit"
    >
      {buttonText}
    </button>
  );
}
