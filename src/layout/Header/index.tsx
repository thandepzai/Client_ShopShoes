'use client'
import React from 'react'
import Logo from './fragments/CSR/Logo'
import SearchBar from './fragments/CSR/SearchBar'
import CartIcon from './fragments/CSR/Cart'

const Header = () => {
	return (
		<header className="md:fixed left-0 right-0 top-0 md:bg-palette-fill shadow-sm pt-4 z-[1000]">
			<div className="flex flex-col md:px-4 mb-2">
				<div className="flex items-center justify-center md:order-2 md:mt-2  relative">
					<div className="md:hidden">
						<Logo />
					</div>
				</div>
				<hr className="md:hidden" />
				<div className="mb-2 mt-4 md:mt-0 flex items-center md:order-1">
					<div className="hidden md:block">
						<Logo />
					</div>
					<div className="flex-grow">
						<SearchBar />
					</div>
					<div className="ltr:ml-2 rtl:mr-2 smml-4 sm:mr-4 flex items-center justify-between ">
						<CartIcon />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
