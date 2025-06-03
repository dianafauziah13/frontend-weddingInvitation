import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

interface FrontCoverProps {
  femaleName: string;
  maleName: string;
  guestName: string;
  place: string;
  onClick: () => void;
}

const FrontCover = (props: FrontCoverProps) => {
  return (
    <section
      className="aycawd-fullbg"
      data-aos="fade-down"
      data-aos-duration="1000">
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <div
              className="mt-4 p-4"
              data-aos="fade-down"
              data-aos-duration="2000">
              <p className="mb-2 text-center text-white wd-title">
                The Wedding Of
              </p>
              {props.place === 'kdr' ? (
                <h4 className="mb-1 text-center text-white wd-couplename font-weight-bold">
                  {props.maleName} <br />
                  & <br />
                  {props.femaleName}
                </h4>
              ) : (
                <h4 className="mb-1 text-center text-white wd-couplename font-weight-bold">
                  {props.femaleName}<br />
                  & <br />
                  {props.maleName}
                </h4>
              )}
              {props.guestName.length !== 0 && (
                <>
                  <p className="mb-1 text-center wd-for-txt" style={{ fontSize: '0.9rem' }}>
                    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                    Kepada Yth, <br /> Bapak/Ibu/Saudara/I
                  </p>
                  <p
                    className="mb-3 text-center text-white wd-guestname"
                    style={{ fontStyle: 'italic', fontSize: '0.9rem' }}
                  >
                    {props.guestName}
                  </p>
                  <p className="mb-1 text-center wd-for-txt" style={{ fontSize: '0.9rem' }}>
                    di Tempat
                  </p>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Tombol di tengah bawah */}
      <div
        style={{
          position: 'fixed',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
        }}>
        <Button
          variant="light"
          size="sm"
          className="btn-open-invit"
          onClick={props.onClick}>
          Open Invitation
        </Button>
      </div>
    </section>
  );
};

export default FrontCover;
