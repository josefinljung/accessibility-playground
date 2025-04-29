export default function AriaRoleAlert() {
  const submitForm = (event) => {
    event.preventDefault();

    const emailField = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    if (!emailField.value || !emailField.value.includes("@")) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
      alert("Form submitted successfully");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-medium">Aria Role Alert</h2>

      <form
        id="contactForm"
        onSubmit={submitForm}
        className="bg-white border-black border-2 p-2 rounded-md max-w-[500px]"
      >
        <legend>A test form for ARIA alert</legend>
        <fieldset className="grid gap-2">
          <div className="flex gap-2">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="border" />
          </div>
          <button
            type="submit"
            onclick="submitForm(event)"
            className="border font-bold py-2 text-white bg-black rounded-md"
          >
            Submit
          </button>
        </fieldset>

        <div role="alert">
          <span id="error-message" className="text-red-500 hidden">
            Please provide a valid email address.
          </span>
        </div>
      </form>
    </div>
  );
}
