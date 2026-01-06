import Section from "./components/Section.jsx";

function App() {
  return (
    <div className="app">
      <Section title="What is react?">
        <p>
          React is a JavaScript library for building user interfaces. It helps
          you create reusable components that manage their own state, and it
          updates the page efficiently when data changes so your UI stays fast
          and responsive.
        </p>
      </Section>

      <Section title="Benefits of react">
        <ul>
          <li>
            Component-based structure makes code reusable and easier to
            maintain.
          </li>
          <li>Efficient updates using a virtual DOM improves performance.</li>
          <li>State-driven UI keeps your interface in sync with your data.</li>
          <li>
            Huge ecosystem and community support with tons of libraries and
            tools.
          </li>
          <li>Works well for building scalable single-page applications.</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;
