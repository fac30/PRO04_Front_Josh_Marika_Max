# Hill Front Records

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Development Workflow](#development-workflow)



## Project Overview



## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 20 or higher recommended)
- [Git](https://git-scm.com/)

### Steps to Install
1. **Clone the repository**

   ```
   git clone https://github.com/fac30/PRO04_Front_Josh_Marika_Max.git
   cd PRO04_Front_Josh_Marika_Max
   ```

2. **Install dependencies**

   ```
   npm install
   ```

This will install all the required dependencies, including React, TypeScript, Vite, ESLint, Prettier, and others.

## Usage

### Running the Development Server

To start the development server, use the following command:

```
npm run dev
```

This will start a local server using Vite, and you can view the project in your browser at `http://localhost:3000`.

### Building for Production

To create a production build, run:

```
npm run build
```

The build will be located in the `dist` directory.


## Dependencies
- React
- TypeScript
- Vite
- Node.js & Express
- ESLint
- Prettier
- Maintains consistent commit messages using Git Conventional Commit.

## Development Workflow

### Linting and Formatting
- **ESLint** is used to enforce consistent code style. Run linting with:
  ```
  npm run lint
  ```
- **Prettier** is used for code formatting. Code will be automatically formatted on save (if configured) or can be manually formatted with:
  ```
  npm run format
  ```

### Commit Guidelines
The project uses **Git Conventional Commit** to maintain a clean and readable commit history. Please use the following structure for your commits:

```
type(scope): subject
```
Example:

```
feat(header): add navigation bar
```







