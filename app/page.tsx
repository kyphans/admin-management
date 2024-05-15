import ButtonAuth from "@/components/login-btn";

export default function Home() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <ButtonAuth route='/login'>Login</ButtonAuth>
    </div>
  );
}
