"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import KiddiesAccountForm from "@/app/components/kiddies-account-form";

const KiddiesAccountClientSide = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const hashFromUrl = searchParams.get("id");
  const phoneNumberFromStorage = Cookies.get("phoneNumber");
  const hashFromStorage = Cookies.get("phoneNumberHash");

  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  useEffect(() => {
    if (!hashFromStorage || !hashFromUrl) {
      router.push("/open-account");
      return;
    }

    const isValid = hashFromUrl === hashFromStorage;

    if (isValid) {
      setIsPhoneNumberValid(true);
    } else {
      router.push("/open-account");
    }
  }, [hashFromUrl, hashFromStorage, router]);

  if (!isPhoneNumberValid) {
    return <p className="pt-40 text-center pb-20">Loading...</p>;
  }

  return <KiddiesAccountForm phoneNumber={phoneNumberFromStorage ?? ""} />;
};

export default KiddiesAccountClientSide;
