"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ViewTransitions() {
  const router = useRouter();

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!("startViewTransition" in document)) return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.getAttribute("target") && anchor.getAttribute("target") !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      (document as Document & { startViewTransition?: (cb: () => void) => void }).startViewTransition?.(() => {
        router.push(url.pathname + url.search + url.hash);
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return null;
}
