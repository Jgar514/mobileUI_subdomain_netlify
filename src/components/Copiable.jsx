import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
// import "./styles.css";

export default function Copiable() {
	const [isCopied, setIsCopied] = useState(false);

	const codeSnippet = `Josh.T.Garvey@gmail.com`;

	const onCopyText = () => {
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1000);
	};

	return (
		<div className="h-full bg-gray-100 w-full flex flex-col">
			<div className="code-section bg-gray-200  flex flex-row justify-between w-full h-full items-center text-lg">
				<pre className="flex justify-center bg-gray-200 h-fit">{codeSnippet}</pre>
				<CopyToClipboard text={codeSnippet} onCopy={onCopyText} className="bg-white px-2 relative right-4 border-2">
					<span>{isCopied ? "Copied!" : <MdContentCopy className="text-2xl" />}</span>
				</CopyToClipboard>
			</div>
		</div>
	);
}
