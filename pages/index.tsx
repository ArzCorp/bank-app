import Container from 'components/Container'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<section>
			<Head>
				<title>Bank | dashboard</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<p>Hola mundo</p>
			</Container>
		</section>
	)
}

export default Home