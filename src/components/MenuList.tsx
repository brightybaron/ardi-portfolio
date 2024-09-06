export default function MenuList() {
  return (
    <>
      <div className="mt-4 sm:mt-8">
        <p>Ardi Panda</p>
        <p>B. 1996 in Madiun. Based in Gresik, ID.</p>
        <br />
        <p>Freelance Fullstack Dev</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 mt-6 gap-y-2">
        <div className="flex flex-col">
          <a href="/about">&rarr; About Me</a>
          <a href="mailto:ardi.panda54@gmail.com">&rarr; Contact</a>
          <a href="/rss">&rarr; RSS</a>
        </div>
        <div className="flex flex-col">
          <a href="https://www.instagram.com/ardipanda54/" target="_blank">
            &rArr; Instagram
          </a>
          <a href="https://github.com/brightybaron" target="_blank">
            &rArr; Github
          </a>
          <a href="/contact" target="_blank">
            &rArr; Read CV
          </a>
        </div>
      </div>
      <div className="absolute sm:flex hidden justify-between bottom-12 w-full">
        <p>&copy; 2024</p>
      </div>
    </>
  );
}
