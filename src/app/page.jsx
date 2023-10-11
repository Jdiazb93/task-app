export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <section className="container mx-auto mt-5">
      <h3 className="font-bold text-2xl">
        Project generated with Next JS and Tailwind
      </h3>
      <p className="mt-3 text-base">
        This project was maded on NextJS and Tailwind CSS, using prisma to
        generate the connection to the data base and vercel to deploy. If you
        want to see this code, you can go to{" "}
        <a
          className="text-blue-700 underline text-lg"
          href="https://github.com/Jdiazb93/task-app"
          target="_blank"
        >
          Github
        </a>
      </p>
    </section>
  );
}
