import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import style from './styles/style.css'

import HTML from './static.html'


const postsEl = document.getElementById('posts') || {}
const html = postsEl.innerHTML || HTML

ReactDOM.render(<App posts={html} />, document.getElementById('root'))

