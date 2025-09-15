"use client";
import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

const page = () => {
	return (
		<>
			<Nav />
			<div className="page our-services">
				<section className="services-hero">
					<div className="container">
						<div className="services-hero-header">
							<Copy delay={0.85}>
								<h1>Our Services</h1>
							</Copy>
							<Copy delay={1}>
								<p className="lg">Website design & development, web apps, mobile, UI/UX, SEO & cloud.</p>
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


