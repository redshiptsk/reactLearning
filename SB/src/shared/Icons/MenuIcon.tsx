import * as React from 'react';

export function MenuIcon() {
    return(
        <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>background</title>
              <rect fill="none" id="canvas_background" height="42" width="12" y="-1" x="-1" />
              <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%" />
              </g>
            </g>
            <g>
              <circle cx="2.5" cy="2.5" r="2.5" fill='#D9D9D9' />
              <circle cx="2.5" cy="10" r="2.5" fill='#D9D9D9' />
              <circle cx="2.5" cy="17.5" r="2.5" fill='#D9D9D9' />
            </g>
          </svg>
    )
}