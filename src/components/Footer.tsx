export default function Footer() {
  return (
    <div className="px-4 flex justify-center max-w-xl w-full mx-auto bottom-0 min-h-0 overflow-hidden">
      <h5 className="text-xs text-gray-500">
        I've built this website with
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="text-violet-500"
        >
          {" "}
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          className="text-violet-500"
        >
          {" "}
          Typescript
        </a>
        . Deployed on
        <a
          href="https://vercel.com/"
          target="_blank"
          className="text-violet-500"
        >
          {" "}
          Vercel
        </a>
        . View
        <a
          href="https://github.com/maridivi/new-personal-portfolio"
          target="_blank"
          className="text-violet-500"
        >
          {" "}
          source
        </a>
        .
      </h5>
    </div>
  );
}
