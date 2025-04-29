import "./App.css";
import AriaRoleAlert from "./ARIA/AriaRoleAlert";
import AriaRoleSpinbutton from "./ARIA/AriaRoleSpinbutton";
import AriaSort from "./ARIA/AriaSort";
import HiddenElements from "./HiddenElements";

function App() {
  return (
    <div>
      <header className="py-8 px-8 bg-white">
        <h1 className="text-2xl">Accessibility tests</h1>
      </header>
      <main className="flex flex-col gap-4 py-10 px-8 bg-blue-100/45 min-h-[100vh]">
        <AriaRoleAlert />

        <AriaRoleSpinbutton />

        <AriaSort />

        <HiddenElements />
      </main>
    </div>
  );
}

export default App;
