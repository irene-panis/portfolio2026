import ExperienceList from './_components/ExperienceList';
import BlogList from './_components/BlogList';
import MovieList from './_components/MovieList';
import HomeTabs from './_components/HomeTabs';
import BookList from './_components/BookList';
import MusicList from './_components/MusicList';

const linkClassName =
  'underline-offset-4 underline hover:bg-white hover:text-background transition duration-200 ease-in-out';

export default function Home() {
  return (
    <div className="flex flex-col my-auto gap-12">
      <h1 className="text-5xl font-bold">Hi, I&apos;m Irene.</h1>
      <div className="flex flex-col gap-4 text-md">
        <p>I&apos;m a full-stack software engineer with a love for building cool things - both for myself and for other people.</p>
        <p>I build web and mobile applications using TypeScript, React, React Native, Node.js, and PostgreSQL. I&apos;m always open to learning new technologies and looking for better ways to build.</p>
        <p>When I&apos;m not writing code, I&apos;m typically gaming,{' '}
          catching another concert, or trying new foods. Things I&apos;m big on:{' '}
          film photography, true crime documentaries, and 100 Thieves VALORANT.
        </p>
        <p>Let&apos;s chat sometime :)</p>
        <p>
          Find me on{' '}
          <a
            href="https://github.com/irene-panis"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            GitHub
          </a>{' '}
          and{' '}
          <a
            href="https://linkedin.com/in/irene-panis"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <HomeTabs
          projects={
            <div className="flex flex-col gap-12">
              <ExperienceList />
              <BlogList />
            </div>
          }
          shelf={
            <>
              <p className="text-muted italic text-sm">(a quick look at what movies, books, & music i&apos;m checking out right now)</p>
              <MovieList />
              <BookList />
              <MusicList />
            </>
          }
        />
      </div>
    </div>
  );
}
