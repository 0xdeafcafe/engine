export function detectAxisMovement(pad: Gamepad, stick: 'left' | 'right', direction: 'horizontal' | 'vertical') {
	const axisIdx = getAxesIndex(stick, direction);
	const value = pad.axes[axisIdx];
	console.log(axisIdx);

	if (value > 0.05 || value < -0.04)
		return value;

	return 0;
}

function getAxesIndex(stick: 'left' | 'right', direction: 'horizontal' | 'vertical') {
	return (stick === 'left' ? 0 : 2) + direction === 'horizontal' ? 0 : 1;
}
