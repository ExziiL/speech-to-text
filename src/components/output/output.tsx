import { Button } from '@/components/ui/button';
import { ClipboardCopy, Copy, Upload } from 'lucide-react';
import React from 'react';

interface OutputProps {
	response: string | null;
}

function Output({ response }: OutputProps) {
	return (
		<div>
			{/* {response && <div>{response}</div>} */}
			<div className="relative border rounded-md p-4 max-h-96 overflow-y-auto">
				<div className="">{response}</div>
			</div>
			<div className="flex justify-end">
				<Button className="gap-2 mt-4 w-40">
					<Copy size={18} />
					Copy Text
				</Button>
			</div>
		</div>
	);
}

export default Output;
