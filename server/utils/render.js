import project from "../../config/project.config";

export default (html, preloadedState) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>React Redux Starter Kit</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="styles.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${ html }</div>
        <script>
          window.__PRELOADED_STATE__ = ${ JSON.stringify(preloadedState) }
        </script>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet">
        <script type="text/javascript" src="/vendor.js"></script><script type="text/javascript" src="/app.js"></script></body>
      </body>
    </html>
  `
}
