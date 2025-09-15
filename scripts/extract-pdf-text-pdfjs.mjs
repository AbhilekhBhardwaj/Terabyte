import fs from "fs";
import path from "path";
import { readFile } from "fs/promises";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf.mjs";
// In Node, disable workers
GlobalWorkerOptions.workerSrc = undefined;

async function extractPdfToTxt(pdfPath) {
	const data = await readFile(pdfPath);
	const loadingTask = getDocument({ data, disableWorker: true });
	const pdf = await loadingTask.promise;
	let text = "";
	for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
		const page = await pdf.getPage(pageNum);
		const content = await page.getTextContent();
		const strings = content.items.map((item) => item.str);
		text += strings.join(" ") + "\n\n";
	}
	const outPath = pdfPath.replace(/\.pdf$/i, ".txt");
	fs.writeFileSync(outPath, text.trim(), "utf8");
	console.log(`Extracted: ${path.basename(pdfPath)} -> ${path.basename(outPath)}`);
}

async function main() {
	const args = process.argv.slice(2);
	if (args.length === 0) {
		console.error("Usage: node scripts/extract-pdf-text-pdfjs.mjs <file1.pdf> [file2.pdf ...]");
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


