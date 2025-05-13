export const metadata = {
  title: "404 - Not Found",
  description: "Page not found",
};

import Container from "@/components/reusable/snippets/container";
import CustomButton from "@/components/reusable/snippets/custom-button";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container variant="section-header">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <CustomButton label="Go back home" link="/" />
          <Link href="/contact">
            <div className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
}