import './Modal.scss';
import { Icon } from '@iconify/react';

const Modal = ({ img, title, subTitle, liveurl, githuburl, modalClose }) => {
	const modalStyle = {
		backgroundColor: 'rgba(0,0,0,0.8)',
		display: 'block',
	};
	return (
		<div className="modal show fade bd-example-modal-lg" style={modalStyle}>
			<div className="modal-dialog modal-lg">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">{title}</h4>
						<button type="button" className="btn-close" onClick={modalClose}></button>
					</div>
					<div className="modal-body">
						<div className="st-flex-center">
							<img src={img} />
						</div>
						<p className="modal-subtitle">{subTitle}</p>
						<div className="modal-btns">
							<a href={liveurl} className="st-btn st-style1 st-color1">
								Live URL
							</a>
							<a href={githuburl} className="st-btn st-style1 st-color2">
								<Icon icon="mdi:github" style={{ marginRight: 5 }} />
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
