import React from 'react'
import './home.css'
import { lang } from '../localization/index'

export default function BackgroundStars() {
  return (
    <div className={lang === 'fa' ? 'flex justify-end' : ''}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  )
}
