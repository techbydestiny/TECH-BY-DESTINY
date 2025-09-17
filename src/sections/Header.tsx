export default function Header() {

     const scrollToSection = (id:string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    };
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop:blur">
        <a href="/" className="nav-item">Home</a>
        <a onClick={() => scrollToSection('Project')}className="nav-item">Projects</a>
        <a onClick={() => scrollToSection("About")}className="nav-item">About</a>
        <a onClick={() => scrollToSection("Contact")} className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contacts</a>
      </nav>
    </div>
  );
};
