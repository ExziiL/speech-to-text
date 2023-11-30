import SpeechToText from '@/components/spech-to-text/speech-to-text';

export default function Home() {
	return (
		<div className="flex h-screen justify-center items-center">
			<div className="max-w-2xl">
				<SpeechToText />
			</div>
		</div>
		// <main className="flex min-h-screen flex-col items-center justify-between py-24 p-4">
		// 	<ThemeToggle />

		// 	<h1>Date-Ideen-Generator</h1>

		// 	<div className="">
		// 		<p className="">Hi Laura!</p>
		// 		<p className="">heute könnten wir...</p>
		// 	</div>

		// 	<div>Schlittschuh fahren!</div>

		// 	<div>
		// 		Dauer?
		// 		<div>
		// 			<Badge>1 Stunde</Badge>
		// 			<Badge>2 Stunden</Badge>
		// 			<Badge>4 Stunden</Badge>
		// 			<Badge>6 Stunden</Badge>
		// 		</div>
		// 	</div>

		// 	<Button>Generate Idea</Button>
		// </main>
	);
}
