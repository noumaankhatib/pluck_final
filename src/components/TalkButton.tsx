import Link from "next/link";

/** Primary call to action. Always routes to the homepage contact section, from any page. */
export default function TalkButton({ light = false, label = "Talk to us" }: { light?: boolean; label?: string }) {
  const wide = label !== "Talk to us";
  return (
    <Link href="/#contact" className={`btn${light ? " btn--light" : ""}${wide ? " btn--wide" : ""}`}>
      {label}
    </Link>
  );
}
