import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Main } from './index.styles'

import logotipo from '../public/logotipo.png'
import { api } from './api/api'

interface IQuote {
  quote: string;
  author: string;
}

const Index: NextPage = () => {
  const [quote, setQuote] = useState<IQuote>();

  useEffect(() => {
    api
      .get("http://localhost:4000/quote/find")
      .then((res) => {
        setQuote(res.data);
      })
      .catch((err) => {
        setQuote(err.message)
      })
  }, [])
  return (
    <main>
      <Image className="logo" src={logotipo} width={512} height={512} />
      <h2>"{quote?.quote}"</h2>
      <h3>- {quote?.author}</h3>
    </main>
  )
}

export default Index
