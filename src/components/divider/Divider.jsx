import React from 'react';
import styles from './Divider.module.scss';
import classNames from 'classnames';
const Divider = ({
	sapce = 22,
	color = '#ccc',
	className = '',
	...restProps
}) => {
	const style = {
		marginTop: sapce,
		marginBottom: sapce,
		background: color,
	};
	return (
		<div
			role='presentation'
			className={classNames(styles.line, className)}
			style={style}
			{...restProps}
		></div>
	);
};

export default Divider;
