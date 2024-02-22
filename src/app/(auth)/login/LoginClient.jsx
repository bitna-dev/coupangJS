'use client';
import Loader from '@/components/loader/Loader';
import React, { useState } from 'react';
import styles from './Auth.module.scss';
import Image from 'next/image';
import LogoPath from '@/assets/logo.svg';
import { useRouter } from 'next/navigation';
import Input from '@/components/input/Input';
import AutoLoginCheckbox from '@/components/autoLoginCheckbox/AutoLoginCheckbox';
import Divider from '@/components/divider/Divider';
import Button from '@/components/button/Button';
import Link from 'next/link';

const LoginClient = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAutoLogin, setIsAutoLogin] = useState(false);
	const loginUser = (e) => {
		e.preventDefault();
		setIsLoading(true);
	};
	const googleLogin = () => {};
	const router = useRouter();
	const redirectUser = () => {
		router.push('/');
	};
	return (
		<>
			{isLoading && <Loader />}

			<section className={styles.page}>
				<div className={styles.container}>
					<h1 className={styles.logo}>
						<Image
							src={LogoPath}
							alt='logo'
							width={247}
						/>
					</h1>
					<form
						className={styles.form}
						onSubmit={loginUser}
					>
						{/* {INPUT} */}
						<Input
							email
							icon='letter'
							id='email'
							name='email'
							label='이메일'
							placeholder='email'
							className={styles.control}
							value={email}
							onChange={(e) =>
								setEmail(e.target.value)
							}
						/>
						<Input
							password
							icon='lock'
							id='password'
							name='password'
							label='비밀번호'
							placeholder='password'
							className={styles.control}
							value={password}
							onChange={(e) =>
								setEmail(e.target.value)
							}
						/>

						<div className={styles.group}>
							{/* 자동로그인 */}
							<AutoLoginCheckbox
								checked={isAutoLogin}
								onChange={(e) =>
									setIsAutoLogin(
										e.target.checked
									)
								}
							/>
							<Link
								href={'/reset'}
								className={styles.findLink}
							>
								비밀번호 수정하기
								<svg
									width='10'
									height='15'
									viewBox='0 0 11 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className={
										styles.findArrow
									}
								>
									<path
										d='M1.5 1L9.5 9L1.5 17'
										stroke='#0074E9'
										strokeWidth='2'
									/>
								</svg>
							</Link>
						</div>
						<div className={styles.buttonGroup}>
							<Button
								type='submit'
								width='100%'
							>
								로그인
							</Button>
							<Divider />
							<Button
								width='100%'
								secondary
							>
								<Link href={'/signup'}>
									회원가입
								</Link>
							</Button>
							<Divider />
							<Button
								width='100%'
								onClick={googleLogin}
							>
								구글로그인
							</Button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default LoginClient;
