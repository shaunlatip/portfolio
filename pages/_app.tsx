import '../styles/destyle.css'
import '../styles/globals.css'
import '../styles/transition.css';
import Transition from '../components/Transition';
import NavbarLayout from '../components/NavbarLayout';

import type { AppProps } from 'next/app'

// pages/_app.js
import { Inter } from '@next/font/google'
import { Lora } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className} >
        <style jsx global>{`
      `}</style>
          <NavbarLayout>
            <Transition>
              <Component {...pageProps} />
            </Transition>
          </NavbarLayout>
    </main>
  )

}
