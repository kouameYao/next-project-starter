import NextTopLoader from 'nextjs-toploader';
import React from 'react';

export default function AppTopLoader() {
  return (
    <NextTopLoader
      color="#000000"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #000000, 0 0 5px #000000"
      template={`<div class="bar" role="bar" style="background-color: #000000;"><div class="peg" style="box-shadow: 0 0 10px #000000, 0 0 5px #000000;"></div></div>
        <div class="spinner" role="spinner" style="color: #000000;"><div class="spinner-icon" style="border-top-color: #000000; border-left-color: #000000;"></div></div>`}
      zIndex={1600}
      showAtBottom={false}
    />
  );
}
