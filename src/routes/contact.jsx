import { Title } from "solid-start";
import Counter from "~/components/Counter";
export default function Contact() {
  return (
    <main>
      <Title>You may not touch this PUTO</Title>
      <h1>Contact</h1>
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
