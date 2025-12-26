// https://nextjs.org/docs/app/guides/mdx

import React from 'react';

import Image from 'next/image';

const components = {
  img: (props) => (
    <Image
      width={500}
      height={500}
      style={{ width: '100%', height: 'auto' }}
      {...(props)}
    />
  ),
}

export function useMDXComponents() {
  return components;
}