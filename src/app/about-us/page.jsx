"use client";
import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

const page = () => {
	return (
		<>
			<Nav />
			<div className="page about-us">
				<section className="about-hero">
					<div className="container">
						<div className="about-hero-header">
							<Copy delay={0.85}>
								<h1>About Terabox</h1>
							</Copy>
							<Copy delay={1}>
								<p className="lg">
									We are a creative engineering studio building fast, accessible, and scalable digital experiences.
								</p>
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


