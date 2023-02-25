import { Title } from "solid-start";
import Counter from "~/components/Counter";
export default function Blog() {
  return (
    <main>
      <Title>I thought you knew? Ho.</Title>
      <h1>Blog</h1>
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
