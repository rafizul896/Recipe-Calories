import PropTypes from 'prop-types';

const Orderitem = ({item,idx,handleClickToPreparing}) => {
    const {recipe_name,preparing_time,calories} = item;
    return (
        <tr className="bg-base-200">
            <th>{idx+1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td>
                <button onClick={()=>handleClickToPreparing(item)} className="border px-2 py-2 rounded-2xl bg-[#0BE58A] text-sm">Preparing</button>
            </td>
        </tr>
    );
};

Orderitem.propTypes = {
    item: PropTypes.object,
    idx: PropTypes.number,
    handleClickToPreparing: PropTypes.func
}

export default Orderitem;