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

## Deployment

### AWS S3 Deployment via CDK

#### CDK Setup
The `pro04-cdk-stack.ts` file in this repository defines the S3 deployment stack. This configuration includes:
- **websiteIndexDocument**: Specifies the main file to load for the S3 website.
- **publicReadAccess**: Grants public read access to the bucket.
- **blockPublicAccess**: Controls public access settings to secure the bucket.

#### BucketDeployment
Files from the `dist` folder are uploaded to the S3 bucket during deployment. Upon a successful deployment, the bucket’s website URL will be output.

#### Build and Deploy Commands

1. **Build the Project**:
   ```
   npm run build
   ```

Deploy Using AWS CDK:
```
cdk deploy
```

#### Automated Deployment with GitHub Actions
GitHub Actions is configured to automatically deploy the frontend on commits to the main branch.
Store AWS credentials (Access Key ID and Secret Access Key) as GitHub Secrets under AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.
Ensure your GitHub Actions workflow specifies npm run build for the build command and syncs the dist folder to the S3 bucket.





