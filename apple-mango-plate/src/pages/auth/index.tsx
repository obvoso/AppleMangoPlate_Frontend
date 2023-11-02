"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import icons from "@/assets/icons/icon";

const Auth = () => {
  const KakaoIcon = icons.kakaoIcons;
  const router = useRouter();
  // console.log(`${process.env.NEXT_PUBLIC_AUTH_URL}/jwt-login/login`);
  // console.log(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!);
  // console.log(process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result?.error) {
        alert(result.error);
      } else {
        router.push("/");
      }
    },
    [email, password, router]
  );

  return (
    <div className="bg-primary-black min-h-screen flex justify-center items-center">
      <div className="bg-[white] w-96 h-[500px] rounded-3xl flex flex-col justify-center items-center p-5">
        <h2 className="text-[black] text-2xl mb-6">Login</h2>
        <form
          onSubmit={onSubmit}
          className="bg-primary-black py-2 flex flex-col gap-3 w-2/3 rounded-3xl mb-5"
        >
          <div className="flex items-center gap-3">
            <label className="block w-4 text-sm ml-2" htmlFor="email">
              ID
            </label>
            <input
              className="text-[black] py-[2px] pl-2 w-full mr-1 rounded-3xl bg-primary-yellow"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="block w-4 text-sm ml-2" htmlFor="password">
              PW
            </label>
            <input
              className="text-[black] py-[2px] pl-2 w-full mr-1 rounded-3xl bg-primary-yellow"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>

        <button
          className="bg-primary-black py-2 flex justify-center w-2/3 rounded-3xl my-5"
          type="submit"
        >
          로그인
        </button>
        <div className="w-2/3 border-[1px] border-[#787822]"></div>

        <div className="flex flex-col mt-4 gap-y-3 w-1/2">
          <button
            className="flex items-center justify-center bg-[#f7f72f] text-[black] w-full h-10 rounded-3xl"
            onClick={() =>
              signIn("kakao", { redirect: true, callbackUrl: "/" })
            }
          >
            <KakaoIcon size={24} color="black" />
            <span className="ml-2">kakaoTalk</span>
          </button>
          <Link href="/auth/customlogin">
            <button className="bg-primary-black w-full h-10 rounded-3xl">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
