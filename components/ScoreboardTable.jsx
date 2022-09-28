import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

import GlobalFilter from './GlobalFilter';
import { classNames } from '../lib/helper';

export default function ScoreboardTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { pageIndex, pageSize } = state;
  return (
    <div className='flex flex-col pt-4 md:pt-16'>
      <div className='pt-2 pb-6 '>
        <div className='flex flex-col justify-between space-y-4 sm:space-y-0 sm:items-center sm:flex-row'>
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
      </div>
      <div className='my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 '>
          <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg '>
            {data.length === 0 ? (
              <div className='text-center'>
                <div className='py-4 text-lg text-white animate-pulse'>
                  Sedang menunggu data...
                </div>
              </div>
            ) : (
              <>
                <table
                  columns={columns}
                  data={data}
                  {...getTableProps()}
                  className='min-w-full divide-y divide-gray-200'
                >
                  <thead className='bg-dark-800'>
                    {headerGroups.map((headerGroup, index) => (
                      <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                        {headerGroup.headers.map((column) => (
                          <th
                            key={column.id}
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                            className='md:py-3 text-lg md:text-xl font-bold tracking-wider text-center text-white uppercase group px-3'
                          >
                            <div className='relative flex items-center gap-2 py-1'>
                              <p className='flex-grow'>
                                {column.render('Header')}
                              </p>
                              <span className='flex flex-col items-center justify-center'>
                                <GoTriangleUp
                                  className={classNames(
                                    'transition-colors absolute top-0',
                                    column.isSorted
                                      ? column.isSortedDesc
                                        ? // sorted desc
                                          'text-transparent'
                                        : // sorted asc
                                          'text-gray-700'
                                      : // not sorted
                                        'group-hover:text-gray-400 text-transparent'
                                  )}
                                />
                                <GoTriangleDown
                                  className={classNames(
                                    ' transition-colors absolute bottom-0',
                                    column.isSorted
                                      ? column.isSortedDesc
                                        ? // sorted desc
                                          'text-gray-700'
                                        : // sorted asc
                                          'text-transparent'
                                      : // not sorted
                                        'group-hover:text-gray-400 text-transparent'
                                  )}
                                />
                              </span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {page?.map((row, index) => {
                      prepareRow(row);
                      return (
                        <tr
                          {...row.getRowProps()}
                          className={
                            row.id % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                          }
                          key={index}
                        >
                          {row?.cells?.map((cell, index) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                className='px-6 sm:py-1 text-lg font-light text-gray-900 whitespace-nowrap'
                                key={index}
                              >
                                {cell.render('Cell')}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className='text-white font-secondary text-lg text-center py-10'>
                  <span>
                    Page{' '}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                  </span>
                  <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className='bg-gray text-gray-800 rounded-sm cursor-pointer'>
                    {[10, 25, 50, 100].map(pageSize => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                  <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className={canPreviousPage && `px-3 hover:text-orange-300`}>{canPreviousPage ? `<<` : ``}</button>
                  <button onClick={() => previousPage()} disabled={!canPreviousPage} className={canPreviousPage && `hover:text-orange-300 px-3`}>{canPreviousPage ? `Previous` : ``}</button>
                  <button onClick={() => nextPage()} disabled={!canNextPage} className={canNextPage && `hover:text-orange-300 px-3`}>{canNextPage ? `Next` : ``}</button>
                  <button onClick={() => gotoPage(pageCount -1)} disabled={!canNextPage}className={canNextPage && `hover:text-orange-300 px-3`}>{canNextPage ? `>>` : ``}</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}