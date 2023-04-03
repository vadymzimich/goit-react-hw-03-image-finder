import React, { Component } from 'react';
import css from './Modal.module.css';
import propTypes from 'prop-types';

export class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.code === 'Escape') {
      this.props.handleClose();
    }
  }

  handleClose() {
    this.props.handleClose();
  }

  render() {
    const { src, alt } = this.props;

    return (
      <div className={css.Overlay} onClick={this.handleClose}>
        <div className={css.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};

// export const Modal = ({ src, alt, handleClose, onKeyDown }) => (
//   <div className={css.Overlay} onClick={handleClose}>
//     <div className={css.Modal}>
//       <img src={src} alt={alt} />
//     </div>
//   </div>
// );

// Modal.propTypes = {
//   src: propTypes.string.isRequired,
//   alt: propTypes.string.isRequired,
//   handleClose: propTypes.func.isRequired,
// };
