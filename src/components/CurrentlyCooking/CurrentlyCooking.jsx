import PropTypes from 'prop-types';

const CurrentlyCooking = ({item,idx}) => {
    const {recipe_name,preparing_time,calories} = item;
    return (
        <tr className="bg-base-200">
            <th>{idx+1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
        </tr>
    );
};

CurrentlyCooking.propTypes = {
    item: PropTypes.object,
    idx: PropTypes.number
}

export default CurrentlyCooking;