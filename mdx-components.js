// https://nextjs.org/docs/app/guides/mdx

import React from 'react';

import Link from 'next/link'

const components = {
    h2: props => (
        <h2 className="font-testing" {...props}/>
    ),
}

export function useMDXComponents() {
  return components;
}