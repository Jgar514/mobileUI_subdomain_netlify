import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";

// import Particle from "../Particle";
import pdf from "../utils/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div className="flex flex-col items-center h-fit">
			{/* <Particle /> */}
			{/* <div className="h-fit flex bg-blue-200 justify-end p-2 w-full ">
				<AiOutlineDownload />
				<p>Download</p>
			</div> */}
			<div className="flex items-center justify-center bg-blue-200 h-full">
				<Document file={pdf} className="w-full h-fit">
					<Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
				</Document>
			</div>
		</div>
	);
}

export default ResumeNew;
