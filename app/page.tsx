import Image from 'next/image'
import PageHeader from '../components/Header/PageHeader'
import AppHomeSection from '../components/AppHome/AppHomeContent'
export default function Home() {
  return (
    <div className="screen">
      <PageHeader />
      <AppHomeSection  />
    </div>
  )
}