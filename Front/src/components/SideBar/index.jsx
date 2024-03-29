import { useEffect, useState } from "react";
import { getUserInfoFromToken } from "../../localStorage";

const SideBar = () => {
  const [userRole, setUserRole] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userInfo = await getUserInfoFromToken();
        if (userInfo && userInfo.id) {
          const response = await fetch(
            `http://localhost:8888/api/users/${userInfo.id}`
          );
          const userData = await response.json();
          setUserRole(userData.roles[0]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      {error && <p>Error: {error}</p>}
      <div className="flex">
        <aside className="w-72 h-screen left-0 border-r border-gray-300 bg-white py-8 sidebar">
          <nav className="flex flex-col space-y-2 px-4">
            {(userRole === "ROLE_PRESTATAIRE" && (
              <>
                <a
                  href="/prestataire"
                  className="flex items-center gap-1 rounded-md border border-gray-300 bg-[#d0e6f4]"
                >
                  <span className="flex h-10 w-10 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      // eslint-disable-next-line react/no-unknown-property
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm sidebar-label">Statistiques </span>
                </a>
                <a
                  href="/prestataire/salarie/list-salaries"
                  className="flex items-center gap-1 rounded-md border border-gray-300 bg-[#d0e6f4]"
                >
                  <span className="flex h-10 w-10 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm sidebar-label">Salaries</span>
                </a>
                <a
                  href="/prestataire/salarie/planning"
                  className="flex items-center gap-1 rounded-md border border-gray-300 bg-[#d0e6f4]"
                >
                  <span className="flex h-10 w-10 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm sidebar-label">Planning</span>
                </a>

                <a
                  href="/prestataire/salarie/dayoff"
                  className="flex items-center gap-1 rounded-md border border-gray-300 bg-[#d0e6f4]"
                >
                  <span className="flex h-10 w-10 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                      />
                    </svg>
                  </span>
                  <span className="text-sm sidebar-label">Conges</span>
                </a>
                <a
                  href="/prestataire/etablissement"
                  className="flex items-center gap-1 rounded-md border border-gray-300 bg-[#d0e6f4] "
                >
                  <span className="flex h-10 w-10 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm sidebar-label">Etablissements</span>
                </a>
              </>
            )) ||
              (userRole === "ROLE_ADMIN" && (
                <>
                  <a
                    href="/admin/dashboard"
                    className="flex items-center gap-1 rounded-md border border-gray-300 bg-[#d0e6f4]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <span className="text-sm sidebar-label">Utilisateurs</span>
                  </a>
                  <a
                    href="/admin"
                    className="flex items-center gap-1 rounded-md border border-gray-300  bg-[#d0e6f4] "
                  >
                    <span className="flex h-10 w-10 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                    </span>
                    <span className="text-sm sidebar-label">Statistiques</span>
                  </a>

                  <div className="w-full py-3" style={{ height: "1px" }}>
                    <div
                      className="w-full bg-gray-300"
                      style={{ height: "1px" }}
                    ></div>
                  </div>
                </>
              ))}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
