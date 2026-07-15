// "use client";

// import React, { Suspense, useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import CorporateAccountForm from "@/app/components/corporate-account-form";
// import Cookies from "js-cookie";

// const PageContent = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const hashFromUrl = searchParams.get("id");

//   const hashFromStorage = Cookies.get("emailAddressHash");
//   const emailAddressFromStorage = Cookies.get("emailAddress");

//   const [isEmailAddressValid, setIsEmailAddressValid] = useState(false);

//   useEffect(() => {
//     if (!hashFromStorage || !hashFromUrl) {
//       router.push("/open-account");
//       return;
//     }

//     const isValid = hashFromUrl === hashFromStorage;

//     if (isValid) {
//       setIsEmailAddressValid(true);
//     } else {
//       router.push("/open-account");
//     }
//   }, [hashFromUrl, hashFromStorage, router]);

//   if (!isEmailAddressValid) {
//     return <p className="pt-40 text-center pb-20">Loading...</p>;
//   }

//   return <CorporateAccountForm emailAddress={emailAddressFromStorage ?? ""} />;
// };

// const Page = () => {
//   return (
//     <Suspense fallback={<p className="pt-40 text-center pb-20">Loading...</p>}>
//       <PageContent />
//     </Suspense>
//   );
// };

// export default Page;

export const dynamic = "force-dynamic";
import React from "react";
import CorporateAccountClientSide from "@/app/sections/corporates-account-client-side";

const page = () => {
  return (
    <div>
      <CorporateAccountClientSide />
    </div>
  );
};

export default page;
