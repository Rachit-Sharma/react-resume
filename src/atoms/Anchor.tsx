import { AnchorHTMLAttributes } from "react";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  email?: boolean;
}

const Anchor = ({ children, email, href, ...htmlAnchorProps }: AnchorProps) => {
  return (
    <a {...htmlAnchorProps} href={email ? "mailto:" + href : href}>
      {children || href}
    </a>
  );
};

export default Anchor;
