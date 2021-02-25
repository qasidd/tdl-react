import { useState } from 'react';
import { Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { GOAL_URL } from './CONSTS.json';
import axios from 'axios';

const DeleteTask = ({ task, trigger }) => {

    const { _id, title } = task;

    // modal
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);

    const deleteTask = () => {
        axios.delete(`${GOAL_URL}/delete/${_id}`)
            .then(() => {
                trigger({
                    _success: true,
                    _msg: 'Delete succsseful!'
                })
            })
            .catch((err) => {
                trigger({
                    _success: false,
                    _msg: err
                })
            })
        toggle();
    }

    return (
        <>
            <button className="btn btn-outline-danger" onClick={toggle}>Delete</button>
            <Modal isOpen={showModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Are you sure you want to delete the task '{title}'?</ModalHeader>
                <ModalFooter>
                    <button onClick={deleteTask} className="btn btn-outline-danger">Delete</button>
                    <button onClick={toggle} className="btn btn-outline-secondary">Cancel</button>
                </ModalFooter>
            </Modal>
        </>
    )
};

export default DeleteTask;