import "./App.css";
import FeedbackForm from "./component/FeedbackForm";

function App() {
  return (
    <div className="App">
      <section className="w-full h-screen bg-[#a4a3a3] flex flex-col justify-center items-center">
        <FeedbackForm />
      </section>
    </div>
  );
}

export default App;
