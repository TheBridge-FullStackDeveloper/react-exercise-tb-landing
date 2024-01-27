import React, { useState } from "react";

const dropdownMenus = [
  {
    name: "courses",
    label: "Cursos",
    links: [
      { href: "/fullstack", label: "FullStack Web Developer" },
      { href: "/data", label: "Data Science" },
    ],
  },
  {
    name: "studyLocations",
    label: "Dónde estudiar",
    links: [
      { href: "/madrid", label: "Madrid" },
      { href: "/vitoria", label: "Vitoria" },
    ],
  },
  {
    name: "financingScholarships",
    label: "Financiación y becas",
    links: [
      { href: "/beca", label: "Becas" },
      { href: "/financiacion", label: "Financiación" },
    ],
  },
  {
    name: "companiesInstitutions",
    label: "Empresas e instituciones",
    links: [
      { href: "/telefonica", label: "Telefónica" },
      { href: "/deloitte", label: "Deloitte" },
    ],
  },
  {
    name: "aboutUs",
    label: "Sobre nosotros",
    links: [
      { href: "/quienesSomos", label: "Quienes somos" },
      { href: "/contacto", label: "Contacta con nosotros" },
    ],
  },
];
function Navbar() {
  const [openDropdown, setOpenDropdown] = useState();

  const showDropdown = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const hideDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <header>
      <nav className="navbar" id="navbar">
        <ul className="navbarList">
          <li className="logo">
            <img
              src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/607eeb4b0517b6659206c10f_thebridgelogo.svg"
              alt="The Bridge logo"
              className="logoImg"
            />
          </li>
          {dropdownMenus.map((menu) => (
            <li
              className="navMenu"
              key={menu.name}
              onMouseOver={() => showDropdown(menu.name)}
              onMouseLeave={hideDropdown}
            >
              {menu.label}
              {openDropdown === menu.name && (
                <ul>
                  {menu.links.map((link) => (
                    <li className="dropdownItems" key={link.href}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
