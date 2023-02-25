import { Title } from "solid-start";
import Counter from "~/components/Counter";
export default function About() {
  return (
    <main>
      <Title>about time</Title>
      <h1>it is about damn time</h1>
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
