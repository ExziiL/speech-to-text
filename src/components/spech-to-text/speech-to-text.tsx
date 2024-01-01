"use client";

import AnimatedButton from "@/components/animated-button";
import Output from "@/components/output";
import ThreeDotsWave from "@/components/three-dots-wave";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Upload } from "lucide-react";
import React from "react";

const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const model = "whisper-1";

// some small change
function SpeechToText() {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [file, setFile] = React.useState<File | null>(null);
	// const [responseFormat, setResponseFormat] = React.useState<string>("srt");
	// const [responseFormat, setResponseFormat] = React.useState<string>("vtt");
	const [responseFormat, setResponseFormat] = React.useState<string>("text");
	const [response, setResponse] = React.useState<string | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const onChangeFile = () => {
		setIsLoading(true);
		setFile(inputRef.current?.files?.[0] || null);
	};

	React.useEffect(() => {
		const fetchAudioFile = async () => {
			if (!file) return;

			const formData = new FormData();
			formData.append("model", model);
			formData.append("file", file);

			if (responseFormat) formData.append("response_format", responseFormat);

			axios
				.post("https://api.openai.com/v1/audio/transcriptions", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: `Bearer ${OPENAI_API_KEY}`,
					},
				})
				.then((res) => {
					setResponse(res.data);
					setIsLoading(false);
					// console.log('res', res);
				})
				.catch((err) => {
					console.error(err);
				});
		};

		fetchAudioFile();
	}, [file, responseFormat]);

	return (
		<div
			className=""
			style={{
				backgroundColor: "f2f2f2",
				padding: 20,
				borderRadius: 8,
			}}
		>
			{/* <div className="text-xl pb-12">Lade hier unten deine Audiodatei hoch :)</div> */}

			<div className="my-4 w-full border border-border border-dashed relative flex flex-col justify-center items-center h-48 hover:bg-zinc-50 transition-colors rounded-md">
				<Upload />
				<div className="pt-4 pb-1 px-12 text-zinc-800 font-semibold">Klicke hier, um eine Audio-Datei hochzuladen</div>
				<div className="text-zinc-400 text-sm">Maximale Dateigröße beträgt 25 MB</div>
				<Input
					type="file"
					ref={inputRef}
					accept="audio/*"
					onChange={onChangeFile}
					className="cursor-pointer border-none w-full absolute h-full top-0 bottom-0 left-0 right-0 opacity-0"
				/>
				{response && <div className="pr-2 pb-1 absolute bottom-0 right-0 text-zinc-400 text-sm">{file && file.name}</div>}
			</div>

			{isLoading && (
				<div className="flex flex-col gap-y-10 items-center">
					<ThreeDotsWave />
					<div className="text-center gap-2 flex flex-col text-zinc-500">
						<p>Dieser Vorgang kann einige Minuten dauern.</p>
						<p>Die Seite bitte nicht neu laden oder schließen.</p>
					</div>
				</div>
			)}
			{response && <Output response={response} />}
		</div>
	);
}

export default SpeechToText;
