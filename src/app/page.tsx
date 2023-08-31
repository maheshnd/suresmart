import Image from "next/image";
import { IntroductionSection } from "./components/IntroductionSection";
import { ImportanceOfCounseling } from "./components/ImportanceOfCounseling";
import { ShortHomeIntro } from "./components/ShortHomeIntro";

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <ImportanceOfCounseling />
      <ShortHomeIntro />
    </>
  );
}
