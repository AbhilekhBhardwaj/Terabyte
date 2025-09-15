"use client";
import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

const page = () => {
	return (
		<>
			<Nav />
			<div className="page our-clients">
				<section className="clients-hero">
					<div className="container">
						<div className="clients-hero-header">
							<Copy delay={0.85}>
								<h1>Our Clients</h1>
							</Copy>
							<Copy delay={1}>
								<p className="lg">Brands and teams we’ve partnered with.</p>
							</Copy>
						</div>
					</div>
				</section>
			</div>
			<ConditionalFooter />
		</>
	);
};

export default page;


