import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { GOAL_URL } from './CONSTS.json';
import axios from 'axios';

const EditTask = ({ task, trigger }) => {

    const { _id, title } = task;
    const [updateTitle, setUpdateTitle] = useState(title);

    // modal
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);

    const update = () => {
        axios.patch(`${GOAL_URL}/update/${_id}`,
            { title: updateTitle })
            .then((res) => {
                clearValues();
                trigger({
                    _success: true,
                    _msg: res.data
                });
            }).catch((err) => {
                trigger({
                    _success: false,
                    _msg: err
                });
            })
        toggle();
    }

    const clearValues = () => {
        setUpdateTitle('');
    }

    return (
        <>
            <button className="btn btn-outline-primary mr-2" onClick={toggle}>Edit</button>
            <Modal isOpen={showModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit '{title}'</ModalHeader>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="editTitleInput">New title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="editTitleInput"
                                onChange={({ target }) => setUpdateTitle(target.value)}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={update} className="btn btn-outline-primary">Update</button>
                        <button onClick={toggle} className="btn btn-outline-secondary">Cancel</button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
};

export default EditTask;