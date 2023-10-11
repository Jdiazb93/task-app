import Link from "next/link";

export default function NotFounded() {
  return (
    <section className="w-1/2 container mx-auto mt-5 bg-slate-800 p-5 rounded-xl flex justify-center text-center">
      <div className="w-10/12">
        <h3 className="font-bold text-3xl">Not Founded | 404</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          dolores obcaecati nam architecto excepturi odit explicabo aspernatur
          minima doloribus minus in, animi ratione natus dolor cupiditate
          corporis inventore nihil adipisci?
        </p>
        <Link href="/">
          <button className="mt-5 bg-blue-600 hover:bg-blue-700 p-3 rounded-md">Back to home</button>
        </Link>
      </div>
    </section>
  );
}
