import { Title } from "solid-start";
import Counter from "~/components/Counter";
export default function Projects() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Projects</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
