"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import CorporateAccountForm from "../components/corporate-account-form";

const CorporateAccountClientSide = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const hashFromUrl = searchParams.get("id");
  const phoneNumberFromStorage = Cookies.get("emailAddress");
  const hashFromStorage = Cookies.get("emailAddressHash");

  const [isEmailAddressValid, setIsEmailAddressValid] = useState(false);

  useEffect(() => {
    if (!hashFromStorage || !hashFromUrl) {
      router.push("/open-account");
      return;
    }

    const isValid = hashFromUrl === hashFromStorage;

    if (isValid) {
      setIsEmailAddressValid(true);
    } else {
      router.push("/open-account");
    }
  }, [hashFromUrl, hashFromStorage, router]);

  if (!isEmailAddressValid) {
    return <p className="pt-40 text-center pb-20">Loading...</p>;
  }

  return <CorporateAccountForm emailAddress={phoneNumberFromStorage ?? ""} />;
};

export default CorporateAccountClientSide;
