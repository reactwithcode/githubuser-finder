# GitHub User Finder

A modern React app to search for GitHub users and view their repositories.  
Styled with TailwindCSS, powered by Redux Toolkit Query, and built with TypeScript.

![screenshot](./screenshot.png)

## Features

- 🔍 **Search GitHub users** by username
- 🧑 **Dropdown list** for up to 5 recent users
- 📦 **View repositories** for each user, including stars and descriptions
- ⚡ **Instant feedback** for loading and errors
- 🎨 **Responsive, clean UI** with TailwindCSS
- 🧹 **Reset and clear** search field with a single click

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/githubuser-finder.git
   cd githubuser-finder
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Usage

- Enter a GitHub username and click **Search**.
- Up to 5 recent users are shown in a dropdown list.
- Click a user to view their repositories.
- Click the **X** icon to clear the search field.
- Click **Reset** to clear all results and start over.

## Running Tests

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and integration tests.

To run all tests:

```sh
npm run test
# or
yarn test
```

- Test files are located alongside source files and use the `.spec.tsx` or `.spec.ts` extension.
- The test environment is set up in [`jest.setup.ts`](jest.setup.ts).

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Project Structure

```
src/
  components/      # Reusable UI components
  redux/           # Redux slices and API logic
  types.ts         # TypeScript interfaces
  App.tsx          # Main app component
public/
  favicon.svg      # Favicon
index.html         # HTML entry point
```

## Customization

- **Favicon:** Replace `public/favicon.svg` with your own icon.
- **Styling:** Edit Tailwind classes in components for custom look.

## License

MIT

---

Made with ❤️ using React + Vite + Redux Toolkit
