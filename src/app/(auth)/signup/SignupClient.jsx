'use client';
import Button from '@/components/button/Button';
import Divider from '@/components/divider/Divider';
import Input from '@/components/input/Input';
import Loader from '@/components/loader/Loader';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/(auth)/login/Auth.module.scss';
import { useRouter } from 'next/navigation';
import LogoPath from '@/assets/logo.svg';

const SignupClient = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cPassword, setCPassword] = useState('');
	const loginUser = (e) => {
		e.preventDefault();
		setIsLoading(true);
	};
	const signupUser = () => {};
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
						onSubmit={signupUser}
					>
						{/* {INPUT} */}
						<Input
							email
							icon='letter'
							id='email'
							name='email'
							label='이메일'
							placeholder='아이디(이메일)'
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
							placeholder='비밀번호'
							className={styles.control}
							value={password}
							onChange={(e) =>
								setEmail(e.target.value)
							}
						/>
						<Input
							password
							icon='lock'
							id='password'
							name='password'
							label='비밀번호확인'
							placeholder='비밀번호 확인'
							className={styles.control}
							value={cPassword}
							onChange={(e) =>
								setEmail(e.target.value)
							}
						/>

						<div className={styles.buttonGroup}>
							<Button
								type='submit'
								width='100%'
							>
								회원가입
							</Button>
							<Divider />
							<Button
								width='100%'
								secondary
							>
								<Link href={'/login'}>
									로그인
								</Link>
							</Button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default SignupClient;
