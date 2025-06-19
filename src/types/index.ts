export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  html_url: string;
}

export interface SearchState {
  loading: boolean;
  error: string | null;
  users: GithubUser[];
  selectedUser: GithubUser | null;
  repos: GithubRepo[];
}