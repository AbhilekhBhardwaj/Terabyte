import fs from "fs";
import path from "path";
import pdf from "pdf-parse";

async function extractPdfToTxt(pdfPath) {
	const dataBuffer = fs.readFileSync(pdfPath);
	const data = await pdf(dataBuffer);
	const outPath = pdfPath.replace(/\.pdf$/i, ".txt");
	fs.writeFileSync(outPath, data.text, "utf8");
	console.log(`Extracted: ${path.basename(pdfPath)} -> ${path.basename(outPath)}`);
}

async function main() {
	const args = process.argv.slice(2);
	if (args.length === 0) {
		console.error("Usage: node scripts/extract-pdf-text.mjs <file1.pdf> [file2.pdf ...]");
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


