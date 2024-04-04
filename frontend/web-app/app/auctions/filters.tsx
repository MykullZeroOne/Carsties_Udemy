import {Button}                                       from 'flowbite-react';
import React                                          from 'react'
import {AiOutlineClockCircle, AiOutlineSortAscending} from 'react-icons/ai';
import {BsFillStopCircleFill, BsStopwatchFill}        from 'react-icons/bs';
import {GiFinishLine, GiFlame}                        from 'react-icons/gi';
import {useParamsStore}                               from "@/hooks/useParamStore";

/**
 * Array of page size options for pagination.
 *
 * @type {Array<number>}
 */
const pageSizeButtons = [4, 8, 12];

/**
 * Array of objects representing order buttons.
 * @type {Object[]}
 *
 * @property {string} label - The label to display on the button.
 * @property {React.Component} icon - The icon component to display on the button.
 * @property {string} value - The value associated with the button.
 */
const orderButtons = [
    {
        label: 'Alphabetical',
        icon : AiOutlineSortAscending,
        value: 'make'
    },
    {
        label: 'End date',
        icon : AiOutlineClockCircle,
        value: 'endingSoon'
    },
    {
        label: 'Recently added',
        icon : BsFillStopCircleFill,
        value: 'new'
    },
];

/**
 * Represents an array of filter buttons.
 *  @typedef {Object[]} FilterButtons
 *  @property {string} label - The label of the filter button.
 *  @property {string} icon - The icon to be displayed on the filter button.
 *  @property {string} value - The value associated with the filter button.
 */
const filterButtons = [
    {
        label: 'Live Auctions',
        icon : GiFlame,
        value: 'live'
    },
    {
        label: 'Ending < 6 hours',
        icon : GiFinishLine,
        value: 'endingSoon'
    },
    {
        label: 'Completed',
        icon : BsStopwatchFill,
        value: 'finished'
    },
]

/**
 * This method renders a set of filter buttons for filtering data based on different criteria.
 * It also renders a set of order buttons for sorting the data in ascending or descending order.
 * Additionally, it renders a set of page size buttons for selecting the number of items to be displayed per page.
 *
 * @returns {JSX.Element} - A JSX element representing the rendered filter buttons, order buttons, and page size buttons.
 */
export default function Filters() {
    const pageSize  = useParamsStore((state) => state.pageSize);
    const setParams = useParamsStore((state) => state.setParams);
    const orderBy   = useParamsStore((state) => state.orderBy);
    const filterBy  = useParamsStore((state) => state.filterBy);

    return (
        <div className='flex justify-between items-center mb-4'>

            <div>
                <span className='uppercase text-sm text-gray-500 mr-2'>Filter by</span>
                <Button.Group>
                    {filterButtons.map(({label, icon: Icon, value}) => (
                        <Button
                            key={value}
                            onClick={() => setParams({filterBy: value})}
                            color={`${filterBy === value ? 'red' : 'gray'}`}
                        >
                            <Icon className='mr-3 h-4 w-4'/>
                            {label}
                        </Button>
                    ))}


                    <div>
                        <span className='uppercase text-sm text-gray-500 mr-2'>Order by</span>
                        <Button.Group>
                            {orderButtons.map(({label, icon: Icon, value}) => (
                                <Button
                                    key={value}
                                    onClick={() => setParams({orderBy: value})}
                                    color={`${orderBy === value ? 'red' : 'gray'}`}
                                >
                                    <Icon className='mr-3 h-4 w-4'/>
                                    {label}
                                </Button>
                            ))}
                        </Button.Group>
                    </div>
                    <div>
                        <span className='uppercase text-sm text-gray-500 mr-2'>Page size</span>
                        <Button.Group>
                            {pageSizeButtons.map((value, i) => (
                                <Button key={i}
                                        onClick={() => setParams({pageSize: value})}
                                        color={`${pageSize === value ? 'red' : 'gray'}`}
                                        className='focus:ring-0'
                                >
                                    {value}
                                </Button>
                            ))}
                        </Button.Group>
                    </div>
                </Button.Group>
            </div>
        </div>
    )
}