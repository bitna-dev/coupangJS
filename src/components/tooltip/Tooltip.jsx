import React from 'react';
import styles from './Tooltip.module.scss';
import classNames from 'classnames';
const Tooltip = ({
	top = 0,
	right = 0,
	left = 0,
	bottom = 0,
	color = '',
	bgColor = '',
	orientation = 'top',
	message,
	...restProps
}) => {
	const style = {
		top,
		left,
		right,
		bottom,
		color,
		backgroundColor: bgColor,
	};
	const setOrientationClass = (type) => {
		switch (type) {
			case 'top':
				return styles.orientationTop;
			case 'bottom':
				return styles.orientationBottom;
			case 'right':
				return styles.orientationRight;
			case 'left':
				return styles.orientationLeft;
			default:
		}
	};
	return (
		<>
			<span
				role='tooltip'
				className={classNames(
					styles.tooltip,
					setOrientationClass(orientation)
				)}
				style={style}
				{...restProps}
			>
				{message}
			</span>
		</>
	);
};

export default Tooltip;
