import { Button } from '@/components/ui/button';
import { ClipboardCopy, Copy, Upload } from 'lucide-react';
import React from 'react';
import { useCopyToClipboard } from 'usehooks-ts';

interface OutputProps {
	response: string | null;
}

function Output({ response }: OutputProps) {
	const [value, copy] = useCopyToClipboard();

	const handleOnClick = () => {
		copy(response || '');
	};

	return (
		<div>
			<div className="relative border rounded-md p-4 max-h-96 overflow-y-auto">
				<div className="">{response}</div>
			</div>
			<div className="flex justify-end">
				<Button
					className="gap-2 mt-4 w-40 z-20"
					onClick={handleOnClick}
				>
					<Copy size={18} />
					Copy Text
				</Button>
			</div>
		</div>
	);
}

export default Output;
