import FaqItem from "./FaqItem";
import faq from "../../common/constant/faq";
import FormRegister from "../../common/elements/FormRegister";

const FrequentlyAskedQuestionsSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black text-white p-10 lg:p-20 lg:px-40">
      <h1 className="text-3xl lg:text-5xl font-bold mb-8">Tanya Jawab Umum</h1>
      {faq.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}

      <FormRegister/>
    </div>

  );
};

export default FrequentlyAskedQuestionsSection;
