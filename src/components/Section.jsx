import React from 'react';
import './Section.css';

const Section =
    <Section title="What is React?">
React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components, manage the state of their applications, and efficiently update and render components when data changes.
</Section>;

<div class="section">
  <h1>Benefits of React</h1>
    <ul>
      <li>Component-Based Architecture: React promotes the creation of reusable components, making it easier to manage and maintain code.</li>
      <li>Virtual DOM: React uses a virtual DOM to optimize rendering performance, resulting in faster updates and a smoother user experience.</li>
      <li>Strong Community Support: React has a large and active community, providing a wealth of resources, libraries, and tools for developers.</li>
      <li>Flexibility: React can be used with various libraries and frameworks, allowing developers to choose the best tools for their projects.</li>
      <li>SEO-Friendly: React can be rendered on the server side, improving the SEO performance of web applications.</li>
    </ul>
</div>;

const App = () => { return <Section />; }
export default App;
