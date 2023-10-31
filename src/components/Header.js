import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<header className="bg-blue-500 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="font-bold text-xl">
					<Link href={"/"}>Mini Mall</Link>
				</div>

				<nav>
					<ul className="flex space-x-4">
						<li>
							<Link
								href={"/"}
								className="hover:hover:text-gray-300 transition duration-300 ease-in-out"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href={"/products"}
								className="hover:hover:text-gray-300 transition duration-300 ease-in-out"
							>
								Products
							</Link>
						</li>
						<li>
							<Link
								href={"/cart"}
								className="hover:hover:text-gray-300 transition duration-300 ease-in-out"
							>
								Cart
							</Link>
						</li>
						<li>
							<Link
								href={"/about"}
								className="hover:hover:text-gray-300 transition duration-300 ease-in-out"
							>
								About
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
export default Header;
