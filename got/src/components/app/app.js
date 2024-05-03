import React, { useState, useEffect } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';
import gotService from '../../services/gotService';


function App({getData, renderItem}) {
    


    const [show, error, updateList] = useState([])

    useEffect(() => {
        updateList({
            error:true
        })
    })

    function hideCharInfo() {
        updateList({
        show: !show
        })
    }

        const charInfo = show ? <RandomChar/> : null;
        

        if (error){
            return <ErrorMessage/>
        }
        
        return (
            <Router>
                <div className='app'> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {charInfo}
                            <button onClick={hideCharInfo} className='btn btn-primary mb-3'>Toggle random character</button>
                        </Col>
                    </Row>
                    <Routes>
                    <Route path='/characters' element={<CharacterPage/>}/>                    
                    <Route path='/houses' element={<HousesPage/>}/>
                    <Route path='/books' exact element={<BooksPage/>}/>
                    {/* <Route path='/books/:id' element={<BooksItem/>}/> */}
                    </Routes>

                </Container>
                </div> 
            </Router>
        );
    }

    export default App