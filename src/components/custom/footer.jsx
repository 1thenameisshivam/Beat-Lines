import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-white py-8 overflow-hidden">
      <div className="container relative z-10">
        <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
          Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by{" "}
          <a
            href="https://www.linkedin.com/in/shivamkumar8987/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            Shivam Kumar
          </a>
        </div>
      </div>
    </footer>
  );
}
