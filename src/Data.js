function getData(about, email, services, skills, timeline, projects, testimonials, social_handles, blogs) {
	const { name, title, subTitle, description, avatar, address, phoneNumber } = about;
	const [firstName, lastName] = name?.split(' ');
	const education = [];
	const experience = [];

	timeline.forEach((entry) => {
		if (entry.enabled) {
			if (entry.forEducation) {
				education.push(entry);
			} else {
				experience.push(entry);
			}
		}
	});

	function formatDateRange(startDate, endDate) {
		const startYear = new Date(startDate).getFullYear();
		const endYear = new Date(endDate).getFullYear();

		const startMonth = new Date(startDate).toLocaleString('default', { month: 'short' });
		const endMonth = new Date(endDate).toLocaleString('default', { month: 'short' });

		return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
	}

	return {
		heroData: {
			homeOneHero: {
				bgImgLink: '/images/background/hero-bg.jpg',
				imgLink: avatar.url,
				title: `${firstName} <br /> ${lastName}`,
				subTitle: 'Hello, I’m',
				designation: title,
			},
			homeTwoHero: {
				imgAuthor: avatar.url,
				bgImgLink: '/images/background/hero-bg.jpg',
				title: `Hi, I am <span>${firstName} ${lastName}</span>`,
				text: subTitle,
			},
			homeThreeHero: {
				imgAuthor: avatar.url,
				bgImgLink: '/images/background/hero-bg-1.jpg',
				title: `Hi, I am <span>${firstName} ${lastName}</span>`,
				text: subTitle,
			},
			homeFourHero: {
				imgAuthor: avatar.url,
				bgImgLink: '/images/background/hero-bg-2.jpg',
				title: `Hi, I am <span>${firstName} ${lastName}</span>`,
				text: subTitle,
			},
		},
		aboutData: {
			imgLink: avatar.url,
			cvPdf: '/images/Resume.pdf',
			title: `Hi There! I'm ${firstName} ${lastName}`,
			subtitle: title,
			text: description,
			details: [
				{
					title: 'Birthday',
					info: 'May 07, 1990',
				},
				{
					title: 'Phone',
					info: phoneNumber,
				},
				{
					title: 'Email',
					info: email,
				},
				{
					title: 'From',
					info: address,
				},
				{
					title: 'Language',
					info: 'English, Germanic',
				},
				{
					title: 'Freelance',
					info: 'Available',
				},
				{
					title: 'Freelance',
					info: 'Available',
				},
			],
		},
		serviceData: {
			services: services.map((service, index) => {
				return (
					service.enabled && {
						imgLink: service.image.url,
						title: service.name,
						text: service.desc,
						charge: service.charge,
						effect: 'zoom-out-up',
						duration: '500',
						delay: (index + 2) * 100,
					}
				);
			}),
		},
		skillData: {
			title: 'All the skills that I have in that field of work are mentioned.',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
			skills: skills.map((skill, index) => {
				return (
					skill.enabled && {
						title: skill.name,
						progress: skill.percentage + '%',
						effect: 'fade-up',
						duration: '500',
						delay: (index + 2) * 100,
					}
				);
			}),
		},
		portfolioData: {
			portfolioItems: projects.map((project, index) => {
				return (
					project.enabled && {
						imgLink: project.image.url,
						imgLinkLg: project.image.url,
						title: project.title,
						subTitle: project.description,
						effect: 'fade-up',
						duration: '500',
						delay: (index + 2) * 100,
					}
				);
			}),
		},
		blogData: {
			useFor: 'blog',
			sliderSetting: {
				infinite: true,
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
							autoplay: true,
						},
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							autoplay: true,
						},
					},
				],
			},
			informations: blogs?.map((blog) => {
				return (
					blog.enabled && {
						imgLink: blog.image.url,
						designation: 'Admin',
						date: blog.createdAt,
						title: blog.title,
						href: '/blog/blog-details',
					}
				);
			}),
			// 	{
			// 		imgLink: './images/blog/blog1.jpg',
			// 		designation: 'Admin',
			// 		date: '07-03-2023',
			// 		title: 'latest trends in Graphic design according to you?',
			// 		href: '/blog/blog-details',
			// 	}
		},
		reviewData: {
			useFor: 'review',
			sliderSetting: {
				infinite: true,
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
							autoplay: true,
						},
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							autoplay: true,
						},
					},
				],
			},
			informations: testimonials.map((testimonial) => {
				return (
					testimonial.enabled && {
						imgLink: testimonial.image.url,
						title: testimonial.name,
						designation: testimonial.position,
						text: testimonial.review,
					}
				);
			}),
		},
		resumeData: {
			experienceTitle: 'Experience',
			experience: experience.map((exp) => {
				return {
					title: exp.jobTitle,
					duration: formatDateRange(exp.startDate, exp.endDate),
					subTitle: exp.jobLocation,
					text: exp.summary,
				};
			}),
			educationTitle: 'Education',
			education: education.map((educ) => {
				return {
					title: educ.jobTitle,
					duration: formatDateRange(educ.startDate, educ.endDate),
					subTitle: educ.jobLocation,
					text: educ.summary,
				};
			}),
		},
		contactData: {
			formTitle: 'Just say Hello',
			title: 'Contact Info',
			subTitle: 'Visite my social profile and get connected',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.',
		},
		socialData: social_handles.map((social, index) => {
			return (
				social.enabled && {
					icon: social.platform?.toLowerCase(),
					title: social.platform,
					link: social.url,
				}
			);
		}),
		socialData2: social_handles.map((social, index) => {
			return (
				social.enabled && {
					icon: social.platform?.toLowerCase(),
					link: social.url,
				}
			);
		}),
	};
}

export { getData };
