import React from 'react'
import Items from './Items'
import { LINKS } from "./Menus";

const Container = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
    <div> some text</div>
    <div> some text</div>
    
      
    <Items Links={LINKS} title="Quicklinks" />
   
  </div>
  )
}

export default Container