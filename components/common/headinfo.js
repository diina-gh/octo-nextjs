import React from 'react';
import Head from 'next/head'

export default function HeadInfo(props) {
        return (
          <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href='/favicon.ico' />
          </Head>
        );
}
