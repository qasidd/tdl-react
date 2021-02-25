import { useEffect, useState } from 'react';
import axios from 'axios';
import { GOAL_URL } from './CONSTS.json';
import { Alert, Spinner } from 'reactstrap';
import IndividualTask from './IndividualTask';

const ReadAllTasks = ({ msg, trigger }) => {

    const [taskList, setTaskList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`${GOAL_URL}/read/getAll`)
            .then((res) => {
                setTaskList(res.data);
                setIsLoaded(true);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err);
            })
    }, [msg]);

    if (error) {
        return <Alert color="danger">Error - {error}</Alert>
    } else if (!isLoaded) {
        return <Spinner className="text-center" animation="border" role="status" />
    } else {
        return (
            <>
                {taskList.map((task, i) => (
                    <IndividualTask key={i} task={task} trigger={trigger} />
                ))}
            </>
        )
    }
};

export default ReadAllTasks;