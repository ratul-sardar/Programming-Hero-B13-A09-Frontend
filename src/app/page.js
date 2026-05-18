import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="cssContainer">
          <h1 className="">HI, from the home page!</h1>
          <p className="">hi, body</p>
          <Button>click me</Button>
        </div>
      </section>
    </>
  );
}
