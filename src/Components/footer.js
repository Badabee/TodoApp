import "./footer.css";

function Footer({ tasks }) {
    const completed = tasks.filter(task => task.completed)
    return (
        <div className="footer">
           <div>{ tasks.length - completed.length } items left</div>
           <div className="middle">
               <span>All items</span>
               <span>Active</span>
               <span>Completed</span>
           </div>
           <div>X clear completed</div>
        </div>


    );
}

export default Footer;
