import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";

function App() {
    return (
        <div>
            <Button variant="primary" className="joseph">
                testy
            </Button>
            <p>
                Link that showed me how to use custom css:
                https://www.pluralsight.com/guides/override-react-bootstrap-with-custom-css-file
            </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>TEST 123</td>
                        <td>test@test123.com</td>
                        <td>1122334455</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>TEST 456</td>
                        <td>test@test456.com</td>
                        <td>6677889910</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>TEST 789</td>
                        <td>test@test789.com</td>
                        <td>6677889911</td>
                    </tr>
                </tbody>
            </Table>
            <div className="d-grid gap-2">
                <Button>testyo</Button>
            </div>
        </div>
    );
}

export default App;
