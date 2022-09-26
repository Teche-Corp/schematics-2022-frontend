// import { useState } from 'react';
// import { useAsyncDebounce } from 'react-table';
// import { HiSearch } from 'react-icons/hi';
// import 'regenerator-runtime/runtime';

// export default function GlobalFilter({
//   preGlobalFilteredRows,
//   globalFilter,
//   setGlobalFilter,
// }) {
//   const count = preGlobalFilteredRows.length;
//   const [value, setValue] = useState(globalFilter);
//   const onChange = useAsyncDebounce((value) => {
//     setGlobalFilter(value || undefined);
//   },200);
//   return (
//     <>
//       <div className='flex flex-col space-y-1 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row'>
//         <div>
//           <label className='text-gray-500 sr-only'>Cari: </label>
//           <div className='relative'>
//             <input
//               placeholder='Cari Tim...'
//               value={value || ''}
//               onChange={e => {
//                 setValue(e.target.value);
//                 onChange(e.target.value);
//               }}
//               className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//             />
//             <div className='absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none'>
//               <HiSearch className='text-xl text-gray-300' />
//             </div>
//           </div>
//         </div>
//         <p className='text-sm text-gray-300'>Menampilkan {count}</p>
//       </div>
//     </>
//   )
// }

export default function GlobalFilter() {
  return (
    <>
      <div className="text-center">
        <p className="text-white">Ini global filter reactTable</p>
      </div>
    </>
  )
}