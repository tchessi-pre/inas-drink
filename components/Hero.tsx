'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
	ArrowRight,
	Leaf,
	ShieldCheck,
	Globe,
	Atom,
	Zap,
	Droplet,
	HeartPulse,
} from 'lucide-react';

const heroBadges = [
	{
		icon: Leaf,
		title: '100% Naturel',
		text: 'Ingrédients naturels sans colorant',
	},
	{
		icon: ShieldCheck,
		title: 'Sans conservateur',
		text: 'Pour une consommation saine et sûre',
	},
	{
		icon: Globe,
		title: 'Goût D\'afrique',
		text: 'Inspiré par la richesse de notre continent',
	},
];

const heroPerks = [
	{
		icon: Atom,
		title: 'Riche en antioxydants',
		text: 'Aide à protéger votre organisme',
	},
	{
		icon: Zap,
		title: "Booste l'énergie",
		text: 'Apporte vitalité et fraîcheur au quotidien',
	},
	{
		icon: Droplet,
		title: 'Hydratation naturelle',
		text: 'Idéal pour se rafraîchir à tout moment',
	},
	{
		icon: HeartPulse,
		title: 'Bon pour la santé',
		text: 'Des bienfaits naturels pour votre bien-être',
	},
];

export default function Hero() {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});
	const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
	const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

	return (
		<section
			ref={ref}
			id='accueil'
			className='relative min-h-screen flex flex-col overflow-hidden bg-cream-100'
			aria-label="Bienvenue sur INA'S DRINK"
		>
			{/* Grain overlay */}
			<div
				className='absolute inset-0 bg-grain opacity-[0.035] pointer-events-none'
				aria-hidden
			/>

			{/* Decorative leaf shapes */}
			<motion.div
				style={{ y: bgY }}
				className='absolute inset-0 pointer-events-none'
				aria-hidden
			>
				<Image
					src='/images/tree-leaves.webp'
					alt=''
					width={384}
					height={384}
					className='absolute -top-20 right-0 w-full sm:w-2/3 lg:w-1/2 aspect-[636/384] object-contain opacity-10'
					aria-hidden
				/>
				{/* <svg
					className='absolute bottom-20 -left-12 w-80 h-80 text-gold-500 opacity-[0.04] -rotate-45'
					viewBox='0 0 200 200'
					fill='currentColor'
				>
					<ellipse cx='100' cy='100' rx='40' ry='90' />
					<line
						x1='100'
						y1='10'
						x2='100'
						y2='190'
						stroke='currentColor'
						strokeWidth='3'
					/>
					<path d='M100,50 Q130,70 100,90 Q70,70 100,50' />
					<path d='M100,90 Q135,110 100,130 Q65,110 100,90' />
				</svg> */}
				<div className='absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/[0.03] blur-3xl' />
			</motion.div>

			<div className='flex-1 flex items-center w-full'>
				<div className='max-w-7xl mx-auto px-6 lg:pl-12 lg:pr-0 w-full py-16 lg:py-20'>
					<div className='grid lg:grid-cols-2 gap-12 lg:gap-8 items-center'>
						{/* ── Left: Text ── */}
						<motion.div
							style={{ y: textY }}
							className='relative z-10 order-2 lg:order-1'
						>
							{/* Headline */}
							<motion.h1
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
								className='text-2xl sm:text-6xl lg:text-5xl font-bold leading-[1.04] mb-6 text-forest-800 text-balance'
							>
								LE GOÛT AUTHENTIQUE
								<br />
								<span className='gold-text-shimmer'>DE L&rsquo;AFRIQUE</span>
							</motion.h1>

							{/* Subtext */}
							<motion.p
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.8,
									delay: 0.12,
									ease: [0.22, 1, 0.36, 1],
								}}
								className='text-forest-600 text-lg text-justify leading-relaxed mb-8 max-w-md'
							>
								INA&rsquo;S DRINK vous propose des boissons naturelles et
								rafraîchissantes, élaborées à partir d&rsquo;ingrédients
								soigneusement sélectionnés en Afrique. Savourez le meilleur de
								la nature, à chaque gorgée.
							</motion.p>

							{/* Badges */}
							<motion.div
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.8,
									delay: 0.22,
									ease: [0.22, 1, 0.36, 1],
								}}
								className='flex flex-wrap gap-6 sm:gap-8 mb-10'
							>
								{heroBadges.map((badge) => (
									<div
										key={badge.title}
										className='flex items-start gap-3 max-w-[170px]'
									>
										<div className='shrink-0 w-11 h-11 rounded-full border border-forest-700/25 flex items-center justify-center'>
											<badge.icon className='w-[18px] h-[18px] text-forest-700' />
										</div>
										<div>
											<p className='text-xs font-bold tracking-wide text-forest-800 uppercase'>
												{badge.title}
											</p>
											<p className='text-xs text-forest-600 leading-snug mt-0.5'>
												{badge.text}
											</p>
										</div>
									</div>
								))}
							</motion.div>

							{/* CTA */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.8,
									delay: 0.32,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								<motion.a
									href='#produits'
									whileHover={{ scale: 1.02, y: -2 }}
									whileTap={{ scale: 0.97 }}
									className='bg-forest-800 inline-flex items-center gap-2 border-2 border-forest-800 text-cream-100   px-8 py-4 rounded-full font-semibold text-sm tracking-wide uppercase hover:bg-cream-100 hover:text-forest-800 transition-colors'
								>
									Découvrir nos produits
									<ArrowRight className='w-4 h-4' />
								</motion.a>
							</motion.div>
						</motion.div>

						{/* ── Right: Bottles ── */}
						<div className='order-1 lg:order-2 relative w-full aspect-[632/524] lg:h-[600px] lg:aspect-auto flex items-center justify-center'>
							{/* Ground shadow */}
							<div
								className='absolute bottom-6 left-1/2 -translate-x-1/2 w-[75%] h-10 bg-forest-900/10 blur-2xl rounded-full'
								aria-hidden
							/>

							<motion.div
								initial={{ opacity: 0, y: 60, scale: 0.94 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									duration: 1,
									delay: 0.3,
									ease: [0.22, 1, 0.36, 1],
								}}
								className='relative w-full h-full'
								// style={{
								//   maskImage:
								//     'radial-gradient(ellipse 68% 68% at 50% 48%, black 55%, transparent 100%)',
								//   WebkitMaskImage:
								//     'radial-gradient(ellipse 68% 68% at 50% 48%, black 55%, transparent 100%)',
								// }}
							>
								<Image
									src='/images/bouteilles-inas4.png'
									alt="Les quatre boissons INA'S DRINK : Bissap, Tamarin, Gingembre, Baobab"
									fill
									className='object-contain'
									sizes='(max-width: 1024px) 90vw, 48vw'
									priority
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom perks bar */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
				className='relative bg-forest-800'
			>
				<div className='max-w-7xl mx-auto px-6 lg:px-12'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10'>
						{heroPerks.map((perk) => (
							<div
								key={perk.title}
								className='flex items-center gap-3 py-5 px-4 sm:px-6'
							>
								<div className='shrink-0 w-11 h-11 rounded-full border border-gold-400/40 flex items-center justify-center'>
									<perk.icon className='w-5 h-5 text-gold-400' />
								</div>
								<div>
									<p className='text-sm font-bold text-gold-200 uppercase'>
										{perk.title}
									</p>
									<p className='text-xs text-cream-100 leading-snug mt-0.5'>
										{perk.text}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
