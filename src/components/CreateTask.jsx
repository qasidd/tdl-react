import { useState } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import { GOAL_URL } from './CONSTS.json';
import axios from 'axios';

const CreateTask = ({ trigger }) => {

    const [createTitle, setCreateTitle] = useState('');

    const create = (e) => {
        e.preventDefault();
        axios.post(`${GOAL_URL}/create`, { title: createTitle })
            .then((res) => {
                trigger({
                    _success: true,
                    _msg: res.data
                });
                setCreateTitle('');
            })
            .catch((err) => {
                trigger({
                    _success: false,
                    _msg: err
                });
                setCreateTitle('');
            })
    }

    return (
        <>
            <h5><em>Create new task:</em></h5>
            <Form inline onSubmit={create}>
                <FormGroup className="mr-sm-2">
                    <Label for="titleInput" className="mr-sm-2">Title</Label>
                    <Input 
                        type="text" 
                        name="title" 
                        id="titleInput" 
                        onChange={({target}) => setCreateTitle(target.value)} 
                    />
                </FormGroup>
                <Button outline color="primary">Submit</Button>
            </Form>
        </>
    );
};

export default CreateTask;