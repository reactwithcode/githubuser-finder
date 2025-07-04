import React from "react";
import type { GithubUser } from "../types";

interface Props {
  users: GithubUser[];
  onSelectUser: (user: GithubUser) => void;
  isDropdownOpen: (user: GithubUser) => boolean;
}

const UserList: React.FC<Props> = ({
  users,
  onSelectUser,
  isDropdownOpen,
}) => (
  <ul className="mb-4">
    {users.map((user) => (
      <li key={user.id} className="mb-2">
        <button
          className={`w-full flex justify-between items-center px-4 py-2 border rounded transition bg-gray-100 border-gray-300`}
          style={{ cursor: "pointer" }}
          onClick={() => onSelectUser(user)}
        >
          <span className="flex items-center">
            <span className={`${isDropdownOpen(user) ? "font-bold" : ""}`}>{user.login}</span>
          </span>
          <span>
            {isDropdownOpen(user) ? (
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </span>
        </button>
        {isDropdownOpen(user) && (
          <div className="mt-2">
            <button
              className={`w-full flex justify-between items-center px-4 py-2 border rounded transition bg-gray-50 border-gray-200`}
              onClick={() => onSelectUser(user)}
            >
              <span className="flex items-center">
                <img
                  src={user.avatar_url}
                  alt={`${user.login} avatar`}
                  className="w-6 h-6 rounded-full mr-3 border border-gray-200"
                />
                <span className="font-medium">{user.name}</span>
              </span>
            </button>
          </div>
        )}
      </li>
    ))}
  </ul>
);

export default UserList;