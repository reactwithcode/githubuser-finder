import React, { useState, useEffect } from "react";
import type { GithubUser, GithubRepo } from "./types";
import { useGetReposQuery, useGetUserQuery } from './redux/githubUser/githubUserApiSlice'
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import RepoList from "./components/RepoList";

const MAX_USERS = 5;

const App: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [searched, setSearched] = useState(false);
  const [selectedUser, setSelectedUser] = useState<GithubUser | null>(null);
  const [userResults, setUserResults] = useState<GithubUser[]>([]);

  const { data: user, error: userError, isLoading: isLoadingUser, isFetching: isFetchingUser } = useGetUserQuery(username, {
    skip: !username || !searched,
  });
  const { data: repos, error: reposError, isLoading: isLoadingRepos, isFetching: isFetchingRepos } = useGetReposQuery(selectedUser?.login ?? "", {
    skip: !selectedUser,
  });

  const loading = isLoadingUser || isFetchingUser || isLoadingRepos || isFetchingRepos;
  const error = userError || reposError;

  // Add user to results if not already present and limit to MAX_USERS
  useEffect(() => {
    if (user && searched) {
      setUserResults(prev => {
        const exists = prev.some(u => u.login === user.login);
        if (exists) return prev;
        const updated = [user as GithubUser, ...prev].slice(0, MAX_USERS);
        return updated;
      });
      setSearched(false);
    }
  }, [user, searched]);

  const handleSearch = (input: string) => {
    setUsername(""); // Reset the search field
    setSearched(true);
    setSelectedUser(null);
    if (input.trim()) setUsername(input.trim());
  };

  const handleSelectUser = (user: GithubUser) => {
    setSelectedUser(user);
  };

  const handleReset = () => {
    setUsername("");
    setSearched(false);
    setSelectedUser(null);
    setUserResults([]);
  };

  // Only the selected user dropdown is open
  const isDropdownOpen = (user: GithubUser) =>
    !!selectedUser && selectedUser.login === user.login;

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white rounded shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">GitHub Repositories Explorer</h1>
        <SearchBar
          loading={loading}
          onSearch={handleSearch}
          value={username}
          onChange={setUsername}
        />
        <button
          className="w-full bg-gray-300 text-gray-700 py-2 rounded mb-4 hover:bg-gray-400 transition"
          onClick={handleReset}
          disabled={loading}
        >
          Reset
        </button>
        {error && (
          <div className="text-red-500 mt-4">
            {typeof error === "string"
              ? error
              : "status" in error
                ? `Error: ${error.status}`
                : "An error occurred."}
          </div>
        )}
        {loading && (
          <div className="text-gray-500 mt-4">Loading...</div>
        )}
        {!loading && userResults.length > 0 && (
          <div>
            <div className="text-gray-700 mb-2 flex items-center">
              Showing users for <span className="font-semibold mx-1">"{selectedUser?.login || userResults[0].login}"</span>
            </div>
            <UserList
              users={userResults}
              onSelectUser={handleSelectUser}
              isDropdownOpen={isDropdownOpen}
            />
          </div>
        )}
        {selectedUser && repos && (
          <RepoList repos={repos as GithubRepo[]} />
        )}
      </div>
    </div>
  );
};

export default App;
