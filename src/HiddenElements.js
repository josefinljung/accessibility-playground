export default function HiddenElements() {
  return (
    <div className="bg-white border-black border-2 p-2 rounded-md max-w-[500px]">
      <h2 className="text-xl font-medium">Hidden elements</h2>
      <div className="p-2 bg-white">
        <h3>Element with display: none</h3>
        <p className="bg-red-500" style={{ display: "none" }}>
          Display none (hidden from AT and visually)
        </p>
      </div>
      <div className="p-2 bg-white">
        <h3>Element with visibility hidden</h3>
        <p className="bg-red-500" style={{ visibility: "hidden" }}>
          Visibility hidden (hidden from AT and visually)
        </p>
      </div>
      <div className="p-2 bg-white">
        <h3>Element with aria-hidden</h3>
        <p className="bg-red-500" aria-hidden="true">
          Aria-hidden (should hide from AT)
        </p>
      </div>
      <div className="p-2 bg-white">
        <h3>Element with hidden</h3>
        <p hidden className="bg-red-500">
          Hidden
        </p>
      </div>
      <div className="p-2 bg-white">
        <h3>Element with role presentation</h3>
        <p role="presentation" className="bg-red-500">
          Role presentation (might hide from AT, removes semantic meaning)
        </p>
      </div>
      <div className="p-2 bg-white">
        <h3>Element with sr-only</h3>
        <p className="bg-red-500 sr-only">Sr only (hidden visually)</p>
      </div>
    </div>
  );
}
