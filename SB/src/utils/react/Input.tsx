import React from 'react'
import { getValue } from './pickFromSyntheticEvent'
import { preventDefault } from './preventDefault'
import { stopPropagation } from './stopPropagation'
import { type InputProps } from './InputProps'

export function Input ({ value, onChange }: InputProps) {
  return (
        <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
  )
}
