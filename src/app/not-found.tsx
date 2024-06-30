import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center font-bold ">
      <h1 className="text-lg">Oops.. Page Not Founds!</h1>
      <Link href="/en">
        Return <span className="underline text-blue-800">Home</span>
      </Link>
    </div>
  );
}
