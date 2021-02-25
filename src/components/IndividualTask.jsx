import CompletedTask from './CompletedTask';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

const IndividualTask = ({ task, trigger }) => {

    const { title, completed } = task;

    return (
        <div className="col-md-6">
            <div className="card text-dark bg-light mb-3">
                <div className="card-header">
                    {completed ? (<del>{title}</del>) : title}
                </div>
                <div className="card-body d-flex justify-content-end">
                    <CompletedTask task={task} trigger={trigger} />
                    <EditTask task={task} trigger={trigger} />
                    <DeleteTask task={task} trigger={trigger} />
                </div>
            </div>
        </div>
    )
};

export default IndividualTask;