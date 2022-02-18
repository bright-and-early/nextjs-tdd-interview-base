import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { Layout, Link, Page, Text, Button } from '@vercel/examples-ui'
import { HOME_BRANDS } from '@lib/brand'

export default function Home() {
  const router = useRouter()
  const setBrand = (brand: string) => () => {
    Cookies.set('brand-home', brand)
    router.reload()
  }
  const removeBrand = () => {
    Cookies.remove('brand-home')
    router.reload()
  }
  const brand = router.query.brand || 'chene' as string

  return (
    <Page>
      <Text variant="h2" className="mb-6" style={{ color: '#BB8141'}}>
        Home page
      </Text>
      <Text className="text-lg mb-4">
        <Link href='/about'>About</Link> us
      </Text>
      <Text className="text-lg mb-4">
        Welcome to <b>brand {brand.toUpperCase()}</b> flooring.
      </Text>
      <Text className="mb-4">
        You can use the buttons below to change your assigned brand and refresh
        the page:
      </Text>
      {HOME_BRANDS.map((brand) => (
        <Button
          key={brand}
          variant="secondary"
          onClick={setBrand(brand)}
          style={{ marginRight: '0.625rem' }}
        >
          Brand {brand.toUpperCase()}
        </Button>
      ))}
      <Button variant="black" onClick={removeBrand}>
        Remove brand
      </Button>
    </Page>
  )
}

Home.Layout = Layout

export async function getStaticProps() {
  // Here you would return data about the brand
  return { props: {} }
}