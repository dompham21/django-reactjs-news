import React from 'react'
import { ToastContainer } from 'react-toastify';

function NotiToastContainer() {
    return (
        <ToastContainer
            position="top-right"
            autoClose={6000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}

export default NotiToastContainer
