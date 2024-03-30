import { Fragment } from "react";
import School from "./School";
import { Container, Row, Table } from "react-bootstrap";

const Formation = ({formations}) => {


    const schools = formations.map(({title, school, startYear, endYear, link}, index) => {
        return (
            <Fragment key={index}>
                <School 
                    title={title}
                    school={school}
                    startYear={startYear}
                    endYear={endYear}
                    link={link} />
            </Fragment>
        )
        
    }
        
       
    )

    return (
        <Container className="border" style={{marginBottom: "10px", borderRadius: "10px"}}>
            <h3>Formation</h3>

            <Table striped bordered hover >
                <thead>
                    <tr>
                            <th align="left">Description</th>
                            <th align='left'>School</th>
                            <th align="right">From</th>
                            <th align="right">To</th>
                    </tr>
                </thead>

                <tbody>
                    {schools}
                </tbody>
                
            </Table>
        </Container>
        
    )

}

export default Formation