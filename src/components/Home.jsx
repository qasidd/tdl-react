import { useEffect, useState } from 'react';
import CreateTask from './CreateTask';
import { Alert } from 'reactstrap';
import ReadAllTasks from './ReadAllTasks';

const Home = () => {

    const [msg, setMsg] = useState('');
    const [success, setSuccess] = useState(null);

    const trigger = ({ _success, _msg }) => {
        setSuccess(_success);
        setMsg(_msg);
    }

    useEffect(() => {
        const clearStates = setTimeout(() => {
            setMsg('');
            setSuccess(null);
        }, 2000)

        return () => {
            clearTimeout(clearStates);
        }
    }, [msg])

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <CreateTask trigger={trigger} />
                </div>
                <div className="col-md-6">
                    {msg === '' ? (<></>) :
                        success ? (
                            <Alert color="success">{msg}</Alert>
                        ) : (
                                <Alert color="danger">{msg}</Alert>
                            )
                    }
                </div>
            </div>
            <div className="row mt-4">
                <ReadAllTasks trigger={trigger} msg={msg} />
            </div>
        </>
    )
};

export default Home;