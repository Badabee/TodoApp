import './task.css';

function Task({ tasks }) {
    return (
        <div className="task">
            {
                tasks.map((item, index) => {
                    return (
                        <div key={index} className="list">
                            <div>{item.todo}</div>
                            <div>
                                <input className='check' type="checkbox" />
                            </div>
                        </div>
                    )
                })

            }
        </div>


    );
}

export default Task;
