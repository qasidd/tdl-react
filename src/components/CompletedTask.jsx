import { GOAL_URL } from './CONSTS.json';
import axios from 'axios';

const CompletedTask = ({ task, trigger }) => {

    const { _id, completed } = task;

    const toggleCompleted = () => {
        axios.patch(`${GOAL_URL}/update/${_id}`, { completed: !completed })
            .then((res) => {
                trigger({
                    _success: true,
                    _msg: res.data
                })
            })
            .catch((err) => {
                trigger({
                    _success: false,
                    _msg: err
                })
            })
    }

    return (
        <button
            className="btn btn-outline-success mr-2"
            onClick={toggleCompleted}>
            Completed?
        </button>
    )
}

export default CompletedTask;