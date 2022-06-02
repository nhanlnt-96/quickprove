# Get started

### Download and install NodeJs (if not)

`````bath
https://nodejs.org/en/
`````

### Add node_modules for project

- Using npm

`````bath
npm install
`````

or

`````bath
npm i
`````

- Using yarn

`````bath
yarn
`````

### Run the CLI tool to scan your template files for classes and build your CSS.

- Using npx

`````bath
npx tailwindcss -i ./src/styles/styles.css -o ./dist/styles.css --watch
`````

- Using yarn

`````bath
yarn tailwindcss -i ./src/styles/styles.css -o ./dist/styles.css --watch
`````

# Prepare to deploy site

### Minify your CSS

- Using npx

`````bath
npx tailwindcss -o build.css --minify
`````

- Using yarn

`````bath
yarn tailwindcss -o build.css --minify
`````

### Deploy

- Using npm

`````bath
npm deploy
`````

- Using yarn

`````bath
yarn deploy
`````