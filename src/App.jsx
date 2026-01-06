import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import HelpfulResource from "./components/HelpfulResource.jsx";
import AboutMe from "./components/AboutMe.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      <Section title="What is react?">
        <p>
          React is a JavaScript library for building user interfaces. It lets
          you create reusable components and efficiently update the UI when your
          data changes.
        </p>
      </Section>

      <Section title="Benefits of react">
        <ul>
          <li>Component-based architecture (reusable UI pieces)</li>
          <li>Fast updates using the virtual DOM</li>
          <li>State-driven UI that stays in sync with your data</li>
          <li>Huge ecosystem and community support</li>
          <li>Scales well for larger applications</li>
        </ul>
      </Section>

      <Section title="Helpful resources">
        <HelpfulResource
          label="React in 100 Seconds (Fireship)"
          link="https://www.youtube.com/watch?v=Tn6-PIqc4UM"
        />
        <HelpfulResource
          label="React Tutorial for Beginners (Programming with Mosh)"
          link="https://www.youtube.com/watch?v=SqcY0GlETPk"
        />
        <HelpfulResource
          label="Official React Docs: Learn"
          link="https://react.dev/learn"
        />
      </Section>

      <AboutMe />

    </div>
  );
}

export default App;
