import React, { useEffect, useState } from 'react';
import styles from './text.css';
import classNames from 'classnames';

export enum EColor {
  black = 'black',
  white = 'white',
  orange = 'orange',
  green = 'green',
  greyF3 = 'greyF3',
  greyF4 = 'greyF4',
  greyF9 = 'greyF9',
  greyEC = 'greyEC',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface IListProps {
  As?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;  
  desktopSize?: TSizes;
  color?: EColor;
}


export function Text(props: IListProps) {
  const { As = 'span',
    tabletSize,
    desktopSize,
    mobileSize, 
    size, 
    color = EColor.black, 
    children } = props;

  const classes = classNames(
    styles[`s${size}`],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`m${tabletSize}`]]: tabletSize},
    {[styles[`m${desktopSize}`]]: desktopSize},
    styles[color]
  )

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
