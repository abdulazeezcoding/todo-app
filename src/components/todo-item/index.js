// TODO change props to index,todo
function TodoItem(props) {
    return (
    <li className="list-group-item" key={props.index}>
        <input className="form-check-input me-1"
            type="checkbox"
            id={props.index} />
        <label className="form-check-label"
            for={props.index}>
            {props.todo}</label>
            </li>);
                        //Take Home Assignment - Implement DELETE item

}

export default TodoItem;