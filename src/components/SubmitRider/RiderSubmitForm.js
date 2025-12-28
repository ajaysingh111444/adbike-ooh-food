import React from 'react'
import { Tabs, Tab, Row, Col, Container, Stack } from "react-bootstrap";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

function RiderSubmitForm() {
const [currentTab, setCurrentTab] = React.useState(0);

const [area, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
        <Container>
            <Row className="RiderSubmitForm">
               <Col lg={3} md={12} sm={12}></Col>
                <Col lg={6} md={12} sm={12}>
                    <div className='wizard'>
                        <Tabs activeKey={currentTab} id="controlled-tab-example">
                            <Tab eventKey={0} title="Home" disabled={currentTab !== 0}>
                                <h3 class="main_question wizard-header">
                                    <strong>1/4</strong><br/>
                                    Where would you like to work?
                                    <div style={{margin: '30px 0px'}}>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Area</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={area}
                                                label="area"
                                                onChange={handleChange}
                                                >
                                                <MenuItem value={10}>Bihar</MenuItem>
                                                <MenuItem value={20}>Uttar Pradesh</MenuItem>
                                                <MenuItem value={30}>Delhi</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                </h3>
                            </Tab>
                            <Tab eventKey={1} title="Profile" disabled={currentTab !== 1}>
                                <h3 class="main_question wizard-header">
                                    <strong>2/4</strong><br/>
                                    What's your vehicle type?
                                    <div style={{margin: '30px 0px'}}>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="Bicycle"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="Bicycle" control={<Radio />} label="Bicycle" />
                                            <FormControlLabel value="Scooter" control={<Radio />} label="Scooter" />
                                            <FormControlLabel value="Car" control={<Radio />} label="Car" />
                                        </RadioGroup>
                                    </div>
                                </h3>
                            </Tab>
                            <Tab eventKey={2} title="Contacts" disabled={currentTab !== 2}>
                                <h3 class="main_question wizard-header">
                                    <strong>3/4</strong><br/>
                                    How did you hear about us?
                                    <div style={{margin: '30px 0px'}}>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                            <FormControlLabel required control={<Checkbox />} label="Google Search Engine" />
                                            <FormControlLabel required control={<Checkbox />} label="A friend of mine" />
                                            <FormControlLabel required control={<Checkbox />} label="Print Advertise" />
                                            <FormControlLabel required control={<Checkbox />} label="Newspaper" />
                                            <FormControlLabel required control={<Checkbox />} label="Other" />
                                        </FormGroup>
                                    </div>
                                </h3>
                            </Tab>
                            <Tab eventKey={3} title="PersonalDetails" disabled={currentTab !== 3}>
                                <h3 class="main_question wizard-header">
                                    <strong>4/4</strong><br/>
                                    Tell us about yourself
                                    <div style={{margin: '30px 0px'}}>
                                        <Row>
                                            <Col lg={12} md={12} sm={12} className='form-group'>
                                                <TextField id="outlined-basic" label="First and Last Name" variant="outlined" />
                                            </Col>
                                            <Col lg={12} md={12} sm={12} className='form-group'>
                                                <TextField id="outlined-basic" label="Your Email Address" type="email" variant="outlined" />
                                            </Col>
                                            <Col lg={12} md={12} sm={12} className='form-group'>
                                                <TextField id="outlined-basic" label="Your Contact Number" type="number" variant="outlined" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={4} md={12} sm={12} className='form-group'>
                                                <TextField id="outlined-basic" label="Age" variant="outlined" />
                                            </Col>
                                            <Col lg={8} md={12} sm={12} className='form-group'>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                </RadioGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12} sm={12} md={12}>
                                                <FormControlLabel control={<Checkbox />} />
                                                Please accepts our Terms and Conditions
                                            </Col>
                                        </Row>
                                    </div>
                                </h3>
                            </Tab>
                        </Tabs>
                        <Stack gap={3} direction="horizontal" className="mt-3">
                            <Button
                            className="backward"
                            disabled={currentTab === 0}
                            onClick={() => setCurrentTab((prev) => prev - 1)}
                            style={{float: 'left', width: '18%'}}>
                            Prev
                            </Button>
                            <Button
                            className="success"
                            disabled={currentTab === 3}
                            onClick={() => setCurrentTab((prev) => prev + 1)}
                            style={{float: 'right', width: '18%'}}>
                            Next
                            </Button>
                        </Stack>
                    </div>
                </Col>
                <Col lg={3} md={12} sm={12}></Col>
            </Row>
            
            {/* <p>Current tab index is {currentTab}</p> */}

        </Container>
    </div>
  )
}

export default RiderSubmitForm
