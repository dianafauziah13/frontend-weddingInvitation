import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import moment from 'moment';

interface WelcomeProps {
  place: string;
  scrollUpRef: any;
  onScrollDownClick: Function | any;
}

const WelcomeSection = (props: WelcomeProps) => {
  return (
    <section
      className="welcome-fullbg"
      data-aos="fade-up"
      data-aos-duration="1000"
      ref={props.scrollUpRef}>
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <div className="welcome-content">
              <div data-aos="fade-down" data-aos-duration="2000">
                  <h4 className="mb-3 text-center text-white font-serif text-2xl md:text-3xl font-semibold tracking-wide">
                    {props.place === 'kdr' ? 'Guntur Satria' : 'Irna Khaleda Nurmeta'} <br /> & <br />
                    {props.place === 'kdr' ? 'Irna Khaleda Nurmeta' : 'Guntur Satria'}
                  </h4>
                <p className="mb-1 text-center text-white welcome-wd-place">
                  The Wedding |{' '}
                  {moment(
                    props.place === 'kdr' ? '2025-07-06' : '2025-07-06',
                  ).format('DD.MM.YYYY')}{' '}
                  | {props.place === 'kdr' ? 'Bandung Barat' : 'Bandung Barat'}
                </p>
              </div>
              <div className="link-toscroll" onClick={props.onScrollDownClick}>
                <p className="text-center text-white scroll-text mb-1">
                  Scroll down
                </p>
                <div className="text-center icon-down">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    color={'#FFFFFF'}
                    size={'lg'}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeSection;
