import Image from 'next/image'
import Container from './Container'

interface Props {
	children: React.ReactNode
}

export default function Header({ children }: Props) {
	return (
		<header className="header">
			<Container className="header__container">
				<div></div>
				<h2 className="header__username">Hola Osvaldo</h2>
				<Image
					className="header__userphoto"
					src="/img/user.jpeg"
					alt="foto osvaldo"
					width={24}
					height={24}
				/>
			</Container>
			{children}
		</header>
	)
}
