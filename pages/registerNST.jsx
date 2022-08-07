import Head from "next/head";
import Nav from "../components/Nav";
import { useState } from "react";

function NSTform() {
  return (
    <form className='w-full sm:w-1/3 xl:w-1/4 px-8 sm:px-0 md:mx-auto flex flex-col'>
      <label htmlFor='name' className='mb-1 text-white '>
        Nama Lengkap
      </label>
      <input
        className='p-1 mb-4 rounded-md border-none'
        id='name'
        name='name'
        type='text'
        required
      />
      <label htmlFor='email' className='mb-1 text-white '>
        Email
      </label>
      <input
        className='p-1 mb-4 rounded-md border-none'
        id='email'
        name='email'
        type='email'
        required
      />
      <label htmlFor='phone-number' className='mb-1 text-white '>
        No handphone
      </label>
      <input
        className='p-1 mb-4 rounded-md border-none'
        id='phone-number'
        name='phone-number'
        type='text'
        required
      />
      <label htmlFor='alamat' className='mb-1 text-white '>
        Alamat tempat Tinggal
      </label>
      <input
        className='p-1 mb-4 rounded-md border-none'
        id='alamat'
        name='alamat'
        type='text'
        required
      />
      <label htmlFor='media' className='mb-1 text-white '>
        Darimana kamu mendapatkan informasi Schematics NST?
      </label>
      <select
        name='media'
        id='media'
        className='p-1 mb-4 rounded-md border-none'
      >
        <option value='Sosial Media Schematics' selected>
          Sosial Media Schematics
        </option>
        <option value='Akun Informasi lomba'>Akun Informasi lomba</option>
        <option value='Grup atau Chat'>Grup atau Chat</option>
        <option value='Roadshow Offline'>Roadshow Offline</option>
        <option value='Roadshow Online'>Roadshow Online</option>
        <option value='Teman/kerabat'>Teman/kerabat</option>
        <option value='Lainnya'>Lainnya</option>
      </select>
      <label htmlFor='vaksin' className='mb-1 text-white '>
        Jenis Vaksinasi COVID-19
      </label>
      <select
        name='vaksin'
        id='vaksin'
        className='p-1 mb-4 rounded-md border-none'
      >
        <option value='Pertama'>Pertama</option>
        <option value='Kedua'>Kedua</option>
        <option value='Ketiga'>Ketiga</option>
        <option value='Tidak Vaksin Karena Masalah Kesehatan'>
          Tidak Vaksin Karena Masalah Kesehatan
        </option>
      </select>
      <hr />
      <br />
      <label htmlFor='bukti-vaksin' className='text-center mb-1 text-white'>
        Sertifikat Vaksinasi atau Surat Dokter
      </label>
      <input
        type='file'
        name='bukti-vaksin'
        id='bukti-vaksin'
        className='file:w-full file:h-32 file:rounded-lg'
        accept='.pdf'
      />
    </form>
  );
}

export default function registerNST() {
  const [ticket, setTicket] = useState([]);

  function handleClick() {
    setTicket(ticket.concat(<NSTform key={ticket.length} />));
  }

  return (
    <>
      <Head>
        <title>Schematics 2022 | NST Register</title>
        <meta name='description' content='Schematics 2022' />
        <link rel='icon' href='/schematics-logo.png' />
        <meta charset='UTF-8' />
      </Head>

      <Nav />
      <main className='bg-dark-primary'>
        <div className='w-full min-h-screen md:min-h-max'>
          <div className='pt-32 pb-24 flex flex-col gap-8 items-center'>
            <h1 className='pt-12 font-primary text-white text-4xl md:text-6xl '>
              Data Pendaftaran
            </h1>
            <NSTform />
            {/* looping to show NSTform */}
            {ticket}
            {ticket.length < 4 && (
              <button
                className='w-72 text-white cursor-pointer'
                onClick={handleClick}
              >
                Tambah tiket
              </button>
            )}
            <input
              type='submit'
              value='submit'
              className='bg-blue-400 px-3 py-2 rounded-md text-white '
            />
          </div>
        </div>
      </main>
    </>
  );
}
