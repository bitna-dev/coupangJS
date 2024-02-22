'use client'
import Button from '@/components/button/Button';
import Divider from '@/components/divider/Divider';
import Input from '@/components/input/Input';
import Loader from '@/components/loader/Loader';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import {useRouter} from "next/navigation"
import styles from "./ResetClient.module.scss"
import LogoPath from '@/assets/logo.svg';
import Heading from '@/components/heading/Heading';

const ResetClient = () => {
  const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');

	const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true)
  };
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
          <Heading title="비밀번호 업데이트" subtitle="이메일 주소를 입력해주세요." />
					<form
						className={styles.form}
						onSubmit={resetPassword}
					>
						{/* {INPUT} */}
						<Input
            type="text"
            placeholder='Email'
            required
            value={email}
            className={styles.control}
            onChange={(e) => setEmail(e.target.value)}
						/>
						

						<div>
							<Button
								type='submit'
								width='100%'
							>
								비밀번호찾기
							</Button>
            </div>

							<Divider />
              <div className={styles.links}>
							<Button
								width='100%'
								secondary
							>
								<Link href={'/login'}>
									로그인
								</Link>
							</Button>
              <Button
								width='100%'
								secondary
							>
								<Link href={'/signup'}>
									회원가입
								</Link>
							</Button>
						</div>
					</form>
				</div>
			</section>
		</>
  )
}


export default ResetClient