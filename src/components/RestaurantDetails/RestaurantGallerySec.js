import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import '../../assets/css/RestaurantDetails.css';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Modal from '@mui/material/Modal';
import zIndex from '@mui/material/styles/zIndex';

const images = [
    (require('../../assets/images/listing/food/thumb_detail_1.jpg')),
    (require('../../assets/images/listing/food/thumb_detail_2.jpg')),
    (require('../../assets/images/listing/food/thumb_detail_3.jpg')),
    (require('../../assets/images/listing/food/thumb_detail_4.jpg')),
    (require('../../assets/images/listing/food/thumb_detail_5.jpg')),
    (require('../../assets/images/listing/food/thumb_detail_6.jpg')),
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '500',
  textAlign: 'center',
  // bgcolor: 'background.paper',
  // border: '1px solid #000',
  // boxShadow: 24,
  borderRadius: '5px',
  zIndex: '99999',
  p: 4,
  };  

const RestaurantGallerySec = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    
    const handleOpenModal = (index) => {
      setCurrentImage(index);
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  
    const handlePrevImage = () => {
      setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };
  
    const handleNextImage = () => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };
    return (
        <div> 
        <Row>
            <Col lg="12" md="12" sm="12" style={{ justifyContent: 'end', display: 'flex'}}>
                <ImageList sx={{ width: 500, height: 335 }} cols={3} rowHeight={164}>
                    {images.map((image, index) => (
                      <ImageListItem>
                        <img key={index} src={image}
                            style={{width: "100%", display: "block", cursor: "pointer"}}
                            onClick={() => handleOpenModal(index)}
                        />
                      </ImageListItem>  
                    ))}
                </ImageList>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal open={modalOpen} onClose={handleCloseModal}>
                    <Box sx={style}>
                        <Button onClick={handlePrevImage} className='arrowBIcon'>
                            < ArrowBackIosIcon />
                        </Button>
                        <img src={images[currentImage]} />
                        <Button onClick={handleNextImage} className='arrowFIcon'>
                            < ArrowForwardIosIcon />
                        </Button>
                    </Box>
                </Modal>
            </Col>
        </Row>
    </div>
  )
}

export default RestaurantGallerySec
