import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const SinglePortfolio = ({ data, getData }) => {
	const { imgLink, imgLinkLg, title, subTitle, githuburl, liveurl, effect, duration, delay } = data;

	return (
		<div className="col-lg-4 col-md-6" data-aos={effect} data-aos-duration={duration} data-aos-delay={delay}>
			<div className="st-portfolio-single st-style1">
				<div className="st-portfolio-item">
					<div
						className="st-portfolio st-zoom"
						onClick={() => getData(imgLinkLg, title, subTitle, liveurl, githuburl)}
					>
						<div className="st-portfolio-img st-zoom-in">
							<img src={imgLink} alt="portfolio" />
						</div>
						<div className="st-portfolio-item-hover">
							<Icon icon="mdi:plus-circle" />
							<h5>{title}</h5>
							<p>{subTitle}</p>
						</div>
					</div>
					<div className="st-portfolio-btns">
						<a href={liveurl} className="st-btn st-style2 st-color1">
							Live URL
						</a>
						<a href={githuburl} className="st-btn st-style2 st-color3">
							<Icon icon="mdi:github" style={{ marginRight: 5 }} />
							GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

SinglePortfolio.propTypes = {
	data: PropTypes.object,
};

export default SinglePortfolio;
