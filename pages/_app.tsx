import '../styles/destyle.css'
import '../styles/globals.css'
import '../styles/transition.css';
import Transition from '../components/Transition';
import NavbarLayout from '../components/NavbarLayout';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
import { Analytics } from '@vercel/analytics/react';

import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

import type { AppProps } from 'next/app'

// pages/_app.js
import { Inter } from '@next/font/google'
import { Lora } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })



export default function App({ Component, pageProps }: AppProps) {

  const theme = extendTheme({
    colors: {
      lime: {
        50: '#f2ffde',
       100: '#defcb2',
       200: '#caf884',
       300: '#b5f554',
       400: '#a1f226',
       500: '#88d90d',
       600: '#69a905',
       700: '#4a7801',
       800: '#2b4800',
       900: '#0b1900',
      },
      orange: {
        50: '#fef8f6',
       100: '#fceae3',
       200: '#fadacf',
       300: '#f8c9b8',
       400: '#f5b59e',
       500: '#f29e80',
       600: '#e48867',
       700: '#c47558',
       800: '#9a5c45',
       900: '#5b3629',
      },
    },
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
    },
  })

  useEffect(() => {
    hotjar.initialize(3399316, 6)
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <main className={inter.className} >
          <style jsx global>{`
        `}</style>
            <NavbarLayout>
              <Transition>
                <Component {...pageProps} />
                <Analytics />
              </Transition>
            </NavbarLayout>
      </main>
    </ChakraProvider>
  )

}
