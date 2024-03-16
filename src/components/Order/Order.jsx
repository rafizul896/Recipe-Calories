import PropTypes from 'prop-types';
import Orderitem from '../Orderitem/Orderitem';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';

const Order = ({ recipe, handleClickToPreparing, currCook }) => {
    return (
        <div className="col-span-2 text-center fireSans">
            <div className='border p-6 rounded-2xl'>
                <h1 className='text-2xl font-semibold'>Want to cook: {recipe.length}</h1>
                <div className="overflow-x-auto mt-5">
                    <table className="table">
                        <thead>
                            <tr className='text-base text-[#282828]'>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                recipe.map((item, idx) => <Orderitem
                                    key={idx}
                                    item={item}
                                    idx={idx}
                                    handleClickToPreparing={handleClickToPreparing}
                                ></Orderitem>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="mt-20">
                    <h1 className='text-2xl font-semibold'>Currently cooking: {currCook.length}</h1>
                    <div className='overflow-x-auto mt-3'>
                        <table className="table">
                            <thead>
                                <tr className='text-base text-[#282828]'>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currCook.map((item, idx) => <CurrentlyCooking
                                        key={idx}
                                        item={item}
                                        idx={idx}
                                    ></CurrentlyCooking>)
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Total Time = {currCook.reduce((p, c) => p + c.preparing_time, 0)} minutes</td>
                                    <td>Total Calories = {currCook.reduce((p, c) => p + c.calories, 0)} calories</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

Order.propTypes = {
    recipe: PropTypes.array,
    handleClickToPreparing: PropTypes.func,
    currCook: PropTypes.array
}

export default Order;