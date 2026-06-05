import { SignUpForm } from "@/components/ui/auth/sign-up/SignUpForm";

export default function Login() {
  return (
    <>
      <section id="login" className="">
        <div className="cssContainer flex flex-col gap-12 items-center ">
          <h1 className="">Register</h1>

          <div className="w-full flex flex-col max-w-130  bg-white rounded-(--field-radius) p-6 ">
            <SignUpForm />
          </div>
        </div>
      </section>
    </>
  );
}
