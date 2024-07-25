import Input from "./Input";
import GoButton from "./GoButton";

const FormRegister = () => {
  return (
    <>
      <h5 className="mt-5 text-lg text-center md:text-xl">
        Siap menonton? Masukkan email untuk membuat atau memulai lagi
        keanggotaanmu.
      </h5>
      <div className="w-full flex flex-col sm:flex-row gap-5 justify-center items-center mt-5">
        <Input
          type={"email"}
          placeholder={"Alamat Email"}
          name={"user_email"}
        />
        <GoButton type={"button"} label={"Mulai"} />
      </div>
    </>
  );
};

export default FormRegister;
