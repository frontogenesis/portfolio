import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default function Loading() {
    return (
        <div>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="primary" />
        </div>
    )
}
