import React from 'react';
import styles from './Loader.module.scss';
import {
	InfinitySpin,
	TailSpin,
} from 'react-loader-spinner';

const Loader = ({ basic }) => {
	if (basic) {
		return (
			<div className={styles.basicWrapper}>
				<TailSpin
					visible={true}
					height='60'
					width='60'
					color='var(--color-primary)'
					ariaLabel='tail-spin-loading'
					radius='1'
				/>
			</div>
		);
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.loader}>
				<TailSpin
					visible={true}
					height='60'
					width='60'
					color='var(--color-primary)'
					ariaLabel='tail-spin-loading'
					radius='1'
				/>
			</div>
		</div>
	);
};

export default Loader;
