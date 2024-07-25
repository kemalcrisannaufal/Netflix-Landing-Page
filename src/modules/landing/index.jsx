import Hero from "../hero";
import Separator from "../../common/elements/Separator";
import Content1 from "../content_1";
import Content2 from "../content_2";
import Content3 from "../content_3";
import Content4 from "../content_4";
import FrequentlyAskedQuestionsSection from "../faq/index";

const Landing = () => {
  return (
    <>
      <Hero />
      <Separator />
      <Content1 />
      <Separator />
      <Content2 />
      <Separator />
      <Content3 />
      <Separator />
      <Content4 />
      <Separator />
      <FrequentlyAskedQuestionsSection/>
    </>
  );
};

export default Landing;
