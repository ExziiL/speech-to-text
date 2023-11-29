'use client';

import Output from '@/components/output';
import ThreeDotsWave from '@/components/three-dots-wave';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { Upload } from 'lucide-react';
import React from 'react';

const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const model = 'whisper-1';

function SpeechToText() {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [file, setFile] = React.useState<File | null>(null);
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
			formData.append('model', model);
			formData.append('file', file);

			axios
				.post('https://api.openai.com/v1/audio/transcriptions', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${OPENAI_API_KEY}`,
					},
				})
				.then((res) => {
					setResponse(res.data.text);
					setIsLoading(false);
				})
				.catch((err) => {
					console.error(err);
				});
		};

		fetchAudioFile();
	}, [file]);

	return (
		<div
			className=""
			style={{
				backgroundColor: 'f2f2f2',
				padding: 20,
				borderRadius: 8,
			}}
		>
			<div>Lade hier unten deine Audiodatei hoch :)</div>

			<div className="my-4 w-full border border-border border-dashed relative flex flex-col justify-center items-center h-48 hover:bg-zinc-50 transition-colors rounded-md">
				<Upload />
				<div className="pt-4 pb-1 px-12 text-zinc-800 font-semibold">Drap & Drop a file here, or click to select file</div>
				<div className="text-zinc-400 text-sm">Maximal File size is 25mb</div>
				<Input
					type="file"
					ref={inputRef}
					accept="audio/*"
					onChange={onChangeFile}
					className="cursor-pointer border-none w-full absolute h-full top-0 bottom-0 left-0 right-0 opacity-0"
				/>
				{response && <div className="pr-2 pb-1 absolute bottom-0 right-0 text-zinc-400 text-sm">{file && file.name}</div>}
			</div>

			{isLoading && <ThreeDotsWave />}
			{response && <Output response={response} />}
		</div>
	);
}

export default SpeechToText;
