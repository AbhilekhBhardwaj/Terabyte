import fs from "fs";
import path from "path";
import PDFParser from "pdf2json";

function extractPdfToTxt(pdfPath) {
	return new Promise((resolve, reject) => {
		const pdfParser = new PDFParser();
		pdfParser.on("pdfParser_dataError", (err) => reject(err.parserError || err));
		pdfParser.on("pdfParser_dataReady", (pdfData) => {
			let out = [];
			for (const page of pdfData.FormImage.Pages || []) {
				let pageText = [];
				for (const textObj of page.Texts || []) {
					const runs = textObj.R || [];
					for (const run of runs) {
						const decoded = decodeURIComponent(run.T || "");
						pageText.push(decoded);
					}
				}
				out.push(pageText.join(" "));
			}
			const text = out.join("\n\n").trim();
			const outPath = pdfPath.replace(/\.pdf$/i, ".txt");
			fs.writeFileSync(outPath, text, "utf8");
			console.log(`Extracted: ${path.basename(pdfPath)} -> ${path.basename(outPath)}`);
			resolve(outPath);
		});
		pdfParser.loadPDF(pdfPath);
	});
}

async function main() {
	const args = process.argv.slice(2);
	if (args.length === 0) {
		console.error("Usage: node scripts/extract-pdf-text-pdf2json.mjs <file1.pdf> [file2.pdf ...]");
		process.exit(1);
	}
	for (const pdfPath of args) {
		await extractPdfToTxt(pdfPath);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});


