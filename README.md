# SAOA - South Asia Open Archives Website

This repository contains the source code for the South Asia Open Archives (SAOA) website, a static site built with [Eleventy](https://www.11ty.dev/) and styled with [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/installation) package manager

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/clirdlf/southasiaoa.org.git
    cd saoa
    ```

2.  **Install dependencies:**
    Using pnpm, install the project dependencies as defined in `pnpm-lock.yaml`:
    ```sh
    pnpm install --frozen-lockfile
    ```

## Development

To start the local development server with live reloading:

```sh
pnpm start
```

This command concurrently runs Eleventy in serve mode and PostCSS to watch for style changes. The site will be available at `http://localhost:8080`.

## Building

To build a production-ready version of the site:

```sh
pnpm build
```

This command first cleans the output directory (`_site/`) and then builds the Eleventy site and processes the CSS for production. The final static files will be located in the `_site` directory.

## Quality Checks & Testing

This project uses several tools to maintain code quality and test for issues. These are run automatically in CI via GitHub Actions.

### Linting

To check for issues in JavaScript, CSS, and HTML:

```sh
pnpm lint
```

This command runs ESLint for JavaScript, Stylelint for CSS, and html-validate for the templates.

### Formatting

This project uses Prettier for consistent code formatting.

To check if all files are formatted correctly:

```sh
pnpm format:check
```

To automatically format all files:

```sh
pnpm format
```

### Unit & Accessibility Tests

The project uses Jest for unit and accessibility testing. To run the test suite:

```sh
pnpm test
```

## Deployment

The site is automatically deployed via GitHub Actions. Pushes and pull requests to the `main` and `dev` branches will trigger the CI workflow defined in `.github/workflows/ci.yml`, which runs all quality checks and a production build.
