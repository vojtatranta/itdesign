import React from 'react'


export default () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
    <meta description="itDesign.cz: Petr Hřích - komplexní správa webové prezentace" />
    <link href="./style.css" prefetch rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,800i,400&amp;subset=latin-ext" rel="stylesheet" />
    <script>
    WebFont.load({
      google: {
        families: ['Open Sans']
      }
    });
  </script>
      </head>
      <body>
        <div id="root"></div>
      </body>
      <script src="/bundle.js" />
    </html>
  )
}

