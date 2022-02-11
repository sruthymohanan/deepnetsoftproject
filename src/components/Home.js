import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import useForm from '../useForm'
import { Navbar, Nav, Container, Button, Row, Col, InputGroup, FormControl, Form, Table } from 'react-bootstrap'

function Home() {

  const {handleChange,values,handleSubmit,errors} = useForm();

  const [row, setRow] = useState(0)
  const [addbtn, setAddbtn] = useState(false)
  const [itemno, setItemno] = useState(0)

  function addRow() {
    setItemno(row)

  }
  const [table, setTable] = useState(false)
  const [products, setProducts] = useState([])

    function add(event) {
    event.preventDefault()
    let p_code = event.target.productcode.value
    let p_name = event.target.productname.value
    let p_qty = event.target.productqty.value
    const prd = { p_code, p_name, p_qty }
    Swal.fire({
      icon: 'success',
      title: 'Item added',
      text: 'Items succesfully added',
    })
    if (p_code != "" & p_name != "" & p_qty != "") {
      setProducts([...products, prd])

      console.log("Inside Looop");
    } else {
      console.log("Outisde loop");
    }

    for (let data of products) {
      console.log("Prdata", data);
      if (p_code != "" & p_name != "" & p_qty != "") {
        if (data.p_code == p_code) {
          let newqty = Number(data.p_qty) + Number(p_qty)
          setProducts([...products, data.p_qty = newqty])
        }
      }
    }

  }
  const items = []

  for (let i = 1; i <= itemno; i++) {
    items.push(
      <Form onSubmit={add}>
        <Col lg={6} style={{ marginLeft: "25%" }}>
          <InputGroup style={{ marginTop: "2%" }} >
            <FormControl
              placeholder="Product Code"
              aria-label="Product Code"
              type="number"
              name="productcode"
              aria-describedby="basic-addon1"
              value={values.productcode}
              onChange={handleChange}
              />
            {errors.productcode && <p>{errors.productcode}</p>}
            <FormControl
              placeholder="Quantity"
              aria-label="Quantity"
              type="number"
              name="productqty"
              aria-describedby="basic-addon1"
              value={values.productqty}
              onChange={handleChange}
            />
            {errors.productqty && <p>{errors.productqty}</p>}
            <Button type='submit' >ADD </Button>
          </InputGroup>
        </Col>
      </Form>
    )
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PRODUCT MANAGEMENT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#add" onClick={() => {
              setAddbtn(!addbtn)
              setTable(false)
            }}>ADD PRODUCTS</Nav.Link>{''}
            <Nav.Link href="#list" onClick={() => {
              setTable(!table)
              setAddbtn(false)
            }}>LIST PRODUCTS</Nav.Link>{''}
          </Nav>
        </Container>
      </Navbar>
      {addbtn ?
        <Row>
          <Col lg={4} style={{ marginLeft: "30%", marginTop: "50px" }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter the number of products"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setRow(e.target.value)}
              />
              <Button onClick={addRow} >SHOW </Button>
            </InputGroup>
          </Col>
        </Row>
        : null
      }
      {(addbtn) ? items : null}
      {(table) ? <Col lg={6}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>PRODUCT CODE</th>
              <th>PRODUCT NAME</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((item) =>
                item.p_code ?
                  <tr>
                    <td>{item.p_code}</td>
                    <td>{item.p_name}</td>
                    <td>{item.p_qty}</td>
                  </tr> : null
              )
            }
          </tbody>
        </Table>
      </Col> : null}
    </>
  )
}
export default Home
