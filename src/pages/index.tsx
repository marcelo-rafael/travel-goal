import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/href">
        <InfoOutline size={32} arial-label="About" />
      </LinkWrapper>
      <Map />
    </>
  )
}
