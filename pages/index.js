import Head from 'next/head'
import Image from 'next/image'
import screenpay from '/public/screenpay.png'

export default function Home() {
	return (

			<div className='flex flex-col items-center justify-center bg-slate-900 h-screen'>
				<div className='flex bg-white p-8 w-96 h-96 rounded-lg'>
					<Image className='flex' src={screenpay} alt='screenpay'/>

				</div>
				<div className='font-sans text-4xl font-bold text-white p-10'>Soon</div>
			</div>
	)
}
