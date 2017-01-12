import project from "../../config/project.config";

export default (html, preloadedState) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>React Redux Starter Kit</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="build/styles.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${ html }</div>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
      </body>
    </html>
  `
}
