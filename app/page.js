'use client'; 
import Image from 'next/image'
import styles from './page.module.css'
import Field from './modules/field/field'
import { useState } from 'react'


export default function Home() {
  const [isWhiteTurn, setIsWhiteTurn] = useState(true);
  const color = isWhiteTurn ? 'White' : 'Black';
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          It's turn 
          <code className={styles.code}> {isWhiteTurn ? 'White' : 'Black'}</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <Field isWhiteTurn={isWhiteTurn} setIsWhiteTurn={setIsWhiteTurn} />
    </main>
  )
}
