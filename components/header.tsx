import CardNav from "./CardNav";
import logo from "../public/logo3.svg";

export function Header() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "#about", ariaLabel: "About Company" },
        { label: "Services", href: "#services", ariaLabel: "Services" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Featured",
          href: "#projects",
          ariaLabel: "Featured Projects",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          href: "mailto:connect@synark.42com",
          ariaLabel: "Email us",
        },
        {
          label: "Twitter",
          href: "https://x.com/synark42",
          ariaLabel: "Twitter",
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/synark42/nkedin",
          ariaLabel: "Instagram",
        },
        {
          label: "LinkedIn",
          href: "https://www.instagram.com/synark42/nkedin",
          ariaLabel: "LinkedIn",
        },
      ],
    },
  ];

  return (
    <CardNav
      logo={logo.src}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}
