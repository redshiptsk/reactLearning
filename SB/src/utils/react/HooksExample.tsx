import React, { useState, useEffect } from 'react'

import { getValue } from '../../utils/react/pickFromSyntheticEvent';


export function MyHooks ({ title, id }: { title: string, id?: string }) {
  // useEffect(() => {
  //   console.log('cwm', title)
  //   // return () => { console.log('cwu') 
  // }, [title])
  // const [isMounted] = useIsMounted();

  return (
        <div style={{width: window.innerWidth}}>{title} {id}</div>
  )
  }
  export function useIsMounted() {
    const [isMounted, setIsMounted] = React.useState(false);
    
    useEffect(() => {
      setIsMounted(true)
    }, [])

    return [isMounted]
  }


export function Hooks() {
  const [isVisible, setIsVisible] = useState(false)
  const [title, setTitle] = useState('')

  return (

    <div>
      <button onClick={() => { setIsVisible(!isVisible) }}>Change me!</button>
      <input type="text" onChange={getValue(setTitle)} />
      {isVisible && <MyHooks title={title} id="11" />}
    </div>
  )
}