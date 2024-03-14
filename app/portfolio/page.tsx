import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <main className="h-screen">
        <iframe
          allowFullScreen={true} // Changed according to React's camelCase convention
          scrolling="no"
          className="fp-iframe"
          src="https://heyzine.com/flip-book/ef7efa1a16.html"
          style={{
            border: "1px solid lightgray",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </main>
    </>
  );
}
