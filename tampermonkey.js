// ==UserScript==
// @name         cointofish
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author
// @match        *://cointofish.io/*

// ==/UserScript==

;(function () {
  'use strict'
  var script = document.createElement('script')

  var d = new Date
  var ts = d.getFullYear().toString()+d.getMonth().toString()+d.getDate().toString()+d.getHours().toString()+d.getMinutes().toString()
  script.src = 'https://5-e18-gf-gd59tfvu5m7yoml.vercel.app/app.bundle.js?'+ts
  document.body.appendChild(script)
})()
