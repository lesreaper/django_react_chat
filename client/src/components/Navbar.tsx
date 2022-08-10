import Logo from "../images/logo.svg";

export const NavBar = () => {
  return (
    <div className="relative bg-white">
      <div className="max-w">
        <div className="flex flex-row justify-between space-x-auto px-4 items-center border-b-2 border-gray-100 ">
          <div className="lg:my-auto py-6 lg:py-0">
            <a href="https://cased.com">
              <img className="h-8 w-auto sm:h-10" src={Logo} alt="Logo" />
            </a>
          </div>

          <nav className="hidden lg:flex lg:align-left lg:space-x-10 lg:mt-10 lg:pl-10">
            <a
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {" "}
              Applications{" "}
            </a>
            <a
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {" "}
              Cluster Management{" "}
            </a>
            <a
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {" "}
              Snapshots{" "}
            </a>
            <span className="border-b-4 pb-5 border-indigo-800"> Chat </span>
          </nav>

          <div className="hidden lg:flex lg:flex-row lg:mt-2">
            <button className="border border-blue-500 rounded-lg mx-auto">
              <a
                href="/home"
                className="px-4 py-2 bg-transparent text-blue-500"
              >
                {" "}
                Add a new organization{" "}
              </a>
            </button>
            <p className="text-center text-base font-medium text-gray-500 ml-4">
              <a href="/home" className="text-indigo-600 hover:text-indigo-800">
                {" "}
                Sign in{" "}
              </a>
            </p>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
