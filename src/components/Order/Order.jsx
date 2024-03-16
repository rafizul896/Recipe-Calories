import PropTypes from 'prop-types';
import Orderitem from '../Orderitem/Orderitem';

const Order = ({ recipe }) => {
    return (
        <div className="border col-span-2 p-6 rounded-2xl text-center fireSans">
            <h1>Want to cook: {recipe.length}</h1>
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipe.map((item, idx) => <Orderitem 
                            key={idx}
                            item={item}
                            idx={idx}
                            ></Orderitem>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="mt-20">
                <h1>Currently cooking: { }</h1>
                <div className="divider"></div>
                <div className="flex justify-around list-none">
                    <li>Name</li>
                    <li>Time</li>
                    <li>Calories</li>
                </div>
                <div className="flex justify-around mt-5">
                    <div></div>
                    <h3>Total Time = { } minutes</h3>
                    <h3>Total Calories = { } calories</h3>
                </div>
            </div>
        </div>
    );
};

Order.propTypes = {
    recipe: PropTypes.array
}

export default Order;