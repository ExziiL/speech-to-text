import SpeechToText from "@/components/spech-to-text/speech-to-text";

export default function Home() {
	return (
		<div className="flex h-screen justify-center items-center">
			<div className="max-w-2xl">
				<SpeechToText />
			</div>
		</div>
	);
}
