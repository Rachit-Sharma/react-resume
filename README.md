# React Resume

This repository contains a Single Page Web Application using TypeScript + React, which produces a resume for printing. It can be used to host multiple resumes.

## How to Use

Create a json file with your name in a folder named `public` in the root of the project directory. The file should conform to the model described in `src/models/Resume/index.ts`.

### Images

Place the image files in public folder, and use `/<image_name>.<extension>` as the paths to the image files in the json.

Run `npm run dev`, and visit [http://localhost:5173/](http://localhost:5173/) appended with the name of the json file without the `.json` suffix.
