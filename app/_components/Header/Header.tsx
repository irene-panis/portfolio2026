const Header = () => {
  return (
    <header className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold lowercase">Irene Panis</h1>
        <h2 className="text-xl font-bold lowercase text-muted">// Software Engineer</h2>
      </div>
      <span className="lowercase font-medium tracking-wide">
        <a
          href=""
          className="underline underline-offset-2 transition ease-in-out hover:bg-foreground hover:text-background"
        >
          GitHub
        </a>
        .{' '}
        <a
          href=""
          className="underline underline-offset-2 transition ease-in-out hover:bg-foreground hover:text-background"
        >
          LinkedIn
        </a>
        .
      </span>

    </header>
  )
}

export default Header;