export default {
  github: 'https://github.com/askattest',
  titleSuffix: ' – Engineering Growth Framework',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Attest ∆</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Engineering Growth Framework
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Attests engineering growth framework" />
      <meta name="og:description" content="Attests engineering growth framework" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <> {new Date().getFullYear()} © Attest</>
}
