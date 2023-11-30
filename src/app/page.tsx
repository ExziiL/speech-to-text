import ThemeToggle from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import AnimatedButton from '@/components/animated-button';
import SpeechToText from '@/components/spech-to-text/speech-to-text';

export default function Home() {
	return (
		<div className="h-screen flex justify-center items-center">
			<AnimatedButton />
		</div>
	);
}
