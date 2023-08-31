import Link from "next/link";

export const BrandName = () => {
  return (
    <Link className="navbar-brand" href={"/"}>
      <span className="branding" id="sure">
        <span className="animated-content branding">Sure</span>
      </span>
      <span className="branding" id="smart">
        <span className="animated-content branding">Smart</span>
      </span>
    </Link>
  );
};
