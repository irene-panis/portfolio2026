import ExperienceList from './_components/ExperienceList';
import BlogList from './_components/BlogList';

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
        <div className="flex gap-4">
          <a
            href="https://github.com/irene-panis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-4 rounded-full hover:bg-white hover:text-background transition duration-200 ease-in-out"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/irene-panis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-4 rounded-full hover:bg-white hover:text-background transition duration-200 ease-in-out"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <ExperienceList />
      <BlogList />
    </div>
  );
}
