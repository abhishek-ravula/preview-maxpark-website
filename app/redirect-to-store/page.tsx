"use client";

import { useEffect } from "react";

export default function RedirectToStorePage() {
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes("android");
    const isIOS = /iphone|ipad|ipod/.test(userAgent);

    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.maxparkai.customer";
    } else if (isIOS) {
      window.location.href = "https://apps.apple.com/app/id6740797639";
    } else {
      window.location.href = "https://maxpark.ai";
    }
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-lg font-semibold">Redirecting...</h1>
      <p className="text-sm text-gray-500">Taking you to the app store...</p>
    </div>
  );
}
