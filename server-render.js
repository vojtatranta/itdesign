import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StyleSheetServer } from 'aphrodite'
import App from './src/app'


export default (locals) => {
  const result = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToStaticMarkup(<App/>)
  })

  return locals.HTML
    .replace('<!--APP-->', result.html)
    .replace('<!--CSS-->', result.css.content)
}
