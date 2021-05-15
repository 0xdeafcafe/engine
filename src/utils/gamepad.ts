export function detectAxisMovement(pad: Gamepad, stick: 'left' | 'right', direction: 'horizontal' | 'vertical') {
	const axisIdx = getAxesIndex(stick, direction);
	const value = pad.axes[axisIdx];

	if (value > 0.1 || value < -0.1)
		return value;

	return 0;
}

function getAxesIndex(stick: 'left' | 'right', direction: 'horizontal' | 'vertical') {
	const si = stick === 'left' ? 0 : 2;
	const di = direction === 'horizontal' ? 0 : 1;

	return si + di;
}
