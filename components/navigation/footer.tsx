export function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-muted-foreground">
      <p>Adapté du <a className="link-underline" href="https://github.com/bchiang7/v4" target="_blank" rel="noopener noreferrer"> Portfolio de Brittany Chiang</a></p>

      <div className="mt-2 flex justify-center space-x-4 md:hidden">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}