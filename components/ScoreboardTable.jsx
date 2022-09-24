// import {useTable, useSortBy, useGlobalFilter} from 'react-table';
// import {GoTriangleUp, GoTriangleDown} from 'react-icons/go';

// import {GlobalFilter} from './GlobalFilter';

// import {classNames} from '../lib/helper';

// export default function ScoreBoardTable({columns, data}) {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     state,
//     prepareRow,
//     preGlobalFilteredRows,
//     setGlobalFilter,
//   } = useTable(
//     {
//       columns,
//       data,
//     },
//     useGlobalFilter,
//     useSortBy,
//     );

//   return(
//     <>
//       <div className='flex flex-col'>
//         <div className='pt-2 pb-6'>
//           <div className='flex flex-col justify-between space-y-4 sm:space-y-0 sm:items-center sm:flex-row'>
//             <GlobalFilter
//               preGlobalFilteredRows={preGlobalFilteredRows}
//               globalFilter={state.globalFilter}
//               setGlobalFilter={setGlobalFilter}
//             />
//           </div>
//         </div>
//         <div className='my-2 overflow-x-auto sm:mx-6 lg:-mx-8'>
//           <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
//             <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
//               {data.length === 0 ? (
//                 <div className='text-center'>
//                   <div className='py-4 text-lg text-white animate-pulse'>
//                     Sedang menunggu data
//                   </div>
//                 </div>
//               ) : (
//                 <>
//                   <table
//                     columns={columns}
//                     data={data}
//                     {...getTableProps()}
//                   >
//                     <thead className='bg-dark-400'>
//                       {headerGroups.map((headerGroup, index) => (
//                         <tr {...headerGroup.getHeaderGroupProps()} key={index}>
//                           {headerGroup.headers.map((column) => (
//                             <th
//                               key={column.id}
//                               {...column.getHeaderProps(column.getSortByToggleProps())}
//                               className='px-6 py-3 text-xl font-bold text-white uppercase group'
//                             >
//                               <div className='relative flex items-center justify-between'>
//                                 <p className='flex-grow'>{column.render('Header')}</p>
//                                 <span className='flex flex-col items-center justify-center'>
//                                   <GoTriangleUp
//                                     className={classNames(
//                                       'transition-colors absolute top-0',
//                                       column.isSorted ?
//                                         column.isSortedDesc ?
//                                           'text-transparent'
//                                         : 'text-gray-700'
//                                       : 'group-hover:text-gray-400 text-transparent'
//                                     )}
//                                   />
//                                   <GoTriangleDown
//                                     className={classNames(
//                                       'transition-colors absolute bottom-0',
//                                       column.isSorted ?
//                                         column.isSortedDesc ?
//                                           'text-gray-700'
//                                         : 'text-transparent'
//                                       : 'group-hover:text-gray-400 text-transparent'
//                                     )}                                
//                                   />
//                                 </span>                              
//                               </div>
//                             </th>
//                           ))}
//                         </tr>
//                       ))}
//                     </thead>
//                     <tbody {...getTableBodyProps()}>
//                       {rows.map((row, index) => {
//                         prepareRow(row);
//                         return (
//                           <tr 
//                             {...row.getRowProps()} 
//                             key={index}
//                             className={
//                               row.id % 2 === 0 ? 'bg-white' : 'bg-gray-100'
//                             }
//                           >
//                             {row.cells.map((cell, index) => {
//                               return (
//                                 <td
//                                   {...cell.getCellProps()}
//                                   className='px-6 py-4 text-lg font-light text-gray-900 whitespace-nowrap'
//                                   key={index}
//                                 >
//                                   {cell.render('Cell')}
//                                 </td>
//                               );
//                             })}
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

export default function ScoreboardTable(){
  return (
    <div className="text-white font-secondary text-4xl">
      Ini scoreBoard Table ReactTable
    </div>
  )
}